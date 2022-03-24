
import { createContext , useState} from 'react'
export const CartContext = createContext()



const CartContextProvider = ({children}) => {
  return (
    
    <CartContext.Provider value={useState([] )}>
      {children}
    </CartContext.Provider>

  )
}

 