import React, { useState } from 'react'
import { CartItem, addToCart } from '../../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'
import { useAppDispatch } from '../../redux/store'

const typeList: string[] = ["Тонкое", "Традиционное"]

type DataProps = {
   category: number,
   id: number,
   price: number,
   title: string, 
   imageUrl: string, 
   types: number[], 
   sizes: number[],
}

type Props = {
   data: DataProps
}

const Index: React.FC<Props> = ({data}) => {
  const [selectedType, setSelectedType] = useState(data.types[0])
  const [selectedSize, setSelectedSize] = useState(data.sizes[0])

  const {id, title, imageUrl, price} = data

  const dispatch = useAppDispatch()

  const addClickHandler = () => {
      const item = {
         id,
         title,
         price,
         imageUrl,
         type: typeList[selectedType],
         size: selectedSize
      } as CartItem
      dispatch(addToCart(item))
  }

  return (
   <div className="item">
      <img src={data.imageUrl} alt="pizza" className='item-image'/>
      <h2 className="item-title">{data.title}</h2>
      <div className="item-selector">
      <ul>
         {data.types.map((e) => (
            <li 
            key={e}
            className={e === selectedType ? 'active' : ''}
            onClick={() => setSelectedType(e)}>
               {typeList[e]}
            </li>
         ))}
      </ul>
      </div>
      <div className="item-bottom">
         {data.sizes.map((e) => (
            <p key={e}
            className={e === selectedSize ? 'active' : ''}
            onClick={() => setSelectedSize(e)}>
               {e} 
            </p>
         ))}
      </div>
      <div className="item-price-block">
      <div className="price">{data.price} руб</div>
      <button className="add" onClick={addClickHandler}>Добавить</button>
      </div>
 </div>
  )
}

export default Index