import { Link } from "react-router-dom";

const DatePlan = ({datePlan, handleDeleteDatePlan, user, ownerEmail, ownerId}) => {

  return (
    <>
      <div>
      {ownerEmail[0] === user.email ? (
          <>
            <button onClick={() => handleDeleteDatePlan(datePlan._id)}>
              Delete
            </button>
          </>
        ) : (
          ""
        )}
        
        <Link to={`/dateplans/${datePlan._id}`} state={{ ownerId }}>
        <h2>Title:{datePlan.title}</h2>
        <h3>Location:{datePlan.location}</h3>
        </Link>
        
      </div>
    </>
  );
};
 
export default DatePlan;