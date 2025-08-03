import React, { useState } from "react";

export default function NomralForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    terms: "",
    country: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "block" }}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="radio"
        name="gender"
        value="male"
        checked={formData.gender === "male"}
        onChange={handleChange}
      />
      <input
        type="radio"
        name="gender"
        value="female"
        checked={formData.gender === "female"}
        onChange={handleChange}
      />

      <select name="country" value={formData.country} onChange={handleChange}>
        <option value="">Select Country</option>
        <option value="india">India</option>
        <option value="usa">USA</option>
      </select>

      <input
        type="checkbox"
        name="terms"
        checked={formData.terms}
        onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
      />
      <button type="submit">Submit</button>
      
    </form>
  );
}
