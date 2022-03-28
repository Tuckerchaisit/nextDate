import DatePlan from "../DatePlan/DatePlan.jsx";
import { Link } from "react-router-dom";
import Profiles from "../Profiles/Profile.jsx";


const DatePlanList = (props) => {
  
  const ownerId = props.owner.map(profile => profile._id)
  const ownerEmail = props.owner.map(profile => profile.email)

  const filteredProfile = props.profiles.filter((profile,idx)=>{
    return(
      idx===props.proIdx
    )
  })
  const profile = filteredProfile[0]

  return (
    <>
      <h1>My Date Plans</h1>
      <div className="datePlan-container">
        {props.datePlans
          .filter((datePlan) => ownerId[0] === datePlan.owner._id)
          .map((datePlan) => (
            <DatePlan
              key={datePlan._id}
              datePlan={datePlan}
              handleDeleteDatePlan={props.handleDeleteDatePlan}
              user={props.user}
              ownerEmail={ownerEmail}
            />
          ))}
      </div>

      {ownerEmail[0] === props.user.email ? (
        <Link to="/new">Add Date Plan</Link>
      ) : (
        ""
      )}
    </>
  );
}
 
export default DatePlanList;