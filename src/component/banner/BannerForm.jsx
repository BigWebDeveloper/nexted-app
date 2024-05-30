import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import axios from "axios";

const BannerForm = () => {

  // save html form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  // handle form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Okay");

    // send html form data to the server
    const ConnectServer = async () => {
      try {
        const ServerPATH = "http//localhost/api/students";
        const res = await axios.post(ServerPATH, formData);
        alert(JSON.stringify(res.data, null, 2));
      } catch (error) {
        console.log(error.message);
      }
    };
    ConnectServer();
  };

  return (
    <form id="get-in-touch" name="form1" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        className="name"
        name="name"
        onChange={handleChange}
        required
        autoComplete="true"
      />
      <input
        type="email"
        placeholder="Your email address"
        className="email"
        name="email"
        onChange={handleChange}
        required
        autoComplete="true"
      />
      <input
        type="tel"
        placeholder="Your phone number"
        className="name"
        name="phone"
        onChange={handleChange}
        required
        autoComplete="true"
      />
      <div className="select-container">
        <label aria-label="choose-an-option">
          <select name="course" required onChange={handleChange}>
            <option defaultValue hidden>
              Select courses
            </option>
            <option>Web Development</option>
            <option>Graphic Design</option>
            <option>Automobile Engineering</option>
            <option>computer Training</option>
          </select>
        </label>
      </div>
      <button type="submit" className="btn bg-variant">
        Get in Touch <GoArrowRight size="20" />
      </button>
    </form>
  );
};

export default BannerForm;
