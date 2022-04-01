import { useState, useRef, useEffect } from "react"
import { useLocation } from 'react-router-dom'
import './editDateplan.scss'

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
    <div className='editPF-body'>
    <main className="signup-container">
      <h1 className='signup-title'>Edit Date Plan</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit} className="editPF-container">
			<div className="input-SUFContainer">
					<label htmlFor="title-input" className="USF-label">
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
				<div className="input-SUFContainer">
					<label htmlFor="location-input" className="USF-label">
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
				<div className="input-SUFContainer">
					<label htmlFor="activity-input" className="USF-label">
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
				<div className="input-SUFContainer">
					<label htmlFor="food-input" className="USF-label">
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
				<div className="input-SUFContainer">
					<label htmlFor="detail-input" className="USF-label">
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
				<div className="input-SUFContainer">
					<label htmlFor="photo" className="USF-label" >
						Upload Photo :
					</label>
					<input
						type="file"
						className="form-control upload-photo"
						id="photo"
						name="photo"
						onChange={handleChangePhoto}
					/>
				</div>
				<div className="input-SUFContainer">
					<button
						type="submit"
            disabled={!validForm}
						className="USF-button editPF-btn"
					>
						Edit Date Plan
					</button>
				</div>
			</form>
			</main>
    </div>
  );
}
 
export default EditDatePlan;