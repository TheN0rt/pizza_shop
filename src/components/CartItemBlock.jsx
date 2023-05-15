import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { removeItem, incrementCount, decrementCount } from '../redux/slices/cartSlice'

const CartItemBlock = ({data}) => {
  const dispatch = useDispatch()

  return (
    <div className="cart-item">
            <img src={data.imageUrl} alt="pizza" />
            <div className="cart-desc">
              <h3>{data.title}</h3>
              <p>
                {data.type} тесто, {data.size} см
              </p>
            </div>
            <div className="cart-counter">
              <div className="minus" onClick={() => dispatch(decrementCount(data.id))}>
                <FontAwesomeIcon icon={faMinus} />
              </div>
              <div className="cart-count">{data.count}</div>
              <div className="plus" onClick={() => dispatch(incrementCount(data.id))}>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
            <p className="price">{data.price * data.count} ₽</p>
            <div className="cart-delete" onClick={() => dispatch(removeItem(data.id))}>
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
  )
}

export default CartItemBlock