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
      <p>{profile.email}</p>
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