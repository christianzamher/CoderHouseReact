import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {db} from './Firebase'
import { collection, doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
   const [cargar, setCargar] = useState(false);
  const {id} = useParams()

  

  useEffect(() => {
   

    const docRef = doc(collection(db,"productos"),id);
    getDoc(docRef)
    .then((respuesta)=> setProductos(respuesta.data()))
    .catch((error)=> console.log(error))
    .then(()=> setCargar(true))

  }, [id]);
 

  return (
    
      <main >
        {!cargar ? (
          <div className="loader"></div>
        ) : (
          <ItemDetail productos={productos} />
        )}
      </main>
    
  );
};

export default ItemDetailContainer;
