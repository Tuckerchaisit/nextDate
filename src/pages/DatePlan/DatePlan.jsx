import { Link } from "react-router-dom";

const DatePlan = ({datePlan, handleDeleteDatePlan, user, ownerEmail}) => {

  return (
    <>
      <div>
        <Link to={`/dateplans/${datePlan._id}`} state={{ datePlan }}>
        <h2>Title:{datePlan.title}</h2>
        <h3>Location:{datePlan.location}</h3>
        <h3>Activity:{datePlan.activity}</h3>
        <h3>Food:{datePlan.food}</h3>
        <h3>Detail:{datePlan.detail}</h3>
        
              
            </Link>
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