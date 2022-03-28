import DatePlan from "../DatePlan/DatePlan.jsx";
import { Link } from "react-router-dom";
import Profiles from "../Profiles/Profile.jsx";


const DatePlanList = (props) => {
  
  const ownerId = props.owner.map(profile => profile._id)
  

  const filteredProfile = props.profiles.filter((profile,idx)=>{
    return(
      idx===props.proIdx
    )
  })

  const profile = filteredProfile[0]
  
  // console.log("ownerId: ", ownerId)
  // console.log("filteredProfile: ", filteredProfile)
  // console.log('profile: ', profile)

  
  return (
    <>
      <h1>These are all the Date Plans</h1>
      <div className="datePlan-container">
        {props.datePlans
          .filter((datePlan) => ownerId[0] === datePlan.owner._id)
          .map((datePlan) => (
            <DatePlan key={datePlan._id} datePlan={datePlan} />
          ))}
      </div>

      
      <Link to="/new">Add Date Plan</Link> 
    </>
  );
}
 
export default DatePlanList;