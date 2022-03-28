import { Link } from "react-router-dom";

const Icebreakers = (props) => {

  const IceBreakerList = props.iceBreakers.map((icebreaker) => {

    // console.log(props.iceBreakers)
    // console.log(icebreaker._id)
    return (
      <>
        <p>{icebreaker.funFact}</p>
        <p>{icebreaker.question}</p>
        <button
          onClick={() => props.handleDeleteIceBreaker(icebreaker._id)}
        >
          Delete
        </button>
      </>
    );
  });

  // const ownerEmail = props.iceBreakers.owner.map(profile => profile.email)

  return (
    <>
      <Link to="/addicebreaker">Add Ice Breaker</Link>
      <h1>All Icebreakers</h1>
      <div>{IceBreakerList}</div>
    </>
  );
}
 
export default Icebreakers;