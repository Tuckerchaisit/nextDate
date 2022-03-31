import { useState, useRef, useEffect } from "react";
import * as attractionService from '../../services/attractionService'
import { ExternalLink } from "react-external-link"
import "./attraction.scss"

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
    <div className="mainbody">
    <h1 className="title">Search For Date Ideas</h1>
    <form autoComplete="off" ref={formElement} onSubmit={handleSubmit} >
				<div className="IBF-ctn-lb">
					<label htmlFor="city-input" className="form-label IBF-label">
						City: 
					</label>
					<input 
						className="form-control IBF-input"
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
            className="add-IB-form date-Idea"
					>
						Get Ideas
					</button>
				</div>
			</form>


      <div className="attraction-ctn">
      {attractions?.map(attraction =>
       <div key={attraction.id} className="attractions">
         <h1 className="idea-name">{attraction.name}</h1>
         <img src={attraction.images[9].url} alt="attraction-images" /><br/>
         <h2 className="idea-info">Date: {attraction.dates.start.localDate}</h2>
         <h2 className="idea-info">Time: {attraction.dates.start.localTime}</h2>
         <ExternalLink href={attraction.url}>
           <button className="tkt-btn">Get Tickets</button>
         </ExternalLink>
       </div>
      )}
      </div>
     
    </div>
   );
}
 
export default Attraction;