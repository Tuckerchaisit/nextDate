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
      'content-type': 'application/json'
    },
    body: JSON.stringify(newDatePlanData)
  })
  .then(res => res.json())
}

function update(editDatePlan) {
  return fetch(`${BASE_URL}/${editDatePlan._id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify(editDatePlan)
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



export {
  getAllDatePlans,
  create,
  update,
  deleteOne,
  getDatePlanDetails
}