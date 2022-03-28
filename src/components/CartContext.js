import { createContext, useState, useContext  } from "react";
export const cartContext = createContext();
const { Provider } = cartContext;


export const MiProvider = ({ children }) => { 

    const [cart, setCart] = useState([]);
    // const [total , setTotal] = useState(0)
    console.log(cart)
    
   
    const addItem = (producto, cantidad)=>{
       const cartProduct = {...producto , cantidad}
       const AuxCart = []
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
        return cart && cart.some(elemento => elemento.producto.id === id);
    }

    const totalPrecio =()=>{
        
    }

    

    
    const ValordelProvider = {
        cart,
       addItem,
        removeItem,
        clear ,
        isInCart,
        totalPrecio

    }


  return (
        <Provider value={ValordelProvider}>
        {children}
        </Provider>
    )
}


export default cartContext