import React, { Fragment } from "react";
import { Grill } from "../../../app/models/GrillEnum";

const JournalForm: React.FC = () => {
    console.log(Grill);
  return (
    <Fragment>
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input className="input" type="text" placeholder="Text input" />
        </div>
      </div>

      <div className="field">
        <label className="label">Grill</label>
        <div className="control">
          <div className="select">
            <select>
              {Object.keys(Grill).map((grill) => {
                if (!Number(grill)) return <option key={grill}>{grill}</option>;
                return null;
              })}
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">Cut</label>
        <div className="control">
          <input className="input" type="text" placeholder="Text input" />
        </div>
      </div>

      <div className="field">
        <label className="label">Rating</label>
        <div className="control">
          <input className="input" type="text" placeholder="Text input" />
        </div>
      </div>
    </Fragment>
  );
};

export default JournalForm;
