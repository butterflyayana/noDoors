
import Header from './layout/header/Index'
import Footer from './layout/Footer/Index'
import { Outlet } from 'react-router-dom'
import Brands from './Brands/Brands'

const Layout = () => {
  return (
    <div>
      <Header/>
      <Brands/>
      <Outlet/>
      Content
      <Footer/>
    </div>
  )
}

export default Layout