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

export {
  getAllDatePlans,
  create
}