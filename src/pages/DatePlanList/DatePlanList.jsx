import DatePlan from "../DatePlan/DatePlan.jsx";
import { Link } from "react-router-dom";
import Profiles from "../Profiles/Profile.jsx";


const DatePlanList = ({profiles, owner, datePlans, handleDeleteDatePlan, user, proIdx}) => {
  console.log(datePlans);
  const ownerId = owner.map(profile => profile._id)
  const ownerEmail = owner.map(profile => profile.email)
  
  const filteredProfile = profiles.filter((profile,idx)=>{
    return(
      idx===proIdx
    )
  })
  const profile = filteredProfile[0]

  return (
    <>
      <h1>My Date Plans</h1>
       <div className="datePlan-container">
        {datePlans
          .filter((datePlan) => ownerId[0] === datePlan.owner._id)
          .map((datePlan) => (
            <DatePlan
              key={datePlan._id}
              datePlan={datePlan}
              handleDeleteDatePlan={handleDeleteDatePlan}
              user={user}
              ownerEmail={ownerEmail}
            />
          ))}
      </div> 
      {/* {datePlans.map(datePlan =>
        <DatePlan 
        datePlan={datePlan}
        handleDeleteDatePlan={handleDeleteDatePlan}
        user={user}
        ownerEmail={ownerEmail}
        />
        )} */}
     {ownerEmail[0] === user.email ? 
        <Link to="/new">Add Date Plan</Link>
        : ""
     }
     
    </>
  );
}
 
export default DatePlanList;