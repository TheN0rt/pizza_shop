import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { removeItem, incrementCount, decrementCount } from '../redux/slices/cartSlice'
import { useAppDispatch } from '../redux/store'

type propsType = {
  data: dataType
}

type dataType = {
  title: string,
  imageUrl: string,
  type: string,
  size: number,
  count: number,
  id: number,
  price: number
}

const CartItemBlock:React.FC<propsType> = ({data}) => {
  const dispatch = useAppDispatch()

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
              <div className="minus" onClick={() => dispatch(decrementCount(data))}>
                <FontAwesomeIcon icon={faMinus} />
              </div>
              <div className="cart-count">{data.count}</div>
              <div className="plus" onClick={() => dispatch(incrementCount(data))}>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
            <p className="price">{data.price * data.count} ₽</p>
            <div className="cart-delete" onClick={() => dispatch(removeItem(data))}>
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
  )
}

export default CartItemBlock