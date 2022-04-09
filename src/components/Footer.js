import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      
        <div className="footerDiv">
         <h2>A comerla Fast Food</h2>
        <Link className="footerLink" to="/contact">
          Contacto
        </Link>
        <Link className="footerLink" to="/aboutus">
          Nosotros
        </Link>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff5500" fill-opacity="0.83" d="M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,42.7C672,32,768,32,864,48C960,64,1056,96,1152,96C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
        </div>
      
    </footer>
  );
};

export default Footer;
