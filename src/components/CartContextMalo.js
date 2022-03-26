import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  

  const addItem = (product, count) => {
    
    let cartProduct = { ...product, count };
    console.log(cartProduct);
    let cartAux = [];
    if (isInCart(product)) {
     cartProduct = cart.find((item) => item.product === product);
     cartProduct.count = cartProduct.count + count;
     cartAux = [...cart];
    } else {
      cartAux = [cartProduct, ...cart];
    }
    setCart(cartAux);
   
  };

  const removeItem = (product)=> {
     if (isInCart(product)) {
      const cartAux = cart.filter((item) => item.product !== product);
      setCart(cartAux);
      console.log(cartAux);
    }
  };
  const clear = () => {
    setCart([]);
  };
  const isInCart = () => {
    //1.Ver si el producto esta en el carrito
    //2.Revisar que el producto  este en el carrito
    return cart && cart.some((item) => item.product === product)
    console.log(cart);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
