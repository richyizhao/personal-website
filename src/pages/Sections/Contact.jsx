import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Send } from "react-feather";
import Footer from "../Components/Footer";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate("/thanks"))
      .catch((error) => alert(error));
  };

  return (
    <section id="contact">
      <h2 className="section__title">CONTACT</h2>
      <div className="contact__card__containers">
        <div className="contact__card">
          <div className="contact__card__title">
            <h3><span>Interested?</span> Let’s talk!</h3>
            <div>
              <p className="location"><span>Auckland, </span>NZ</p>
              <MapPin />
            </div>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={submitHandler}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button className="contact__button" type="submit">
              <span>Send</span>
              <Send />
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default Contact;
