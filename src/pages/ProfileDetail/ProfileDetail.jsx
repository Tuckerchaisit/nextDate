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
        <h1>{profile.name}</h1>
        <h2>{profile.address}</h2>
        <h3>{profile.relationshipStatus}</h3>
        <h3>{profile.contactInfo}</h3>
        <h3>{profile.aboutMe}</h3>
      </div>
    );
  })
  return ( 
    <>
    <h1>{mappedFiltered }</h1>
    <DatePlanList owner={filteredProfile} datePlans={props.datePlans} profiles={props.profiles}  proIdx={props.proIdx} user={props.user} handleDeleteDatePlan={props.handleDeleteDatePlan}/>
    </>
   );
}
 
export default ProfileDetail;