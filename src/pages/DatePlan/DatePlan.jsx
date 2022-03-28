import { Link } from "react-router-dom";

const DatePlan = ({datePlan}) => {

  console.log(datePlan)
  return (
    <>
      <div>
        <h2>Date plan</h2>
        <h3>Location:{datePlan.location}</h3>
        <h3>Activity:{datePlan.activity}</h3>
        <h3>Food:{datePlan.food}</h3>
        <h3>Chats:{datePlan.chats}</h3>
        <Link to="/edit" state={{datePlan}}>Edit Date Plan</Link> 
      </div>
    </>
  );
};
 
export default DatePlan;