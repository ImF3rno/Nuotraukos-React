import { useState } from "react";

const AddPhoto = ({ onAdd }) => {
  const [formData, setFormData] = useState([]);

  function handleAddPhoto(e) {
    e.preventDefault();
    onAdd((oldData) => [...oldData, { ...formData }]);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <form className="m-2">
      <h3>Prideti nuotrauka</h3>
      <div className="m-2">
        <input
          type="text"
          className="form-control"
          placeholder="Pavadinimas"
          name="title"
          onChange={handleChange}
        />
      </div>
      <div className="m-2">
        <input
          type="email"
          className="form-control"
          placeholder="Link"
          name="url"
          onChange={handleChange}
        />
      </div>
      <div className="m-2">
        <button type="submit" className="btn btn-primary mb-3" onClick={handleAddPhoto}>
          Add
        </button>
      </div>
    </form>
  );
};

export default AddPhoto;