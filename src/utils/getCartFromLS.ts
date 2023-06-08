import { calcTotalPriceCart } from "./calcTotalPriceCart"

export const getCartFromLS = () => {
   const data = localStorage.getItem('cart')
   const items = data ? JSON.parse(data) : []
   const totalPrice = calcTotalPriceCart(items)

   return{
      totalPrice,
      items
   }
}