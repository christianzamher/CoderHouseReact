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
        </div>
        <div className="footerIzq">
        <p>Seguinos:</p>
        </div>
        <div className="footerDer">
        <p className="parrafoFooter">que </p>
        <p className="parrafoFooter">que </p>
        <p className="parrafoFooter">que </p>
        </div>
        
     
      
    </footer>
  );
};

export default Footer;
