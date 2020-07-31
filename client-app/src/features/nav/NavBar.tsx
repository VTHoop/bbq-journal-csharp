import React, { useContext } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import ActivityStore from "../../app/stores/activitiesStore";

const NavBar = () => {
  const activityStore = useContext(ActivityStore);

  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item>
          <img src="/assets/logo.png" alt="logo" />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button
            onClick={activityStore.openCreateForm}
            positive
            content="Create Activity"
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
