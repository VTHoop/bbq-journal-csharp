import React, { useContext } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import ActivityStore from "../../../app/stores/activitiesStore";
import { observer } from "mobx-react-lite";

const ActivityForm = () => {
  const activityStore = useContext(ActivityStore);
  const { selectedActivity, setEditMode } = activityStore;

  return (
    <Segment clearing>
      <Form>
        <Form.Input placeholder="Title" value={selectedActivity?.title} />
        <Form.TextArea
          rows={2}
          placeholder="Description"
          value={selectedActivity?.description}
        />
        <Form.Input placeholder="Category" value={selectedActivity?.category} />
        <Form.Input
          type="date"
          placeholder="Date"
          value={selectedActivity?.date}
        />
        <Form.Input placeholder="City" value={selectedActivity?.city} />
        <Form.Input placeholder="Venue" value={selectedActivity?.venue} />
        <Button floated="right" positive type="submit" content="Submit" />
        <Button
          onClick={() => setEditMode(false)}
          floated="right"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};

export default observer(ActivityForm);
