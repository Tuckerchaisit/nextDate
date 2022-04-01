import { Link } from "react-router-dom";
import "./icebreaker.scss";
import React from "react";

const Icebreakers = (props) => {
  const IceBreakerList = props.iceBreakers.map((icebreaker) => {
    console.log(icebreaker);

    const profId = icebreaker.owner._id;
    return (
      <React.Fragment key={icebreaker._id}>
        <div className="container">
            <Link to={`/profiles/${profId}`}>
              <img
                src={
                  icebreaker.owner.photo ? icebreaker.owner.photo : "No Image"
                }
                alt={"Person"}
              />
              <h2 key={profId} className="name">
                {icebreaker.owner.name}
              </h2>
            </Link>
            <div className="info">
              <p>Fun fact: {icebreaker.funFact}</p>
              <p>Question: {icebreaker.question}</p>
            </div>
            {icebreaker.owner.email === props.user.email ? (
              <button
                onClick={() => props.handleDeleteIceBreaker(icebreaker._id)}
                className="dlt-btn"
              >
                X
              </button>
            ) : (
              ""
            )}
          </div>
      </React.Fragment>
    );
  });

  return (
    <div className="mainbody">
      <h1 className="title">All Icebreakers</h1>
      <Link to="/addicebreaker">
        <button className="add-IB">Add Ice Breaker</button>
      </Link>
      <div>{IceBreakerList}</div>
    </div>
  );
};

export default Icebreakers;
