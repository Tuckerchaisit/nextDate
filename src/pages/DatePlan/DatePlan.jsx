const DatePlan = (props) => {
  return ( 
    <>
<div>
<h2>Date plan</h2>
<h3>Location:{props.datePlan.location}</h3>
<h3>Activity:{props.datePlan.activity}</h3>
<h3>Food:{props.datePlan.food}</h3>
<h3>Chats:{props.datePlan.chats}</h3>
</div>
    </> 

  );
}
 
export default DatePlan;