import { CartItem } from "../redux/slices/cartSlice"

export const calcTotalPriceCart = (items: CartItem[]) => {
   return items.reduce((sum, obj) => sum + obj.price * obj.count, 0)
}