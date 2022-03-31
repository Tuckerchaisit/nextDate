import { useState, useRef, useEffect } from "react"
import { useLocation } from 'react-router-dom'


const EditDatePlan = ({datePlanDetail, handleEditDatePlan}) => {
  const location = useLocation()
  const [formData, setFormData] = useState(location.state.datePlanDetail)
	const [validForm, setValidForm] = useState(true)
  const formElement = useRef()


  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}


  useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

  const handleSubmit = evt => {
		evt.preventDefault()
		console.log(formData)
		const datePlanFormData = new FormData()
    datePlanFormData.append('photo', formData.photo)
    datePlanFormData.append('title', formData.title)
    datePlanFormData.append('location', formData.location)
    datePlanFormData.append('activity', formData.activity)
    datePlanFormData.append('detail', formData.detail)
    datePlanFormData.append('food', formData.food)
		datePlanFormData.append('_id', formData._id)
		console.log(datePlanFormData)
    handleEditDatePlan(datePlanFormData)
	}

	const handleChangePhoto = evt => {
		setFormData({...formData, photo: evt.target.files[0]})
	}

  return (
    <>
      	<h1>Edit Date Plan</h1>
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
            value={formData?.title}
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
            value={formData?.location}
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
            value={formData?.activity}
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
            value={formData?.food}
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
            value={formData?.detail}
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
						Edit Date Plan
					</button>
				</div>
			</form>
    </>
  );
}
 
export default EditDatePlan;