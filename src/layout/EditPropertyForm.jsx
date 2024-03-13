import React, { useState, useEffect } from "react";

const EditPropertyForm = ({ selectedProperty, onSave, onCancel }) => {
  const [editedProperty, setEditedProperty] = useState({
    id: null,
    name: "",
    location: "",
    price: "",
    available: "",
    dimensions: "",
    description: "",
    image: ""
  });

  useEffect(() => {
    // Update the state when selectedProperty changes
    setEditedProperty({ ...selectedProperty });
  }, [selectedProperty]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProperty({ ...editedProperty, [name]: value });
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={editedProperty.name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="location" className="form-label">
          Location
        </label>
        <input
          type="text"
          className="form-control"
          id="location"
          name="location"
          value={editedProperty.location}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          type="text"
          className="form-control"
          id="price"
          name="price"
          value={editedProperty.price}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="available" className="form-label">
          Available
        </label>
        <input
          type="text"
          className="form-control"
          id="available"
          name="available"
          value={editedProperty.available}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="dimensions" className="form-label">
          Dimensions
        </label>
        <input
          type="text"
          className="form-control"
          id="dimensions"
          name="dimensions"
          value={editedProperty.dimensions}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          value={editedProperty.description}
          onChange={handleChange}
        />
      </div>

      <button type="button" className="btn btn-secondary" onClick={onCancel}>
        Cancel
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => onSave(editedProperty)}
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditPropertyForm;
