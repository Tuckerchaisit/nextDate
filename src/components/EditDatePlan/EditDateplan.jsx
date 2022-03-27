import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'


const EditDatePlan = ({datePlan, handleEditDatePlan}) => {
  const formElement = useRef()
  const location = useLocation()
  console.log(location)
  console.log(location.state.datePlan)
  console.log(handleEditDatePlan)

  const [formData, setFormData] = useState(location.state.datePlan)


  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

  const [validForm, setValidForm] = useState(true)

  useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

  const handleSubmit = evt => {
		evt.preventDefault()
    handleEditDatePlan(formData)
	}

  return (
    <>
      	<h1>Edit Date Plan</h1>
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
  );
}
 
export default EditDatePlan;