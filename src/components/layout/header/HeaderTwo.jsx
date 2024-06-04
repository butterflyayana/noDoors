import logo from "../../../assets/logo.svg"
import cls from "./headerTwo.module.css"
import { CiSearch } from "react-icons/ci";
import heartl from "../../../assets/heart.svg"
import carts from "../../../assets/cart.svg"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const HeaderTwo = () => {
  const cart = useSelector(state => state.cart.items)
  const hearts = useSelector(state => state.heart.hearts);
  
  return (
    <div>
      <Link to={"/logo"}><img className={cls.logo} src={logo} alt="" /></Link>
      <div className={cls.search}>
      <input type="text" placeholder="Введите поисковой запрос.." />
      <button className={cls.btn}><CiSearch/>Найти</button>
      </div>
      <div className={cls.icon}>
        <div className={cls.heart}>
          <Link to={"/like"}>
          <img className={cls.iconHeart} src={heartl} alt="" /> 
          <span className={cls.heartSp}>{hearts.length}</span>
          <h4 className={cls.textHeart}>Избранное</h4>
          </Link>
        </div>
        <div className={cls.cart}>
          <Link to={"/cart"}>
          <img className={cls.iconCart} src={carts} alt="" />
          <span className={cls.cartSp}>{cart.length}</span>
          <h4 className={cls.textCart}>Моя корзина</h4>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeaderTwo