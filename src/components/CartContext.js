import { createContext, useState, useContext  } from "react";
export const cartContext = createContext();
const { Provider } = cartContext;


export const MiProvider = ({ children }) => { 

    const [cart, setCart] = useState([]);
    console.log(cart);
   
    const addItem = (producto, cantidad)=>{
        const AuxCart = [...cart];
        AuxCart.push({ producto, cantidad });
        setCart(AuxCart)
        
        }
    

    const removeItem = (id)=>{
        const AuxCart = cart.filter(elemento=>elemento.producto.id !==id);
        setCart(AuxCart)
     }

    const clear = () => {
        setCart([]);
       
    }

    const isInCart = (id) => {
        return cart.find(elemento => elemento.producto.id === id);
    }

    

    
    const ValordelProvider = {
        cart,
        setCart ,
        addItem,
        removeItem,
        clear 

    }


  return (
        <Provider value={ValordelProvider}>
        {children}
        </Provider>
    )
}


export default cartContext