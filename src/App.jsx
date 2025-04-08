import React, { useState } from "react";
import DynamicForm from "./Component/DynamicForm";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        padding: "20px",
        maxWidth: "600px",
        margin: "50px auto",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}>
      <DynamicForm />
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label>Enter Your Name</label>
          <input
            type='text'
            name='name'
            placeholder='Enter Your Name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Enter Your Email</label>
          <input
            type='email'
            name='email'
            placeholder='Enter Your Email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Enter Your Password</label>
          <input
            type='password'
            name='password'
            placeholder='Enter Your Password'
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type='submit'>Submit</button>
      </form> */}
    </div>
  );
};

export default App;
