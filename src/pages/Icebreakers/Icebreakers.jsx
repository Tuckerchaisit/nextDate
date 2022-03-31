import { Link } from "react-router-dom";
import React from 'react'

const Icebreakers = (props) => {

  const IceBreakerList = props.iceBreakers.map((icebreaker) => {
    console.log(icebreaker)
    
    const profId = icebreaker.owner._id
    return (
      <React.Fragment key={icebreaker._id}>
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
      </React.Fragment>
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