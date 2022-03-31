import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import * as datePlanService from '../../services/datePlan.js'
import { Link } from "react-router-dom";
import AddChat from '../../components/AddChat/AddChat.jsx';




const ShowDateplan = ({datePlans, datePlan, handleDeleteDatePlan, ownerId, profiles, user, proIdx, findProfileIndex}) => {
  const [datePlanDetail, setDatePlanDetail] = useState({})
  const { id } = useParams()
  // const [chats, setChats] = useState([])
  const navigate = useNavigate()

  
  useEffect(()=> {
    datePlanService.getDatePlanDetails(id)
    .then(datePlanDetails => setDatePlanDetail(datePlanDetails))
  }, [])

  console.log(id)

  // useEffect(() => {
  //   console.log(id)
  //    datePlanService.getAllChats(id)
  //   .then(chats => setChats(datePlanDetail.chats))
  // }, [])

  
  // useEffect(() => {
  //   console.log(chats)
  // },[chats])
  
  const handleAddChat = async newChatData => {
    console.log(newChatData)
    console.log(id)
    const newChat = await datePlanService.createChat(newChatData, id)
    setDatePlanDetail(newChat)
    // navigate(`/profiles/${profiles[proIdx]._id}`)
  }
  

  console.log(datePlanDetail.chats)
  
  return ( 
    datePlanDetail ? 
    <>
      <div>
        <h1>{datePlanDetail.title}</h1>
        <img src={datePlanDetail.photo ? datePlanDetail.photo : 'No Image'} alt={'Date Plan'} />
        <h3>Location: {datePlanDetail.location}</h3>
        <p>Date Details: {datePlanDetail.detail}</p>
        <p>Food: {datePlanDetail.food}</p>
        <p>Activities: {datePlanDetail.activity}</p>
        {datePlanDetail.owner?.email === user.email ? 
          <Link to="/edit" state={{ datePlanDetail }}>
            Edit Date Plan
          </Link> 
          : ''
      }
      </div>
      <div>
        {datePlanDetail.chats?.map(chat => {
          return <p>{chat.comments}</p>
        })}
      </div>
      <AddChat handleAddChat={handleAddChat}/>
       
    </>
    : <><p>Loading</p></>
  );
}
 
export default ShowDateplan;