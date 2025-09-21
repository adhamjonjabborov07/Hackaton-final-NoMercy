import React, { useState } from "react";
import "./ReportF.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

    let photoUrl = null;
    if (formData.photo) {
      photoUrl = URL.createObjectURL(formData.photo);
    }

    const newItem = {
      id: existing.length + 1,
      name: formData.item,
      date: formData.date,
      description: formData.description,
      location: formData.location,
      finder: formData.name,
      photo: photoUrl,
    };

    localStorage.setItem("foundItems", JSON.stringify([...existing, newItem]));

    toast.success("✅ Found item reported successfully!", {
      position: "top-right",
      autoClose: 3000,
    });

    setTimeout(() => {
      navigate("/Found");
    }, 1500);
  };

  return (
    <div className="report-container">
      <h1 className="report-title">
        <span>Report</span> <span>Found Item</span>
      </h1>

      <form className="report-form" onSubmit={handleSubmit}>
        <label>
          Your Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter your name"
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Item Name:
          <input
            type="text"
            name="item"
            value={formData.item}
            placeholder="Enter item name"
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            placeholder="Enter location"
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Date Found:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Item Description:
          <textarea
            name="description"
            placeholder="Write some details..."
            value={formData.description}
            onChange={handleChange}
          />
        </label>

        <label>
          Upload Photo:
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

      <ToastContainer />
    </div>
  );
}

export default ReportF;
