import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <>
        <div className="footerDiv">
          Desafio hecho por Christian Zamora Hermida
        <Link className="footerLink" to="/contact">
          Contact
        </Link>
        <Link className="footerLink" to="/aboutus">
          About Us
        </Link>
        </div>
      </>
    </footer>
  );
};

export default Footer;
