import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid!");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(!errorMessage){
        console.log("Submit Form",formState)
    }
  }

  return (
    <div className="h-screen space-y-4 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold">Contact Me</h1>
      <form id="contact-form" className="flex flex-col  w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col m-2 space-y-1">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            className="h-10 p-2"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col m-2 space-y-1">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            className="h-10 p-2"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col m-2 space-y-1">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            className="h-28 p-2"
            onChange={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="m-2">{errorMessage}</p>
          </div>
        )}
        <button className=" m-2 p-2 text-2xl font-extrabold" type="submit">Submit</button>
      </form>
    </div>
  );
}
