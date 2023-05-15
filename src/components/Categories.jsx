import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId } from '../redux/slices/filterSlice'

const Categories = ({category}) => {
   const categoryId = useSelector(state => state.filterReducer.categoryId)
   const dispatch = useDispatch()

   const onCategoryChange = (index) => {
      dispatch(setCategoryId(index))
    }
   return (
      <div className='categories'>
         <ul>
            {category.map((e, i) => (
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