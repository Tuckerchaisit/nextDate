import { useState, useRef, useEffect } from "react"

function AddDatePlan(props) {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    location: '',
    activity: '',
    food: ''
  })

  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
		// console.log(formData)
  }

  const handleSubmit = evt => {
    evt.preventDefault()
		console.log(formData)
		// const datePlanFormData = new FormData()
		// datePlanFormData.append('location', formData.location)
    // datePlanFormData.append('activity', formData.activity)
    // datePlanFormData.append('food', formData.food)
    props.handleAddDatePlan(formData)
		// console.log(datePlanFormData)
  }

	// console.log(props)

	return (
		<>
			<h1>Add Date Plan</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
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