import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import * as datePlanService from '../../services/datePlan.js'
import { Link } from "react-router-dom";




const ShowDateplan = ({datePlans, datePlan, handleDeleteDatePlan, ownerId, profiles, user, proIdx, findProfileIndex}) => {
  const [datePlanDetail, setDatePlanDetail] = useState({})
  const { id } = useParams()

  
  
  
  useEffect(()=> {
    datePlanService.getDatePlanDetails(id)
    .then(datePlanDetails => setDatePlanDetail(datePlanDetails))
  },[])
  
  
  return ( 
    <>
      <div>
        <h1>{datePlanDetail.title}</h1>
        <img src={datePlanDetail.photo ? datePlanDetail.photo : 'No Image'} alt={'Date Plan'} />
        <h3>Location: {datePlanDetail.location}</h3>
        <p>Date Details: {datePlanDetail.detail}</p>
        <p>Food: {datePlanDetail.food}</p>
        <p>Activities: {datePlanDetail.activity}</p>
        {datePlanDetail.owner?.email === user.email ? 
          <Link to="/edit" state={{ datePlanDetail }}>
            Edit Date Plan
          </Link> 
          : ''
      }
      
      </div>
      
       
    </>
  );
}
 
export default ShowDateplan;