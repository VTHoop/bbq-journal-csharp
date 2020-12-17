import React, { useContext, useEffect } from "react";
import JournalStore from "../../../app/stores/journalsStore";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "react-router-dom";

interface JournalParams {
  id: string;
}

const JournalDetails: React.FC<RouteComponentProps<JournalParams>> = ({
  match,
}) => {
  const journalStore = useContext(JournalStore);
  const { selectedJournal, loadJournal } = journalStore;

  useEffect(() => {
    loadJournal(match.params.id);
  }, [loadJournal, match.params.id]);

  return <div>{selectedJournal?.id}</div>;
};

export default observer(JournalDetails);
