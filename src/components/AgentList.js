import React from "react";
import { Link } from "react-router-dom";

const AgentList = (props) => {
  return (
    <div className="row">
      {props.agents.map((agent) => (
        <div className="col-lg-4" key={agent?.uuid}>
          <div className="card mb-4">
            <img src={agent.displayIcon} alt="Agent" />

            <div className="card-body">
              <div className="row">
                <h5 className="card-title">{agent.displayName}</h5>
              </div>
              <p className="card-text">
                {agent.description.substring(0, 100)}...
              </p>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div style={{margin:"auto"}} className="p-2">
                  <span className="badge bg-success">{agent?.role?.displayName}</span>
                </div>
              </div>
              <br />
              <div className="d-flex">
              <Link to={`/agents/${agent.uuid}`} className="btn btn-md btn-danger m-auto">More Information...</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AgentList;
