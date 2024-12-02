import React, { useState } from 'react';

function Contact() {
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    setResponse(`Thank you, ${name}! We will contact you at ${email}.`);
    e.target.reset();
  };

  return (
    <main>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>
      {response && <p>{response}</p>}
    </main>
  );
}

export default Contact;
