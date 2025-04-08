import { useState } from "react";

const formFields = {
  name: {
    type: "text",
    label: "Name",
    placeholder: "Enter Your Name",
  },
  email: {
    type: "email",
    label: "Email",
    placeholder: "Enter Your Email",
  },
  phone: {
    type: "tel",
    label: "Phone",
    placeholder: "Enter Your Phone Number",
  },
  password: {
    type: "password",
    label: "Password",
    placeholder: "Enter Your Password",
  },
  birthDate: {
    type: "date",
    label: "Birth Date",
    placeholder: "Enter Your Birth Date",
  },
};

const transformObject = (obj) => {
  return Object.keys(obj).reduce((acc, curr) => {
    acc[curr] = {
      ...obj[curr],
      value: "",
    };
    return acc;
  }, {});
};

const mapObjectToArray = (obj) => {
  return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));
};

console.log(mapObjectToArray(formFields));

const DynamicForm = () => {
  const [formState, setFormState] = useState(transformObject(formFields));
  const formData = mapObjectToArray(formState);

  console.log(formState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = Object.keys(formState).reduce((acc, curr) => {
      acc[curr] = formState[curr].value;
      return acc;
    }, {});
    console.log(values);
  };

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: {
        ...formState[event.target.name],
        value: event.target.value,
      },
    });
  };

  return (
    <div>
      <h2>Registration Form</h2>;
      <form onSubmit={handleSubmit}>
        {formData.map((item, index) => (
          <div key={index}>
            <label>{item.label}</label>
            <input
              type={item.type}
              name={item.name}
              placeholder={item.placeholder}
              value={item.value}
              onChange={handleChange}
            />
          </div>
        ))}
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;
