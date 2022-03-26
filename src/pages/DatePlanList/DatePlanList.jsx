import * as  datePlanService from "../../services/datePlan.js";
import { useState, useEffect } from 'react';


const DatePlanList = () => {

  const [datePlans, setDatePlans] = useState([])
  
  
  
  useEffect(() => {
    datePlanService.getAllDatePlans() 
    .then(datePlans => setDatePlans(datePlans))
  }, [])
  
  const allDatePlans = datePlans.map(datePlan =>
   <p >{datePlan.location}</p> 
  )
  
  return (
    <>
      <h1>These are all the Date Plans</h1>
      <div>
        {allDatePlans} 
      </div>
    </>
  );
}
 
export default DatePlanList;