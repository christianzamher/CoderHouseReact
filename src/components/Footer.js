import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      
        <div className="footerDiv">
         <h2>Baldir Armoury Shop</h2>
        <Link className="footerLink" to="/contact">
          Contact
        </Link>
        <Link className="footerLink" to="/aboutus">
          About Us
        </Link>
        </div>
      
    </footer>
  );
};

export default Footer;
