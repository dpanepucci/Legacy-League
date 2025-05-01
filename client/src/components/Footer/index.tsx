import { useLocation, useNavigate } from 'react-router-dom';
import './index.css'; // Assuming you have a CSS file for styling

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    if(window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  }

// Back button and footer on Sign up and Login
return (
  <footer className="transparent-footer">
    {location.pathname !== '/' && (
      <button className="btn btn-dark mb-3" onClick={handleGoBack}>
        &larr; Go Back
      </button>
    )}
    <p>© 2025 Legacy League. All rights reserved.</p>
    <p>The Ultimate NBA Match Ups</p>
  </footer>
);


};

export default Footer;