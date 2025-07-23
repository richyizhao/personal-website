import Footer from "../Components/Footer";

import { MapPin, Send } from "react-feather";

function Contact() {
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
          method="POST" 
          data-netlify="true" 
          data-netlify-honeypot="bot-field"
          action="/thanks"
          onSubmit="submit"
        >
          <input 
            type="hidden" 
            name="bot-field"
          />
          <input 
            type="email" 
            id="email" 
            placeholder="Email" required
            name="email" 
          />
          <textarea 
            type="text" 
            id="message" 
            placeholder="Your message" required
            name="message" 
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