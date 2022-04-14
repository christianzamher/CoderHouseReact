import { Link } from "react-router-dom";

const Footer = () => {
  return (
  
    <footer className="footer">
  <div className="footer__addr">
    <h1 className="footer__logo">FooderScript</h1>
        
    <h2>Contacto</h2>
    
    <address>
      123 Fake Street . 1870
      <br></br>
          
      <Link className="footer__btn" to="mailto:fooderscript@gmail.com">Escribinos!</Link>
    </address>
  </div>
  
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">Menu</h2>

      <ul className="nav__ul">
        <li>
          <Link to="/category/hamburguesa">Hamburguesas</Link>
        </li>

        <li>
          <Link to="/category/milanesas">Milanesas</Link>
        </li>
            
        <li>
          <Link to="/category/pizza">Pizzas</Link>
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title"></h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <Link to="/category/postre">Postres</Link>
        </li>
        
        <li>
          <Link  to="/category/desayuno">Desauyos y Meriendas</Link>
        </li>
        
        <li>
          <Link to="/category/bebida">Bebidas</Link>
        </li>
        
        <li>
          <Link to="/Contact">Contacto</Link>
        </li>
        
        <li>
          <Link to="/aboutus">Nosotros</Link>
        </li>
        
        {/* <li>
          <a to="">IoT</a>
        </li> */}
      </ul>
    </li>
    
    <li className="nav__item">
      <h2 className="nav__title">Legal</h2>
      
      <ul className="nav__ul">
        <li>
          <Link to="">Politicias de Privacidad</Link>
        </li>
        
        <li>
          <Link to="">Terminos de Uso</Link>
        </li>
        
        <li>
          <Link to="">Mapa del Sitio</Link>
        </li>
      </ul>
    </li>
  </ul>
  
  <div className="legal">
    <p>&copy; 2022 FooderScript. Derechos Reservados.</p>
   
  </div>
</footer>
  );
};

export default Footer;
