import { createContext, useState } from "react";
export const cartContext = createContext();
const { Provider } = cartContext;

export const MiProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  

  const addItem = (producto, cantidad) => {
    const index = cart.findIndex((i) => i.producto.id === producto.id);

    if (index > -1) {
      const comparandoItems = cart[index].cantidad;

      cart.splice(index, 1);

      setCart([...cart, { producto, cantidad: cantidad + comparandoItems }]);
    } else {
      setCart([...cart, { producto, cantidad }]);
    }
  };

  
  const removeItem = (id) => {
    const AuxCart = cart.filter((elemento) => elemento.producto.id !== id);
    setCart(AuxCart);
  };

  
  const clear = () => {
    setCart([]);
  };

  
  const precioTotal = () => {
    return cart.reduce((suma, i) => suma + i.cantidad * i.producto.precio, 0);
  };

  const itemTotales = ()=>{
    let total = 0
    cart.forEach(elemento => {
        total += elemento.cantidad
    });
    return total
}

  
  const ValordelProvider = {
    cart,
    addItem,
    removeItem,
    clear,
    precioTotal,
    itemTotales
  };

  return <Provider value={ValordelProvider}>{children}</Provider>;
};

export default cartContext;
