import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft, faCartShopping, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import CartItemBlock from '../components/CartItemBlock'
import EmptyCart from '../components/emptyCart/EmptyCart'
import { useDispatch, useSelector } from 'react-redux'
import { clearItems } from '../redux/slices/cartSlice'

const Cart = () => {
  const items = useSelector(state => state.cartReducer.items)
  const dispatch = useDispatch()

  const totalCountItems = items.reduce((sum, item) => sum + item.count, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.count, 0)

  return (
    <div className='cart-wrapper'>
      {items.length ? 
      <div className="cart-container">
        <div className="cart-top">
          <h1>
            <FontAwesomeIcon icon={faCartShopping}/>
            <span>Корзина</span>
          </h1>
          <p onClick={() => dispatch(clearItems())}>
            <FontAwesomeIcon icon={faTrashCan} />
            <span>Очистить корзину</span>
          </p>
        </div>
        <div className="cart-center">
          {items.map((e,i) => (
            <CartItemBlock key={i} data={e}/>
          ))}
        </div>
        <div className="cart-bottom">
          <div className="cart-summary">
            <p>
              <span>
                Всего пицц:
              </span>
              <span className='cart-total-items'>{totalCountItems} шт</span>
            </p>
            <p>
              <span>Сумма заказа:</span>
              <span className="total-price">
                {totalPrice} ₽
              </span>
            </p>
          </div>
          <div className="cart-btn-block">
            <Link to='/'>
              <button className="back">
                <FontAwesomeIcon icon={faAngleLeft} />
                <span>Вернуться назад</span>
              </button>
            </Link>
            <button className="buy">
              Оплатить сейчас
            </button>
          </div>
        </div>
      </div>
      :
      <EmptyCart/>}
    </div>
  )
}

export default Cart