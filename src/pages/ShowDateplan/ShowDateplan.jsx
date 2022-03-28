import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import * as datePlanService from '../../services/datePlan.js'




const ShowDateplan = () => {
  const [datePlanDetail, setDatePlanDetail] = useState({})
  const { id } = useParams()
  useEffect(()=> {
    datePlanService.getDatePlanDetails(id)
    .then(datePlanDetails => setDatePlanDetail(datePlanDetails))
  },[])
  console.log(datePlanDetail);
  
  return ( 
    <>
      <div>
        <p>{datePlanDetail.food}</p>
        <p>{datePlanDetail.title}</p>
        <p>{datePlanDetail.detail}</p>
      </div>
    </>
   );
}
 
export default ShowDateplan;