import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/icebreakers`


function getAllIceBreakers() {
  return fetch(BASE_URL, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
    .then(res => res.json())
}

function create(newIceBreaker) {
  console.log(newIceBreaker)
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify(newIceBreaker)
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

export {
  create,
  getAllIceBreakers,
  deleteOne
}