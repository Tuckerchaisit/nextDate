import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import * as datePlanService from '../../services/datePlan.js'
import { Link } from "react-router-dom";
import AddChat from '../../components/AddChat/AddChat.jsx';
import "./showDateplan.scss"




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
      <div className='showDP-body'>
        <div>
        <h1 className='sDP-title'>{datePlanDetail.title}</h1>
        <img src={datePlanDetail.photo ? datePlanDetail.photo : 'No Image'} alt={'Date Plan'} />
        <div className='sDP-info'>
        <h3 className='sdP-info-detail'>Location: {datePlanDetail.location}</h3>
        <p className='sdP-info-detail'>Date Details: {datePlanDetail.detail}</p>
        <p className='sdP-info-detail'>Food: {datePlanDetail.food}</p>
        <p className='sdP-info-detail'>Activities: {datePlanDetail.activity}</p>
        {datePlanDetail.owner?.email === user.email ? 
          <Link to="/edit" state={{ datePlanDetail }}>
            Edit Date Plan
          </Link> 
          : ''
        }
        </div>
      </div>
      <h1 className='chat-title'>Let's Chat!</h1>
      <div>
        {datePlanDetail.chats?.map(chat => {
          return (
          <div className='chat-box-ctn'>
          <h2 className='chat-box'>{chat.comments}</h2>
          </div>
          )
        })}
      </div>
        <AddChat handleAddChat={handleAddChat}/>
      </div>
    </>
    : <><p>Loading</p></>
  );
}
 
export default ShowDateplan;