import { observable, action, computed, configure, runInAction } from "mobx";
import { createContext } from "react";
import { Journal } from "../models/Journal";
import agent from "../api/agent";

configure({ enforceActions: "always" });
class JournalStore {
  @observable JournalRegistry = new Map();
  @observable selectedJournal: Journal | null = null;
  @observable editMode: boolean = false;
  @observable loading: boolean = false;

  @computed get journalsByDateAsc(): Journal[] {
    return Array.from(this.JournalRegistry.values()).sort(
      (a, b) => Date.parse(a.date) - Date.parse(b.date)
    );
  }

  @action loadJournals = async () => {
    this.loading = true;
    try {
      var journals = await agent.Journals.list();
      runInAction(() => {
        journals.forEach((journal) => {
          journal.startTime = journal.startTime.split(".")[0];
          journal.endTime = journal.endTime.split(".")[0];

          this.JournalRegistry.set(journal.id, journal);
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

  @action loadJournal = async (id: string) => {
    this.loading = true;
    const journal = this.getJournal(id);
    if (journal) {
      this.selectedJournal = journal;
      this.loading = false;
    } else {
      try {
        const loadedJournal = await agent.Journals.details(id);
        runInAction(() => {
          this.selectedJournal = loadedJournal;
        });
      } catch (err) {
        console.log(err);
      } finally {
        runInAction(() => {
          this.loading = false;
        });
      }
    }
  };

  getJournal = (id: string) => this.JournalRegistry.get(id);

  @action setSelectedJournal = (id: string) => {
    const selectedJournal = this.JournalRegistry.get(id);
    selectedJournal
      ? (this.selectedJournal = selectedJournal)
      : (this.selectedJournal = null);
    this.editMode = false;
  };

  @action setEditMode = (isEditMode: boolean) => {
    this.editMode = isEditMode;
  };

  @action openCreateForm = () => {
    this.editMode = true;
    this.selectedJournal = null;
  };
}

export default createContext(new JournalStore());
