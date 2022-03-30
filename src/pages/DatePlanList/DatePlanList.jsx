import DatePlan from "../DatePlan/DatePlan.jsx";
import { Link } from "react-router-dom";
import Profiles from "../Profiles/Profiles.jsx";
import React, { useState, useEffect } from 'react';
import * as datePlanService from '../../services/datePlan'




const DatePlanList = (props) => {
  
  const ownerId = props.owner.map(profile => profile._id)
  const ownerEmail = props.owner.map(profile => profile.email)
  
  // const filteredProfile = profiles.filter((profile,idx)=>{
  //   return(
  //     idx===proIdx
  //   )
  // })
  // const profile = filteredProfile[0]
  

  return (
    <>
     {ownerEmail[0] === props.user.email ? 
     <>
        <Link to="/new">Add Date Plan</Link>
    </>
    :
    ""
     }
     
      <h1>My Date Plans</h1>
      <div className="datePlan-container">
        {props.datePlans
          .filter( datePlan => ownerId[0] === datePlan.owner?._id)
          .map(datePlan => 
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
     
    
     </>
  )
}
 
export default DatePlanList;