import { Link } from 'react-router-dom'


const Profiles = (props) => {

  const allProfiles = props.profiles.map((profile, idx) => {
    console.log(profile)
    return (
      <>
      <Link to={`/profiles/${profile._id}`}  >
      <img src={profile.photo ? profile.photo : 'No Image'} alt={'Person'} />
        <p onClick={() => props.handleClick(idx)} >
          Name: {profile.name}<br/>
          Location: {profile.address}<br/>
          Status: {profile.relationshipStatus}</p>
      </Link>
      </>
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