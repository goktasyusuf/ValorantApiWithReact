import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AboutAgent = (props) => {
  let userId = useParams();

  const [agent, setAgent] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://valorant-api.com/v1/agents/${userId.id}`
      );
      setAgent(response.data.data);
    }
    fetchData();
  }, [userId.id]);

  return (
    <div style={{ backgroundColor: "#000d33" }}>
      <div className="container">
        <br />
        <div
          className="p-2 d-flex"
          style={{
            backgroundColor: "#001a66",
            borderRadius: "10px",
            justifyContent: "space-between",
          }}
        >
          <h2 style={{ color: "white", marginLeft: "10px" }}>
            {agent.displayName}
          </h2>
          <div className="mt-2" style={{}}>
            <Link
              href="#"
              to={"/"}
              style={{ textDecoration: "none", color: "#afff46" }}
            >
              Home Page
            </Link>
            <span style={{ color: "white" }}> ----> {agent.displayName}</span>
          </div>
        </div>

        <br />
        <div className="row">
          <div className="col-6">
            <div className="card p-3" style={{ backgroundColor: "#001a66" }}>
              <div className="row">
                <div className="col-4">
                  <img
                    style={{ maxWidth: "100%" }}
                    src={agent?.displayIcon}
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <h2 style={{ color: "#afff46" }}>Information</h2>
                  <p style={{ color: "white" }}>{agent?.description}</p>
                  <hr />
                  <div
                    className="d-flex"
                    style={{ justifyContent: "space-between" }}
                  >
                    <p style={{ color: "white" }}>Developer Name</p>
                    <p style={{ color: "white" }}>{agent?.developerName}</p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div
              className="card p-5 mb-5"
              style={{ backgroundColor: "#001a66" }}
            >
              <h5 style={{ color: "#afff46" }}>Voice</h5>
              <br />
              <audio controls>
                <source
                  src={agent?.voiceLine?.mediaList[0].wave}
                  type="audio/wav"
                />
              </audio>
            </div>

            <div className="card p-5" style={{ backgroundColor: "#001a66" }}>
              <h2 className="text-center" style={{ color: "#afff46" }}>
                {agent?.role?.displayName}
              </h2>
              <p className="text-white">{agent?.role?.description}</p>
            </div>
            <br />
            <br />
            <div
              className="d-flex card p-5"
              style={{ backgroundColor: "#001a66" }}
            >
              <div className="alt_kısım col-6" style={{ margin: "auto" }}>
                <img
                  src={agent?.fullPortrait}
                  style={{ maxWidth: "100%", display: "block" }}
                  alt=""
                />
                <br />
                <h4
                  className="text-center"
                  style={{ marginLeft: "20px", color: "white" }}
                >
                  {agent?.agentRole}
                </h4>
                <h5 className="text-center">
                  <a
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      marginLeft: "20px",
                      color: "#afff46",
                    }}
                    href="https://www.riotgames.com"
                  >
                    Click For More Information...
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              {agent?.abilities?.map((ability) => (
                <div className="col-12" key={ability.slot}>
                  <div
                    className="card mb-4 p-3"
                    style={{ backgroundColor: "#001a66" }}
                  >
                    <div className="row">
                      <div className="col-4">
                        <img
                          style={{
                            width: "100%",
                            color:"white"
                          }}
                          src={ability?.displayIcon}
                          alt="No Image"
                        />
                      </div>
                      <div className="col-8">
                        <h5 style={{ color: "#afff46" }}>
                          {ability?.displayName}
                        </h5>

                        <hr />
                        <h6 className="text-white">{ability?.slot}</h6>
                        <p style={{ color: "#afff46" }}>
                          {ability.description}
                        </p>
                      </div>
                      <div className="containercakma mt-5">
                        <h5 className="text-white">Video</h5>
                        <video
                          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                          style={{ width: "100%", marginTop: "20px" }}
                          controls="controls"
                          autoPlay={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutAgent;
