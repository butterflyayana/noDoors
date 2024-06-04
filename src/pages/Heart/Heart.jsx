import cls from "./Heart.module.css"
import { Typography } from "@mui/material"
import { useSelector } from "react-redux";
import PopularProducts from "../../components/Home/PopularProducts";




const Heart = () => {
  const data = useSelector((state) => state.heart.hearts);
    
  return (
    <div className='container'>
        <div className={cls.heart__wrap}>
            <Typography fontSize={"36px"} mb={"60px"} fontWeight={"500"}  variant="h3">Избранное</Typography>
        </div>
        <PopularProducts data={data} />
    </div>
  )
}

export default Heart