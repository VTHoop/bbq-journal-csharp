import { observable, action, computed, configure, runInAction } from "mobx";
import { createContext } from "react";
import { Activity } from "../models/Activities";
import agent from "../api/agent";

configure({ enforceActions: "always" });
class ActivityStore {
  @observable activityRegistry = new Map();
  @observable selectedActivity: Activity | null = null;
  @observable editMode: boolean = false;
  @observable loading: boolean = false;

  @computed get activitiesByDateAsc() {
    return Array.from(this.activityRegistry.values()).sort(
      (a, b) => Date.parse(a.date) - Date.parse(b.date)
    );
  }

  @action loadActivities = async () => {
    this.loading = true;
    try {
      var activities = await agent.Activities.list();
      runInAction(() => {
        activities.forEach((activity) => {
          activity.date = activity.date.split(".")[0];
          this.activityRegistry.set(activity.id, activity);
        });
      });
    } catch (err) {
      console.log(err);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  @action setSelectedActivity = (id: string) => {
    const selectedActivity = this.activityRegistry.get(id);
    selectedActivity
      ? (this.selectedActivity = selectedActivity)
      : (this.selectedActivity = null);
    this.editMode = false;
  };

  @action setEditMode = (isEditMode: boolean) => {
    this.editMode = isEditMode;
  };

  @action openCreateForm = () => {
    this.editMode = true;
    this.selectedActivity = null;
  };
}

export default createContext(new ActivityStore());
