import { Link } from 'react-router-dom'


const Profiles = (props) => {

  const allProfiles = props.profiles.map((profile, idx) => {
    return (
      <Link to="/profiledetail">
        <p onClick={() => props.handleClick(idx)}>{profile.name}</p>
      </Link>
    )
  })

  return (
    <>
      {props.profiles.length ?
        <>
          <h1>Hello. This is a list of all the profiles.</h1>
          <div>{allProfiles}</div>
        </>
        :
        <p>No profiles yet</p>
      }
    </>
  )
}

export default Profiles