import { useState, useRef, useEffect } from "react"
import Attraction from "../Attraction/Attraction"

function AddDatePlan(props) {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
		title: '',
    location: '',
    activity: '',
    food: '',
		detail: '',
  })

  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
		
  }

  const handleSubmit = evt => {
    evt.preventDefault()
		console.log(formData)
		const datePlanFormData = new FormData()
		datePlanFormData.append('photo', formData.photo)
		datePlanFormData.append('title', formData.title)
		datePlanFormData.append('location', formData.location)
		datePlanFormData.append('activity', formData.activity)
		datePlanFormData.append('food', formData.food)
		datePlanFormData.append('detail', formData.detail)
    props.handleAddDatePlan(datePlanFormData)
  }

	const handleChangePhoto = evt => {
		setFormData({...formData, photo: evt.target.files[0]})
	}

	return (
		<>
			<h1>Add Date Plan</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div>
					<label htmlFor="title-input" className="form-label">
						Title:
					</label>
					<input 
						className="form-control"
						type="text"
						id="title-input"
						name="title"
            value={formData.title}
            onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="location-input" className="form-label">
						Location:
					</label>
					<input 
						className="form-control"
						type="text"
						id="location-input"
						name="location"
            value={formData.location}
            onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="activity-input" className="form-label">
						Activity:
					</label>
					<input 
						type="text"
						className="form-control"
						id="activity-input"
						name="activity"
            value={formData.activity}
            onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="food-input" className="form-label">
						Food:
					</label>
					<input 
						type="text"
						className="form-control"
						id="food-input"
						name="food"
            value={formData.food}
            onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="detail-input" className="form-label">
						Detail:
					</label>
					<input 
						type="textarea"
						className="form-control"
						id="detail-input"
						name="detail"
            value={formData.detail}
            onChange={handleChange}
					/>
				</div>
				<div >
					<label htmlFor="photo">
						Upload Photo
					</label>
					<input
						type="file"
						className="form-control"
						id="photo"
						name="photo"
						onChange={handleChangePhoto}
					/>
				</div>
				<div>
					<button
						type="submit"
            disabled={!validForm}
					>
						Add Date Plan
					</button>
				</div>
			</form>

	
		</>
	)
}

export default AddDatePlan