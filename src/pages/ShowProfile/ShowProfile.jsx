import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import * as profileService from '../../services/profileService'
import DatePlanList from '../DatePlanList/DatePlanList'
import { Link } from 'react-router-dom'

const ShowProfile = (props) => {
  
  const [profileDetail, setProfileDetail] = useState({})
  const { id } = useParams()
  
  const filteredProfile = props.profiles.filter((profile,idx)=>{
    return(
      idx===props.proIdx

      )
    })
    
  
  useEffect(()=> {
    profileService.getProfileDetails(id)
    .then(profileDetail => setProfileDetail(profileDetail))
  },[])

  useEffect( () => {
    props.findProfileIndex(id)
  }, [props.profiles]
  )

  return ( 
    <div>
        <h1>{profileDetail.name}</h1>
        <h2>{profileDetail.address}</h2>
        <h3>{profileDetail.relationshipStatus}</h3>
        <h3>{profileDetail.contactInfo}</h3>
        <h3>{profileDetail.aboutMe}</h3>
        <img src={profileDetail.photo ? profileDetail.photo : 'No Image'} alt={'Person'} />

        {profileDetail.email === props.user.email ?
        <Link to='/editprofile' state={{profileDetail}}>Edit Profile</Link>
        :
        ''
        }
        
        <DatePlanList owner={filteredProfile} datePlans={props.datePlans} profiles={props.profiles}  proIdx={props.proIdx} user={props.user} handleDeleteDatePlan={props.handleDeleteDatePlan} />
    </div>

   );
}
 
export default ShowProfile;