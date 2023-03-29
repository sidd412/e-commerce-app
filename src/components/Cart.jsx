import React, {useState, useEffect} from 'react'


export default function Cart(props) {

  const [price, setPrice] = useState(0);
  const handlePrice = ()=>{
    let ans = 0;
    props.cart.map((item)=>(
        ans += item.qnt * item.price
    ))
    setPrice(ans);
}

const handleRemove = (id) =>{
  const arr = props.cart.filter((item)=>item.id !== id);
  props.setCart([...arr]);
}

useEffect(()=>{
  props.updateCartCount() ;
  handlePrice();
})

  return (

    <div id='cart'>

      {
        props.cart.map((order)=>{
          return(
            <div id='cartItem' style={{margin:"20px", display:"flex", justifyContent:"space-around"}}>
              <div>
                <img src="" alt="" />sid
                <div>{"Item: "}{order.name}</div>
              </div>
              <div>
                
                <div>
                <button onClick={()=>props.handleChange(order, +1)} id='addBtn' style={{margin:"7px"}} > + </button>
                   {order.qnt} 
                   <button onClick={()=>props.handleChange(order, -1)} id='addBtn' style={{margin:"7px"}} > - </button>

                    </div>
                <div>{"Price : "} {order.qnt}*{order.price} = {order.price*order.qnt}</div>
              </div>
              <div>
              <button onClick={()=>handleRemove(order.id)} id='addBtn' >- Remove</button>
              </div>
            </div> 
          )
        })
      }

     <div> <hr /> <h2>Total : $<i>{price}</i></h2> <hr /> </div>
    </div>
  )
}
