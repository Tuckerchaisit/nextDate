import { Link } from "react-router-dom";

const Icebreakers = (props) => {

  const IceBreakerList = props.iceBreakers.map((icebreaker) => {
    console.log(icebreaker)
    
    const profId = icebreaker.owner._id
    return (
      <>
      <div>
        <Link to={`/profiles/${profId}`}>
        <img src={icebreaker.owner.photo ? icebreaker.owner.photo : 'No Image'} alt={'Person'} />
        <h2 key={profId}>{icebreaker.owner.name}:</h2>
        </Link>
        <p >Fun fact: {icebreaker.funFact}</p>
        <p>Question: {icebreaker.question}</p>
      </div>
      <div>
        {icebreaker.owner.email === props.user.email ?
        <button onClick={() => props.handleDeleteIceBreaker(icebreaker._id)}>
          Delete
        </button>
        : ''
        }
      </div>
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