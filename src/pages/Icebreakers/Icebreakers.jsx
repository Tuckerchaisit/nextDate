import { Link } from "react-router-dom";

const Icebreakers = ({iceBreakers, profiles}) => {

  console.log(iceBreakers)
  return (
    <>
    <Link to="/addicebreaker">Add Ice Breaker</Link>
    <h1>All Icebreakers</h1> 
    <div>
      {iceBreakers.map(icebreaker => {
       return (<p>{icebreaker.funFact}</p>)
      })}
    </div>
    </>
  );
}
 
export default Icebreakers;