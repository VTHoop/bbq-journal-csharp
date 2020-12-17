import React, { useEffect, useContext, Fragment } from "react";
import "./styles.css";

import JournalStore from "../stores/journalsStore";
import { observer } from "mobx-react-lite";
import { NavBar } from "../../features/nav/NavBar";
import { Route, Link } from "react-router-dom";
import AddButton from "./AddButton";
import JournalForm from "../../features/activities/form/JournalForm";
import JournalList from "../../features/activities/list/JournalList";
import JournalDetails from "../../features/activities/details/JournalDetails";

const App = () => {
  const journalStore = useContext(JournalStore);

  useEffect(() => {
    journalStore.loadJournals();
  }, [journalStore]);

  if (journalStore.loading)
    return <progress className="progress is-small is-primary" max="100" />;

  return (
    <Fragment>
      <NavBar />
      <div className="container bg-light-gray">
        <Route exact path="/" component={JournalList} />
        <Route exact path="/journal/create" component={JournalForm} />
        <Route exact path="/:id" component={JournalDetails} />
        <Link to="journal/create">
          <AddButton />
        </Link>
      </div>
    </Fragment>
  );
};

export default observer(App);
