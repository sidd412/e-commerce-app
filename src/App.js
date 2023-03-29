import React , {useState} from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Store from './components/Store'
import Cart from './components/Cart'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Error from './components/Error'
import NoAccess from './components/NoAccess'


export default function App() {
  var [cartCount, setCartCount] = useState(0)
  const [cart, setCart] = useState([])
  const [isUser , setIsUser] = useState(false)



 function updateCartCount(){
    var x= 0 ;
    cart.forEach((foodItem)=>{
      x = x+foodItem.qnt ;
    })
    setCartCount(x) ;
 }

  function handleClick(item){
    let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id){
      product.qnt = item.qnt
      setCart([...cart])
			isPresent = true;
    }
		})

		if (isPresent){
      updateCartCount()
			return ;
		}
    
    cart.push(item)
    setCart([...cart])
    updateCartCount()
  }

  function handleChange(item, d){
    let ind = -1;
    cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
    const tempArr = cart;
		tempArr[ind].qnt += d;
		
		if (tempArr[ind].qnt === 0)
			tempArr[ind].qnt = 1;
		setCart([...tempArr])
    updateCartCount()
  }


  return (
  <BrowserRouter>
    <Header cartCount={cartCount} setIsUser={setIsUser} isUser={isUser} />
      <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/store' element={ isUser ? <Store cart={cart} handleClick={handleClick} /> : <NoAccess/> }></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/contacts' element={<>this is contacts</>}></Route>
      <Route exact path='/cart' element={ isUser ? <Cart cart={cart} handleChange={handleChange} setCart={setCart} updateCartCount={updateCartCount} /> : <NoAccess/>}></Route>
      <Route path='*' element={<Error/>}></Route>
      </Routes>
    <Footer/>
  </BrowserRouter>
  )
}

