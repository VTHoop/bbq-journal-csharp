import React, { useContext, Fragment } from "react";
import JournalStore from "../../../app/stores/journalsStore";
import { observer } from "mobx-react-lite";
import "./journal-list.css";
import moment from "moment";
import { Link } from "react-router-dom";

const JournalList: React.FC = () => {
  const journalStore = useContext(JournalStore);
  const { journalsByDateAsc } = journalStore;

  return (
    <div className="flex flex-column items-center w-100">
      {journalsByDateAsc.map((journal) => (
        <Link
          to={`/${journal.id}`}
          key={journal.id}
          className="br2 ba dark-gray b--black mv4 w-70 w-50-m bg-near-white no-underline lh-copy"
        >
          <img alt="a kitten looking menacing." />
          <div className="pa2 ph3-ns pb3-ns">
            <div className="w-100 mt1">
              <div className="f4 f3-ns mv0">{journal.name}</div>
            </div>
            <div className="w-100 mt1">
              <div className="f5 mv0">{journal.cut}</div>
            </div>
            <div className="rating">
              {/* font awesome star */}

              <div>{journal.rating}</div>
            </div>
            <span className="tag">{journal.grill}</span>
            <span className="tag">{journal.meat}</span>
            <div className="f6">
              Started at: {moment(journal.startTime).format("h:mm:ss A")}
            </div>
            <div className="f6">
              Stopped at: {moment(journal.endTime).format("h:mm:ss A")}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default observer(JournalList);
