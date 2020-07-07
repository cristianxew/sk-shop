import React, { useState } from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./contact.styles.scss";

const Contact = () => {
  const [userMessage, setUserMessage] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = userMessage;
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserMessage({ ...userMessage, [name]: value });
  };
  return (
    <div className="contact-form-wrap">
      <h1 className="contact-title">Get in Touch</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <FormInput
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          label="Name"
          required
        />
        <FormInput
          onChange={handleChange}
          value={email}
          type="email"
          name="email"
          label="Email"
          required
        />
        <FormInput
          onChange={handleChange}
          value={subject}
          type="text"
          name="subject"
          label="Subject"
          required
        />
        <textarea
          className="user-msg"
          name="message"
          label="Message"
          value={message}
          onChange={handleChange}
          rows="4"
          cols="50"
          required
          placeholder="Your Message"
        ></textarea>
        <CustomButton className="contact-btn" type="submit">
          Send
        </CustomButton>
      </form>
    </div>
  );
};

export default Contact;
