import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {db} from './Firebase'
import { getDocs , query, collection,where } from "firebase/firestore";
import { useParams } from "react-router-dom";





function ItemListContainer() {
  
  const [productos, setProductos] = useState([]);
  const [cargar, setCargar] = useState(false);
  const params = useParams();
  const category = params.id;
  

  useEffect(() => {

    if (category){
      const queryDb = query(collection(db,"productos"),where("categoria", "==", category));
      getDocs(queryDb)
      .then((respuesta)=> setProductos(respuesta.docs.map(p=>({...p.data(), id: p.id}))))
      .then(()=> setCargar(true))
      .catch((err) => console.log(err))
      
      
      
    }
    else{
      getDocs(collection(db,"productos"))
      .then((respuesta)=> setProductos(respuesta.docs.map(p=>({...p.data(), id: p.id}))))
      .then(()=> setCargar(true))
      .catch((err) =>
        console.log(err))
       
    }

   
  }, [category]);
  
 

  return (
    
      <main >
        {!cargar ? (
          <div className="loader"></div>
        ) : (
           <ItemList productos={productos} />
           
           )}
           
      </main>
    
  );
}

export default ItemListContainer;
