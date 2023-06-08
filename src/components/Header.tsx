import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/img/Logo.png'
import { Link, useLocation } from 'react-router-dom'
import Search from './Search'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const Header: React.FC = () => {
   const location = useLocation()
   const totalPrice = useSelector((state: RootState) => state.cartReducer.totalPrice)

  return (
    <div className='header-wrapper'>
      <div className="header-body">
         <div className="header-left">
            <Link to='/'>
               <img src={logo} alt="logo" />
            </Link>
            <div className="title-body">
               <h1 className="title">React Pizza</h1>
               <p className="subtitle">заказ пиццы</p>
            </div>
         </div>
         { location.pathname === '/cart' ?
          <></>
          :
          <Search/>
         }
         <div className="header-right">
            {/* <button className='login'>
               Вход
            </button> */}
            { location.pathname === '/cart' ?
               <></>
               : 
               <Link to='/cart'>
                  <button className="basket">
                     <p className="total-price">{totalPrice} р</p>
                     <div className="line"></div>
                     <p className="text">
                        <FontAwesomeIcon icon={faCartShopping} />
                        Корзина
                     </p>
                  </button>
               </Link>
            }
         </div>
      </div>
    </div>
  )
}

export default Header