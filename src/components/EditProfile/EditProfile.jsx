import { useState, useRef, useEffect } from "react"
import { useLocation } from 'react-router-dom'

const EditProfile = (props) => {
  const location = useLocation()



  return (
    <>
    <h1>Edit profile</h1>
    {/* <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="name" className={styles.label}>
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
      <div className={styles.inputContainer}>
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
      <div className={styles.inputContainer}>
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
      <div className={styles.inputContainer}>
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
      <div className={styles.inputContainer}>
        <label htmlFor="contactInfo" className="address">
          Location
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
      <div className={styles.inputContainer}>
        <button disabled={isFormInvalid()} className={styles.button}>
          Submit
        </button>
      </div>
    </form> */}
    </>
  );
}
 
export default EditProfile;