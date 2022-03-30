const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/attractions`

function getAttraction(city) {
  return fetch(`${BASE_URL}/${city}`)
  .then(res=> res.json())
}

export {
  getAttraction
}