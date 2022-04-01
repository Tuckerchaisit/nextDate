import { useState, useRef, useEffect } from "react"
import { useLocation } from 'react-router-dom'
import './editProfile.scss'

const EditProfile = ({profileDetail, handleEditProfile}) => {
  const location = useLocation()

  const [formData, setFormData] = useState(location.state.profileDetail)
  const formElement = useRef()
  
  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

  const [validForm, setValidForm] = useState(true)

  useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

  const handleSubmit = evt => {
		evt.preventDefault()
    console.log(formData)
    const profileFormData = new FormData()
    profileFormData.append('photo', formData.photo)
    profileFormData.append('name', formData.name)
    profileFormData.append('address', formData.address)
    profileFormData.append('aboutMe', formData.aboutMe)
    profileFormData.append('relationshipStatus', formData.relationshipStatus)
    profileFormData.append('contactInfo', formData.contactInfo)
    handleEditProfile(profileFormData)
	}

  const handleChangePhoto = evt => {
		setFormData({...formData, photo: evt.target.files[0]})
	}

  return (
    <div className='editPF-body'>
    <main className="signup-container">
    <h1 className='signup-title'>Edit profile</h1>
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      ref={formElement}
      className="editPF-container"
    >
      <div className="input-SUFContainer">
        <label htmlFor="name" className="USF-label">
          Name :
        </label>
        <input
          type="text"
          autoComplete="off"
          id="name"
          value={formData.name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className="input-SUFContainer">
        <label htmlFor="address" className="USF-label">
          Location :
        </label>
        <input
          type="text"
          autoComplete="off"
          id="address"
          value={formData.address}
          name="address"
          onChange={handleChange}
        />
      </div>
      <div className="input-SUFContainer">
        <label htmlFor="relationshipStatus" className="USF-label">
          Relationship Status :
        </label>
        <select
          name="relationshipStatus"
          id="relationshipStatus"
          onChange={handleChange}
        >
          <option value="Single">Single</option>
          <option value="Complicated">Complicated</option>
          <option value="Married">Married</option>
          <option value="In A Relationship">In A Relationship</option>
        </select>
      </div>
      <div className="input-SUFContainer">
        <label htmlFor="aboutMe" className="USF-label">
          About Me :
        </label>
        <input
          type="text"
          autoComplete="off"
          id="aboutMe"
          value={formData.aboutMe}
          name="aboutMe"
          onChange={handleChange}
        />
      </div>
      <div className="input-SUFContainer">
        <label htmlFor="contactInfo" className="USF-label">
          Contact Info :
        </label>
        <input
          type="text"
          autoComplete="off"
          id="contactInfo"
          value={formData.contactInfo}
          name="contactInfo"
          onChange={handleChange}
        />
      </div>
      <div className="input-SUFContainer">
					<label htmlFor="photo" className="USF-label">
						Upload Photo :
					</label>
					<input
						type="file"
						className="form-control"
						id="photo"
						name="photo"
						onChange={handleChangePhoto}
					/>
				</div>
      <div className="input-SUFContainer">
        <button disabled={!validForm} className="USF-button editPF-btn">
          Submit
        </button>
      </div>
    </form>
    </main>
    </div>
  );
}
 
export default EditProfile;