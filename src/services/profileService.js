import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

function getProfileDetails(id){
  return fetch(`${BASE_URL}/${id}`,{
    headers: { Authorization: `Bearer ${tokenService.getToken()}` }
  })
  .then(res => res.json())
}

function update(editProfile, id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      // 'content-type': 'application/json'
    },
    body: editProfile
  })
	.then(res => res.json())
}


export { getAllProfiles, getProfileDetails, update }
