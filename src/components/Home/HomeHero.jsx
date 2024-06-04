import cls from "./Hero.module.css"
import chehol from  "../../assets/chehol.png"
import powerBank from "../../assets/powerBank.png"
import pro11 from "../../assets/pro11.png" 
import {Button} from "@mui/material"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import { useRef, useState } from "react"

var settings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

const HomeHero = () => {
    const ref = useRef(null)
    const [index, setIndex] =  useState(1)
    const nextSlide = (idx) => {
        ref.current.slickNext()
        setIndex(idx)
    }
  return (
    <div className={cls.flex}>
        <Slider ref={ref} {...settings}>
        <div>
            <div className={cls.hero__slider} style={{background: `url(${pro11}) no-repeat right`, backgroundColor: "#399A3A", borderRadius: '5px', height: 375}}>
            <h2>Защитное стекло на <br />iPhone 11 Pro <br />по лучшей цене!</h2>
             <Button variant="container" sx={{mb: "134px" ,bgcolor: "#fff", color: "#399a3a", "&:hover": {bgcolor: "#fff"}}}>Подробнее</Button>
             <div style={{ display: "flex", gap: '5px'}}>
                {[1,2].map(el => (
                    <div onClick={() => nextSlide(el)} key={`btn${el}`} style={{width:30, height:5, background: index == el ? "#fff" : "#ffffff70", borderRadius: '100px', cursor: 'pointer'}}/>
                ))}
             </div>
            </div>
        </div>
        <div>
            <div className={cls.hero__slider} style={{background: `url(${pro11}) no-repeat right`, backgroundColor: "#399A3A", borderRadius: '5px', height: 375}}>
            <h2>Защитное стекло на <br />iPhone 11 Pro <br />по лучшей цене!</h2>
             <Button variant="container" sx={{mb: "134px",bgcolor: "#fff", color: "#399a3a", "&:hover": {bgcolor: "#fff"}}}>Подробнее</Button>
             <div style={{ display: "flex", gap: '5px'}}>
                {[1, 2].map(el => (
                    <div onClick={() => nextSlide(el)} key={`btn${el}`} style={{width:30, height:5, background: index == el ? "#fff" : "#ffffff70", borderRadius: '100px', cursor: 'pointer'}}/>
                ))}
             </div>
            </div>
        </div>
        </Slider>
        <div className={cls.hero__cards}>
            <div className={cls.card} style={{background: `url(${chehol}) no-repeat right`, height: 183}}>
                <h2>Silicone Case <br />для iPhone Xr</h2> <p>Подробнее</p>
            </div>
            <div className={cls.card} style={{background: `url(${powerBank}) no-repeat right`, height: 183}}>
                <h2>PowerBank от Xiaomi <br /> на 10 800 мА•ч</h2> <p>Подробнее</p>
            </div>
        </div>
    </div>
  )
}

export default HomeHero