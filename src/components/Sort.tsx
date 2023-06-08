import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { setSortId } from '../redux/slices/filterSlice'
import { RootState } from '../redux/store'

type propsType = {
   sortList: SortItem[]
}

type SortItem = {
   name: string,
   sortProperty: string,
   order: string
 }

const Sort: React.FC<propsType> = ({sortList}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const sortRef = useRef(null)
  const dispatch = useDispatch()
  const sortId = useSelector((state: RootState) => state.filterReducer.sortId)

  const setSortValueHandler = (index:number) => {
   onSortMethodChange(index)
   setIsPopupOpen(false)
  }

  const onSortMethodChange = (index:number) => {
   dispatch(setSortId(index))
 }

 
 useEffect(() => {
     const handleClick = (e:MouseEvent) => {
        if(e.target !== sortRef.current){
           setIsPopupOpen(false)
        }
     }

   document.body.addEventListener('click', handleClick)

   return () => {
      document.body.removeEventListener('click', handleClick)
   }
  }, [])

  return (
    <div className='sort-wrapper' >
      <div className="sort-label">
         <FontAwesomeIcon icon={isPopupOpen ? faArrowUp : faArrowDown} className='sort-icon'/>
         <b>Сортировка по</b>
         <span ref={sortRef} onClick={() => setIsPopupOpen(!isPopupOpen)}>{sortList[sortId].name}</span>
      </div>
      {isPopupOpen && (<div className="sort-popup">
         <div className="popup-wrapper">
            <ul>
               {sortList.map((e, i:number) => (
                  <li 
                     key={i}
                     className={sortId === i ? 'active' : ''}
                     onClick={() => setSortValueHandler(i)}>
                        {e.name}
                  </li>
               ))}
            </ul>
         </div>
      </div>)}
    </div>
  )
}

export default Sort