import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId } from '../redux/slices/filterSlice'

type propsType = {
   category: string[]
}

const Categories:React.FC<propsType> = ({category}) => {
   const categoryId = useSelector((state:any) => state.filterReducer.categoryId)
   const dispatch = useDispatch()

   const onCategoryChange = (index:number) => {
      dispatch(setCategoryId(index))
    }
   return (
      <div className='categories'>
         <ul>
            {category.map((e:string, i:number) => (
               <li 
                  className={categoryId === i ? 'active' : ''}
                  key={i}
                  onClick={() => onCategoryChange(i)}>
                  {e}
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Categories