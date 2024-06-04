import { useSelector } from "react-redux"
import Brand from "./Brand"
import HomeHero from "./HomeHero"
import PopularProducts from "./PopularProducts"


const Home = () => {
  const data = useSelector(state => state.popular.data)
  
  return (
    <div className='container'>
        <HomeHero/>
        <Brand/>
        <PopularProducts  data={data}/>
    </div>
  )
}

export default Home