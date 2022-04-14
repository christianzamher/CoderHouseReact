import { Link } from "react-router-dom";

const Footer = () => {
  return (
  
    <footer className="footer">
  <div className="footer__addr">
    <h1 className="footer__logo">A man</h1>
        
    <h2>Contacto</h2>
    
    <address>
      123 Fake Street . 1870
      <br></br>
          
      <a className="footer__btn" href="mailto:fooderscript@gmail.com">Escribinos!</a>
    </address>
  </div>
  
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">Menu</h2>

      <ul className="nav__ul">
        <li>
          <a href="#">Hamburguesas</a>
        </li>

        <li>
          <a href="#">Milanesas</a>
        </li>
            
        <li>
          <a href="#">Pizzas</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title"></h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="#">Postres</a>
        </li>
        
        <li>
          <a href="#">Desauyos y Meriendas</a>
        </li>
        
        <li>
          <a href="#">Bebidas</a>
        </li>
        
        <li>
          <a href="#">Contacto</a>
        </li>
        
        <li>
          <a href="#">Nosotros</a>
        </li>
        
        {/* <li>
          <a href="#">IoT</a>
        </li> */}
      </ul>
    </li>
    
    <li className="nav__item">
      <h2 className="nav__title">Legal</h2>
      
      <ul className="nav__ul">
        <li>
          <a href="#">Politicias de Privacidad</a>
        </li>
        
        <li>
          <a href="#">Terminos de Uso</a>
        </li>
        
        <li>
          <a href="#">Mapa del Sitio</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div className="legal">
    <p>&copy; 2022 FooderScript. Derechos Reservados.</p>
    
    {/* <div className="legal__links">
      <span>Made with <span class="heart">♥</span> remotely from Anywhere</span>
    </div> */}
  </div>
</footer>
  );
};

export default Footer;
