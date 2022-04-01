import { Link } from "react-router-dom";
import React from "react";

const DatePlan = ({
  datePlan,
  handleDeleteDatePlan,
  user,
  ownerEmail,
  ownerId,
}) => {
  return (
    <React.Fragment key={user.name}>
      <div>
        {ownerEmail[0] === user.email ? (
          <>
            <button onClick={() => handleDeleteDatePlan(datePlan._id)}>
              Delete
            </button>
          </>
        ) : (
          ""
        )}

        <Link to={`/dateplans/${datePlan._id}`} state={{ ownerId }}>
          <h2>Title:{datePlan.title}</h2>
          <h3>Location:{datePlan.location}</h3>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default DatePlan;
