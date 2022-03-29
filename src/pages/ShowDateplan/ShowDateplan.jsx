import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import * as datePlanService from '../../services/datePlan.js'




const ShowDateplan = ({datePlans}) => {
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
        <h3>{datePlanDetail.location}</h3>
        <p>{datePlanDetail.detail}</p>
        <p>{datePlanDetail.food}</p>
        <p>{datePlanDetail.activity}</p>
      </div>
    </>
   );
}
 
export default ShowDateplan;