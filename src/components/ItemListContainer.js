import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer(props) {
  return (
      <>
      <h1 className='h1Item'>{props.greetings}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corporis placeat nihil beatae fugiat porro eum laboriosam, tempore dolor! Pariatur molestias quasi dolores fugiat mollitia saepe eius quae! Excepturi, cumque.</p>
      <ItemCount stock={5} initial={1}/>
      </>
    

  )
}

export default ItemListContainer