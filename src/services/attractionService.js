const BASE_URL = "https://app.ticketmaster.com/discovery/v2"

function getAttraction(city) {
  return fetch(`${BASE_URL}/${city}`)
  .then(res=> res.json())
}

export {
  getAttraction
}