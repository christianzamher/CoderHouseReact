import { createContext, useState, useContext  } from "react";
export const cartContext = createContext();
const { Provider } = cartContext;


export const MiProvider = ({ children }) => { 

    const [cart, setCart] = useState([]);
    
    console.log(cart)
    
   
    const addItem = (producto, cantidad)=>{
    
        if (isInCart(producto)) 
        {
        cartProduct = cart.find(item => item.producto.id === producto.id)
        }
        else
        {

          const AuxCart = [...cart];
          AuxCart.push({ producto, cantidad });
          setCart(AuxCart)
        }
                
        }
    

    const removeItem = (id)=>{
      
           const AuxCart = cart.filter(elemento=>elemento.producto.id !==id);
           setCart(AuxCart)
        }
   
           

    const clear = () => {
        setCart([]);
       
    }

    const isInCart = (id) => {
        if(cart){

            return cart && cart.some(elemento => elemento.producto.id === id);
        }
    }

    const precioTotal = () => {
        return cart.reduce((suma, i) => suma + i.cantidad * i.producto.precio, 0);
    }

    
  

    

    
    const ValordelProvider = {
        cart,
       addItem,
        removeItem,
        clear ,
        isInCart,
        precioTotal
        

    }


  return (
        <Provider value={ValordelProvider}>
        {children}
        </Provider>
    )
}


export default cartContext