import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import * as profileService from '../../services/profileService'
import DatePlanList from '../DatePlanList/DatePlanList'
import { Link } from 'react-router-dom'
import "./showProfile.scss"

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
    <div className='show-profile-body'>
      <div className='profile-box'>
        <img src={profileDetail.photo ? profileDetail.photo : 'No Image'} alt={'Person'} className="profPic"/>
        <div className="profile-info-box">
        <h1 className='profile-name'>{profileDetail.name}</h1>
        <h2 className='profile-info'>Location: {profileDetail.address}</h2>
        <h3 className='profile-info'>Status: {profileDetail.relationshipStatus}</h3>
        <h3 className='profile-info'>Contact: {profileDetail.contactInfo}</h3>
        <h3 className='profile-info'>About Me: {profileDetail.aboutMe}</h3>
        {profileDetail.email === props.user.email ?
        <Link to='/editprofile' state={{profileDetail}}>Edit Profile</Link>
        :
        ''
        }
        </div>
      </div>
        
        <DatePlanList owner={filteredProfile} datePlans={props.datePlans} profiles={props.profiles}  proIdx={props.proIdx} user={props.user} handleDeleteDatePlan={props.handleDeleteDatePlan} />
    </div>

   );
}
 
export default ShowProfile;