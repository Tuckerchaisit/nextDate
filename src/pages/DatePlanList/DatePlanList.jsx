import DatePlan from "../DatePlan/DatePlan.jsx";
import { Link } from "react-router-dom";
import Profiles from "../Profiles/Profiles.jsx";

import React, { useState, useEffect } from 'react';
import * as datePlanService from '../../services/datePlan'
import "./datePlanList.scss"


const DatePlanList = (props) => {
  const ownerId = props.owner.map((profile) => profile._id);
  const ownerEmail = props.owner.map((profile) => profile.email);

  return (
    <React.Fragment key={props.user.name}>

     
     <div className="dp-list-box">
      <h1 className="dp-title">My Date Plans</h1>
        {ownerEmail[0] === props.user.email ? 
        <>
           <Link to="/new">
             <button className="newDPbtn">New Date Plan</button>
           </Link>
       </>
       :
       ""
        }

      <div className="datePlan-container">
        <div className="dp-box">
        {props.datePlans
          .filter((datePlan) => ownerId[0] === datePlan.owner?._id)
          .map((datePlan) => (
            <DatePlan
              key={datePlan.location}
              datePlan={datePlan}
              handleDeleteDatePlan={props.handleDeleteDatePlan}
              user={props.user}
              ownerEmail={ownerEmail}
              ownerId={ownerId}
            />

            )}
            </div> 
      </div> 
      </div>
    
     </React.Fragment>
  )
}
 
export default DatePlanList;

