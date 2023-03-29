import React, { useState} from 'react'


export default function Form(props) {
  const [qnt, setQnt] = useState(1)

  function saveLocal(e){
    e.preventDefault()
    setQnt(qnt+1)
    const order = {
      id:props.id,
      name:props.name,
      price:props.price, 
      qnt:qnt
    }
    console.log(order)
    props.handleClick(order)
    console.log(props.cart)  

    
  }

  return (
    <>
    <form id='form' onSubmit={saveLocal}>
      <button type='submit'  id='addBtn'> + Add To Cart</button>
    </form>
    </>
  )
}