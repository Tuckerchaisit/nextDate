import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/dateplans`


function getAllDatePlans() {
  return fetch(BASE_URL, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  .then(res => res.json())
}

function create(newDatePlanData) {
  console.log(newDatePlanData)
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      // 'content-type': 'application/json'
    },
    body: newDatePlanData
  })
  .then(res => res.json())
}

function update(editDatePlan) {
  console.log(editDatePlan.get('_id'))
  return fetch(`${BASE_URL}/${editDatePlan.get('_id')}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      // 'content-type': 'application/json'
    },
    body: editDatePlan
  })
	.then(res => res.json())
}

function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
    },
  })
  .then(res => res.json())
}

function getDatePlanDetails(id){
  return fetch(`${BASE_URL}/${id}`)
  .then(res => res.json())
}

function getAllChats(id) {
  console.log('Get All Chats: ', id)
  return fetch(`${BASE_URL}/${id}` , {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  .then(res => res.json())
}

function createChat(newChatData, id) {
  console.log(id)
  return fetch(`${BASE_URL}/${id}/chat`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify(newChatData)
  })
  .then(res => res.json())
}

function deleteChat(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
    },
  })
  .then(res => res.json())
}


export {
  getAllDatePlans,
  create,
  update,
  deleteOne,
  getDatePlanDetails,
  getAllChats,
  createChat,
  deleteChat
}