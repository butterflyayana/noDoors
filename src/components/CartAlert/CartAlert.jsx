import cls from './Alert.module.css'
import check from '../../assets/check.png'
import close from '../../assets/close.png'
import { useNavigate } from 'react-router-dom'
import {  useDispatch } from 'react-redux'
import { removeAlert } from '../../redux/Slices/alertSlice'

const CartAlert = () => {
  const navigator = useNavigate()
  const dispatch = useDispatch()
  const handleClick = (redirectToCheckout) => {
    if (redirectToCheckout) {
      navigator('/cart')
      dispatch(removeAlert())
    } else {
      dispatch(removeAlert())
    }
  };
  return (
    <div className={cls.overlay}>
        <div className={cls.alert}>
          <img className={cls.check} src={check} alt="" />
            <h3>Товар добавлен в корзину!</h3>
            <div className={cls.butt}>
            <button className={cls.btnone}  onClick={() => handleClick(true)}>Оформить заказ</button>
            <button className={cls.btntwo} onClick={() => handleClick(false)}>Продолжить покупки</button>
            </div>
        </div>
    </div>
  )
}

export default CartAlert