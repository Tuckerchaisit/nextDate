import DatePlan from "../DatePlan/DatePlan.jsx";
import { Link } from "react-router-dom";


const DatePlanList = (props) => {
  
  const ownerId = props.owner.map(profile => profile._id)

  return (
    <>
    
      <h1>These are all the Date Plans</h1>
      <div className="datePlan-container">
        {props.datePlans 
        .filter(datePlan => ownerId[0] === datePlan.owner._id)
        .map(datePlan => 
          <DatePlan key={datePlan.location} datePlan={datePlan} />
          )} 
      </div>
      <Link 
        to='/new'
      >
        Add Date Plan
      </Link>
    </>
  );
}
 
export default DatePlanList;