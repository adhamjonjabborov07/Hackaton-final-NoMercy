import React, { useState } from "react";
import "./ReportL.css";
import { useNavigate } from "react-router-dom";

function ReportL() {
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

    const existing = JSON.parse(localStorage.getItem("lostItems")) || [];
    const newItem = {
      id: existing.length + 1,
      name: formData.item,
      date: formData.date,
      description: formData.description,
      location: formData.location,
      owner: formData.name,
    };
    localStorage.setItem("lostItems", JSON.stringify([...existing, newItem]));

    alert("Lost item reported!");
    navigate("/Lost");
  };

  return (
    <div className="report-container">
      <h1 className="report-title">
        <span>Report</span> <span>Lost Item</span>
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
          <input
            type="text"
            name="item"
            value={formData.item}
            onChange={handleChange}
            placeholder="Enter item name"
            required
          />
        </label>

        <label>
          Location :
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter location"
            required
          />
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

export default ReportL;
