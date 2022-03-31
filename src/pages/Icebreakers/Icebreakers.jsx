import { Link } from "react-router-dom";
import "./icebreaker.scss"

const Icebreakers = (props) => {

  const IceBreakerList = props.iceBreakers.map((icebreaker) => {
    console.log(icebreaker)
    
    const profId = icebreaker.owner._id
    return (
      <>
      <div className="container">
        <Link to={`/profiles/${profId}`} >
        <img src={icebreaker.owner.photo ? icebreaker.owner.photo : 'No Image'} alt={'Person'} />
        <h2 key={profId} className="name">{icebreaker.owner.name}</h2>
        </Link>
        <div className="info">
        <p>Fun fact: {icebreaker.funFact}</p>
        <p>Question: {icebreaker.question}</p>
        </div>
        {icebreaker.owner.email === props.user.email ?
        <button onClick={() => props.handleDeleteIceBreaker(icebreaker._id)} className="dlt-btn">
          X
        </button>
        : ''
        }
      <div>
      </div>
      </div>
      </>
    );
  });


  return (
    <div className="mainbody">
      <h1 className="title">All Icebreakers</h1>
      <Link to="/addicebreaker" >
        <button className="add-IB">Add Ice Breaker</button>
      </Link>
      <div>{IceBreakerList}</div>
    </div>
  );
}
 
export default Icebreakers;