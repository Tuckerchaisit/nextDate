import { Link } from "react-router-dom";
import React from "react";
import "./datePlan.scss"

const DatePlan = ({
  datePlan,
  handleDeleteDatePlan,
  user,
  ownerEmail,
  ownerId,
}) => {
  return (
    <React.Fragment key={user.name}>
      <div className="dp-card">
      {ownerEmail[0] === user.email ? (
          <div>
            <button onClick={() => handleDeleteDatePlan(datePlan._id)} className="dlt-dp-btn">
              X
            </button>
          </div>
        ) : (
          ""
        )}

        <Link to={`/dateplans/${datePlan._id}`} state={{ ownerId }}>

        <img src={datePlan.photo ? datePlan.photo : 'No Image'} alt={'Date Plan'} />
        <h2 className="datePlan-info dp-title-info">{datePlan.title}</h2>
        <h3 className="datePlan-info">Location:{datePlan.location}</h3>
        </Link>
        </div>

    </React.Fragment>
  );
};

export default DatePlan;
