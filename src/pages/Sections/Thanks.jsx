import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-feather";

function Thanks() {
  const navigate = useNavigate();

  const handleBackToSite = () => {
    navigate("/");
  };

  return (
    <div className="thanks__container">
      <div className="thanks__card">
        <h1>Thank you!</h1>
        <p>Your form submission has been received</p>
        <button className="contact__button" onClick={handleBackToSite}> 
          <span>Back to site</span> 
          <ArrowLeft />
        </button>
      </div>
    </div>
  );
}

export default Thanks;