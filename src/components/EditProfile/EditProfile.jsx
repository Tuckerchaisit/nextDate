import { useState, useRef, useEffect } from "react"
import { useLocation } from 'react-router-dom'

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
    handleEditProfile(formData)
	}

  return (
    <>
    <h1>Edit profile</h1>
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      ref={formElement}
    >
      <div >
        <label htmlFor="name" >
          Name
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
      <div >
        <label htmlFor="address" className="address">
          Location
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
      <div >
        <label htmlFor="relationshipStatus" className="relationshipStatus">
          Relationship Status:
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
      <div >
        <label htmlFor="aboutMe" className="address">
          About Me:
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
      <div >
        <label htmlFor="contactInfo" className="address">
          Contact Info:
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
      <div>
        <button disabled={!validForm}>
          Submit
        </button>
      </div>
    </form>
    </>
  );
}
 
export default EditProfile;