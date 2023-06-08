import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './EmptyCart.module.scss'
import cart from '../../assets/img/cart.png'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const EmptyCart: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <img src={cart} alt="" />
      <h2>Ваша корзина пуста</h2>
      <p>
         Чтобы добавить продукты в корзину, перейдите в меню и выберите интересующий вас товар
      </p>
      <Link to='/'>
         <button>
            <FontAwesomeIcon icon={faAngleLeft} />
            <span>Вернуться назад</span>
         </button>
      </Link>
    </div>
  )
}

export default EmptyCart