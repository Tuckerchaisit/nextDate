import { useState, useRef, useEffect } from "react";
import "./addIceBreaker.scss";

function AddIceBreaker(props) {
  const formElement = useRef();
  const [validForm, setValidForm] = useState(false);
  const [formData, setFormData] = useState({
    funFact: "",
    question: "",
  });

  useEffect(() => {
    formElement.current.checkValidity()
      ? setValidForm(true)
      : setValidForm(false);
  }, [formData]);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(formData);
    props.handleAddIceBreaker(formData);
  };

  return (
    <div className="mainbody">
      <h1 className="title">Add IceBreaker</h1>
      <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
        <div className="IBF-ctn-lb">
          <label htmlFor="funFact-input" className="form-label IBF-label">
            Add a Fun Fact:
          </label>
          <input
            className="form-control IBF-input"
            type="text"
            id="funFact-input"
            name="funFact"
            value={formData.funFact}
            onChange={handleChange}
            required
          />
        </div>
        <div className="IBF-ctn-lb">
          <label htmlFor="question-input" className="form-label IBF-label">
            Add a Question:
          </label>
          <input
            className="form-control IBF-input"
            type="text"
            id="question-input"
            name="question"
            value={formData.question}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit" disabled={!validForm} className="add-IB-form">
            Add Ice Breaker
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddIceBreaker;
