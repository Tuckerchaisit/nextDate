import { useState, useRef, useEffect } from "react";
import * as attractionService from '../../services/attractionService'
import { ExternalLink } from "react-external-link"

const Attraction = () => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
		city: '',
  })
  const [attractions, setAttractions] = useState([])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    attractionService.getAttraction(formData.city)
    .then(attractionData =>{
      setAttractions(attractionData._embedded.events);
    })
		

  }

  const {city} = formData

  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])
  
  // const attractionList = attractionData._embedded?.events
  console.log(attractions);
  
  return ( 
    <>
    <h1>Search For Date Ideas</h1>
    <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div>
					<label htmlFor="city-input" className="form-label">
						City: 
					</label>
					<input 
						className="form-control"
						type="text"
						id="city-input"
						name="city"
            value={formData.city}
            onChange={handleChange}
						required
					/>
				</div>
        <div>
					<button
						type="submit"
            disabled={!validForm}
					>
						Get Ideas
					</button>
				</div>
			</form>


      {attractions?.map(attraction =>
       <div key={attraction.id} className="attractions">
         <h1>{attraction.name}</h1>
         <img src={attraction.images[9].url} alt="attraction-images" /><br/>
         <h2>Date: {attraction.dates.start.localDate}</h2>
         <h2>Time: {attraction.dates.start.localTime}</h2>
         <ExternalLink href={attraction.url}>Get Tickets</ExternalLink>
       </div>
      )}
     
    </>
   );
}
 
export default Attraction;