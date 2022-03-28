import DatePlanList from "../DatePlanList/DatePlanList"

const ProfileDetail = (props) => {
  const filteredProfile = props.profiles.filter((profile,idx)=>{
    return(
      idx===props.proIdx
    )
  })
  

  const mappedFiltered = filteredProfile.map(profile=>{
    return (
      <div key={profile._id}>
        <p>{profile.name}</p>
        <p>{profile.address}</p>
        <p>{profile.relationshipStatus}</p>
        <p>{profile.contactInfo}</p>
        <p>{profile.aboutMe}</p>
      </div>
    );
  })
  return ( 
    <>
    <h1>{mappedFiltered }</h1>
    <DatePlanList owner={filteredProfile} datePlans={props.datePlans} profiles={props.profiles}  proIdx={props.proIdx} user={props.user}/>
    </>
   );
}
 
export default ProfileDetail;