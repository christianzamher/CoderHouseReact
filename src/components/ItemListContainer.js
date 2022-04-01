import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {db} from './Firebase'
import { getDocs , query, collection,where } from "firebase/firestore";
import { useParams } from "react-router-dom";
console.log(db)


// const ArrayProductos = [
//   {
//     id: 1,
//     nombre: " Cerveza ",
//     imagen: "./images/cerveza3.jpg",
//     precio: 290,
//     descripcion:
//       "Chop Cerveza de 1lt Artesanal(IPA , Golden ,Honey, Red , Stout)",
//     category: "bebida",
//   },
//   {
//     id: 2,
//     nombre: "Gaseosa",
//     imagen: "./images/gaseosa.png",
//     precio: 180,
//     descripcion: "Lata de Gaseosa de 500cm3 (Naranja , Pomelo, Tonica) ",
//     category: "bebida",
//   },
//   {
//     id: 3,
//     nombre: "Combo 2",
//     imagen: "./images/milanesa.jpg",
//     precio: 800,
//     descripcion: "Milanesa Napolitada con Papas Fritas ",
//     category: "milanesas",
//   },
//   {
//     id: 4,
//     nombre: "Combo3",
//     imagen: "./images/cafe2.jpg",
//     precio: 320,
//     descripcion: "Cafe con Leche + 3 medialunas + agua + jugo de naranja",
//     category: "desayuno",
//   },
//   {
//     id: 5,
//     nombre: "Combo 4",
//     imagen: "./images/hamburguesa.jpg",
//     precio: 730,
//     descripcion: "Hamburguesa Completa + huevo frito + cerveza 500cm3",
//     category: "hamburguesa",
//   },
//   {
//     id: 6,
//     nombre: "Combo 5",
//     imagen: "./images/hamburguesaveggie.jpg",
//     precio: 850,
//     descripcion: "Hamburguesa Opcion Veggie + papas fritas + Bebida",
//     category: "hamburguesa",
//   },
//   {
//     id: 7,
//     nombre: "Combo 6",
//     imagen: "./images/hamburguesa2.jpg",
//     precio: 600,
//     descripcion: "Hamburguesa 180gr + cheddar + papas fritas ",
//     category: "hamburguesa",
//   },
//   {
//     id: 8,
//     nombre: "Combo 7",
//     imagen: "./images/pizza2.png",
//     precio: 700,
//     descripcion: "Pizza grande de Mozzarella + jamon + cebolla de verdeo ",
//     category: "pizza",
//   },
//   {
//     id: 9,
//     nombre: "Combo 8",
//     imagen: "./images/helado.jpg",
//     precio: 400,
//     descripcion: "1/2 kg de helado de diferentes sabores (consultar)",
//     category: "postre",
//   },
// ];

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

      .catch((err) =>
        console.log(err))
      
    }
    else{
      getDocs(collection(db,"productos"))
      .then((respuesta)=> setProductos(respuesta.docs.map(p=>({...p.data(), id: p.id}))))
      .catch((err) =>
        console.log(err))
    }

   
  }, [category]);
  console.log(productos)
 

  return (
    <>
      <main className="mainContainer">
        {!productos ? (
          <div className="loader">Loading...</div>
        ) : (
           <ItemList productos={productos} />
           
           )}
           
      </main>
    </>
  );
}

export default ItemListContainer;
