import React, { useContext } from "react";
import { Card, Button } from "semantic-ui-react";
import { Activity } from "../../../app/models/Activities";
import ActivityStore from "../../../app/stores/activitiesStore";
import { observer } from "mobx-react-lite";

interface IProps {
  selectedActivity: Activity;
}

const ActivityDetails: React.FC<IProps> = ({ selectedActivity }) => {
  const activityStore = useContext(ActivityStore);
  const { setEditMode, setSelectedActivity } = activityStore;

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{selectedActivity.title} </Card.Header>
        <Card.Meta>
          <span>{selectedActivity.date}</span>
        </Card.Meta>
        <Card.Description>{selectedActivity.description} </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            onClick={() => setEditMode(true)}
            color="blue"
            basic
            content="Edit"
          />
          <Button
            onClick={() => setSelectedActivity("")}
            color="grey"
            basic
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default observer(ActivityDetails);
