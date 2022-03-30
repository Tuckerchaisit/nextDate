import { Link } from "react-router-dom";

const Icebreakers = (props) => {

  const IceBreakerList = props.iceBreakers.map((icebreaker) => {
    console.log(icebreaker.owner.name);
    return (
      <>
      {/* <Link to="/profile">See Profile</Link> */}
        <h2>{icebreaker.owner.name}:</h2>
        <p>Fun fact: {icebreaker.funFact}</p>
        <p>Question: {icebreaker.question}</p>

        {icebreaker.owner.email === props.user.email ?
        <button onClick={() => props.handleDeleteIceBreaker(icebreaker._id)}>
          Delete
        </button>
        : ''
        }
      </>
    );
  });


  return (
    <>
      <Link to="/addicebreaker">Add Ice Breaker</Link>
      <h1>All Icebreakers</h1>
      <div>{IceBreakerList}</div>
    </>
  );
}
 
export default Icebreakers;