import React, { useState } from "react";
import "./ReportF.css";
import { useNavigate } from "react-router-dom";

function ReportF() {
  const [formData, setFormData] = useState({
    name: "",
    item: "",
    location: "",
    date: "",
    description: "",
    photo: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("foundItems")) || [];
    const newItem = {
      id: existing.length + 1,
      name: formData.item,
      date: formData.date,
      description: formData.description,
      location: formData.location,
      finder: formData.name,
    };
    localStorage.setItem("foundItems", JSON.stringify([...existing, newItem]));

    alert("Found item reported!");
    navigate("/Found"); // после отправки идём на Found.jsx
  };

  return (
    <div className="report-container">
      <h1 className="report-title">
        <span>Report</span> <span>Found Item</span>
      </h1>

      <form className="report-form" onSubmit={handleSubmit}>
        <label>
          Name :
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Item :
          <select
            name="item"
            value={formData.item}
            onChange={handleChange}
            required
          >
            <option value="">Select item</option>
            <option value="Wallet">Wallet</option>
            <option value="Phone">Phone</option>
            <option value="Keys">Keys</option>
            <option value="Bag">Bag</option>
          </select>
        </label>

        <label>
          Location :
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          >
            <option value="">Select location</option>
            <option value="Library">Library</option>
            <option value="Cafeteria">Cafeteria</option>
            <option value="Classroom">Classroom</option>
          </select>
        </label>

        <label>
          Date :
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Item Description :
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>

        <label>
          Upload Photo :
          <input type="file" name="photo" onChange={handleChange} />
        </label>

        <div className="buttons">
          <button type="submit">Submit</button>
          <button
            type="reset"
            onClick={() =>
              setFormData({
                name: "",
                item: "",
                location: "",
                date: "",
                description: "",
                photo: null,
              })
            }
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReportF;
