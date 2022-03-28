import { Link } from "react-router-dom";

const DatePlan = ({datePlan, handleDeleteDatePlan, user, ownerEmail}) => {

  console.log(datePlan)
  return (
    <>
      <div>
        <h2>Date plan</h2>
        <h3>Location:{datePlan.location}</h3>
        <h3>Activity:{datePlan.activity}</h3>
        <h3>Food:{datePlan.food}</h3>
        <h3>Chats:{datePlan.chats}</h3>
        {ownerEmail[0] === user.email ? (
          <>
            <Link to="/edit" state={{ datePlan }}>
              Edit Date Plan
            </Link>
            <button onClick={() => handleDeleteDatePlan(datePlan._id)}>
              Delete
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
 
export default DatePlan;