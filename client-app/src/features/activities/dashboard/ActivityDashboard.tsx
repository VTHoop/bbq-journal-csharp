import React, { useContext } from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityStore from "../../../app/stores/activitiesStore";
import { observer } from "mobx-react-lite";

const ActivityDashboard = () => {
  const activityStore = useContext(ActivityStore);
  const { selectedActivity, editMode } = activityStore;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList />
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedActivity && (
          <ActivityDetails selectedActivity={selectedActivity!} />
        )}
        {editMode && <ActivityForm />}
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashboard);
