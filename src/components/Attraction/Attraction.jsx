import { useState, useRef, useEffect } from "react";
import * as attractionService from '../../services/attractionService'

const Attraction = () => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
		city: '',
  })
  const [attractionData, setAttractionData] = useState({})

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    attractionService.getAttraction(formData.city)
    .then(attractionData =>{
      setAttractionData(attractionData);
    })
		

  }

  const {city} = formData

  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])
  
  const attractionList = attractionData._embedded?.events
  console.log(attractionList);
  
  return ( 
    <>
    <h1>this is Attraction</h1>
    <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div>
					<label htmlFor="city-input" className="form-label">
						City :
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
						Get Attraction
					</button>
				</div>
			</form>
      {attractionData.length !== 0 ?
      attractionList.map(attraction =>
        <>
          <h1>{attraction.name}</h1>
          <h1>{attraction.dates.start}</h1>
        </>
      ): ""
      }
     
    </>
   );
}
 
export default Attraction;