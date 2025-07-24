import { useState } from "react";
import { MapPin, Send } from "react-feather";
import Footer from "../Components/Footer";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  console.log(email, message);
  return (
    <section id="contact">
    <h2 className="section__title">CONTACT</h2>
    <div className="contact__card__containers">
      <div className="contact__card">
        <div className="contact__card__title">
          <h3><span>Interested?</span> Lets talk!</h3>
          <div>
            <p className="location"><span>Auckland, </span>NZ</p>
            <MapPin />
          </div>
        </div>
        <form 
          name="contact" 
          action="/thanks"
          method="POST" 
          data-netlify="true" 
          data-netlify-honeypot="bot-field"
        >
          <input 
            type="hidden" 
            name="form-name" 
            value="contact" 
          />
          <input 
            type="hidden" 
            name="bot-field"
          />
          <input 
            type="email" 
            id="email" 
            placeholder="Email" required
            name="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <textarea 
            type="text" 
            id="message" 
            placeholder="Your message" required
            name="message"
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