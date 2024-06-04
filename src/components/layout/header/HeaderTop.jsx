import { NavLink } from "react-router-dom"
import cls from "./HeaderTop.module.css"
import { IoIosCall } from "react-icons/io";


const topMenu = [ {
    name: "о Компании",
    path: "/company"
},
{
    name: "Доставка и оплата",
    path: "/delivery-and-payment"
},
{
    name: "Гарантия",
    path: "/guarantees"
},
{
    name: "Контакты",
    path: "/contacts"
},

]



const HeaderTop = () => {
  return (
    <div className={cls.headerBg}>
    <div className="container">
      <div className={cls.flex}>
          <div >
              {topMenu.map(menu => {
                  return <NavLink style={{marginLeft: 20}} key={menu.name} to={menu.path}>{menu.name}</NavLink>
              })}
          </div>
          <div className={cls.flex2}>
              <p><a href="tel:0505710135"> <IoIosCall/> 0505710135</a></p>
              <select >
                <option value="ru">Русский</option>
                <option value="en">Английский</option>
                <option value="kg">Кыргызский</option>
              </select>
              <NavLink to="/personal-room">Личный кабинет</NavLink>
          </div>
      </div>
      </div>
    </div>
    )
}

export default HeaderTop
