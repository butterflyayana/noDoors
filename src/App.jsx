import Layout from "./components"
import { Routes,Route }  from "react-router-dom"
import Home from "./components/Home/Home"
import CartPage from './pages/Cart/Cart'
import HeartPage from './pages/Heart/Heart'
import Contacts from "./pages/Contacts/Contacts"
import CartAlert from "./components/CartAlert/CartAlert"
import { useState } from "react"
import { useSelector } from "react-redux"


const App = () => {
  const isVisible = useSelector(state => state.alert.isVisible)
  return (
    <div>
      {isVisible &&  <CartAlert/>}
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/company" element={<h3>Company page</h3>}/>
        <Route path="/delivery-and-payment" element={<h3>D And P page</h3>}/>
        <Route path="/guarantees" element={<h3>guarantees page</h3>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/personal-room" element={<h3>Personal room</h3>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/like" element={<HeartPage/>}/>
        <Route path="/logo" element={<Home/>}/>
      </Route>
      </Routes>
    </div>
  )
}

export default App