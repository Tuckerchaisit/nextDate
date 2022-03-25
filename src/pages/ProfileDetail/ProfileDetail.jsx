const ProfileDetail = (props) => {
  const filteredProfile = props.profiles.filter((profile,idx)=>{
    return(
      idx===props.proIdx
    )
  })
  
  const mappedFiltered = filteredProfile.map(profile=>{
    return(
      <>
      <p>{profile.name}</p>
      <p>{profile.address}</p>
      <p>{profile.relationshipStatus}</p>
      <p>{profile.contactInfo}</p>
      <p>{profile.aboutMe}</p>
      </>
    )
  })
  return ( 
    <>
    <h1>{mappedFiltered }</h1>
    </>
   );
}
 
export default ProfileDetail;