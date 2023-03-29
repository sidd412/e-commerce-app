import React from 'react'
import Form from './cartCompo/Form'

const foods = [
  { id:1, name: "trowser", price: 20, url:"https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBhbnRzfGVufDB8fDB8fA%3D%3D&w=1000&q=80" },
  { id:2, name: "blazer", price: 30, url:"https://lanieri.com/blog/wp-content/uploads/2016/10/TailorTips_BlogImage_Spalla.png" },
  { id:3, name: "rainCoat", price: 25, url:"https://static.standard.co.uk/2022/09/08/16/Rain%20comp.jpg?width=1200" },
  { id:4, name: "T-shirt", price: 10, url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZc9FW24x6RRk3yRtCl20ECQJnVFFGaQUV4A&usqp=CAU" },
  { id:5, name: "Jeans", price: 30, url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz6CtZcF6NLaqsVtaK3_vXT477jHGvH-GImabO4uoOM6pMEha0t1h_66T-x_Fdumw2WXM&usqp=CAU" },
  { id:6, name: "shirt", price: 30, url:"https://navbharattimes.indiatimes.com/thumb/86939528/casual-shirts-86939528.jpg?imgsize=199900&width=1200&height=900&resizemode=75" },
  { id:7, name: "belt", price: 30, url:"https://media.istockphoto.com/id/1029383076/photo/collection-of-leather-belts-on-a-wooden-table.jpg?s=612x612&w=0&k=20&c=wmTnklWIPJyRxpiooEVlwCewGGBq9LdxYbE8ijdxCkc=" },
  { id:8, name: "cap", price: 30, url:"https://i0.wp.com/textilelearner.net/wp-content/uploads/2021/07/types-of-caps.jpg?fit=600%2C400&ssl=1" },
  { id:9, name: "shoes", price: 30, url:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnQlMjBzaG9lc3xlbnwwfHwwfHw%3D&w=1000&q=80" },
  { id:10, name: "jacket", price: 30, url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQAXTAfTHQqpm3yFolyFXTj2r9vuyp2Fgave17M8KnmOfWEnrex6qt-sYSWOQfZn5jYk&usqp=CAU" },
];

export default function Store(props) {
  return (
      <div id='store'>
          {foods.map((food) => {
            return (
                <div id='card'>
                  <div id='image'><img style={{width:"300px" , height:"200px"}} src={food.url} alt="" /></div>
                  <div id="box">                 
                      <div><b style={{fontStyle:"italic"}} > {food.name} </b></div>
                      <div><b style={{fontStyle:"italic"}}>$ {food.price}.00</b></div>
                      <div><Form id={food.id} name={food.name} price={food.price} url={food.url} cart={props.cart} handleClick={props.handleClick} handleChange={props.handleChange}  /></div>
                  </div>
                </div>
            );
          })}
        </div> 
  )
}
