import React, { useEffect, useRef } from 'react'
import qs from 'qs'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setFilter } from '../redux/slices/filterSlice'
import { fetchPizzas } from '../redux/slices/menuSlice'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Skeleton from '../components/itemBlock/Skeleton'
import Item from '../components/itemBlock/Index'

type SortItem = {
  name: string,
  sortProperty: string,
  order: string
}

const category: string[] = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]
const sortList: SortItem[] = [
  {
    name: "популярности (по возрастанию)", 
    sortProperty: 'rating',
    order: 'asc'
  }, 
  {
    name: "популярности (по убыванию)", 
    sortProperty: 'rating',
    order: 'desc'
  }, 
  {
    name: "стоимости (по возрастанию)", 
    sortProperty: 'price',
    order: 'asc'
  }, 
  {
    name: "стоимости (по убыванию)", 
    sortProperty: 'price',
    order: 'desc'
  }, 
  {
    name: "алфавиту (по возрастанию)", 
    sortProperty:'title',
    order: 'asc'
  },
  {
    name: "алфавиту (по убыванию)", 
    sortProperty:'title',
    order: 'desc'
  }
]

const Menu: React.FC = () => {
  const {items, status} = useSelector(state => state.menuReducer)

  const isSearch = useRef(false)
  const isMounted = useRef(false)
  
  const { categoryId, sortId } = useSelector(state => state.filterReducer)
  const searchValue = useSelector(state => state.searchReducer.value)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const getPizzas = () => {
    const categoryParams: string = categoryId ? `category=${categoryId}` : ''
    const sortParams: string = `sortBy=${sortList[sortId].sortProperty}`
    const orderParams: string = `order=${sortList[sortId].order}`
    const searchParams: string = searchValue ? `search=${searchValue}` : ''
    
    dispatch(fetchPizzas({
      categoryParams,
      sortParams,
      orderParams,
      searchParams
    }))    
  }

  // Если был уже рендер и изменились параметры, то тогда вшивай параметры
  
  // Поменять всё!!!
  useEffect(() => {
    if(isMounted.current){
      const queryString = qs.stringify({
        sortProperty: sortList[sortId].sortProperty,
        order: sortList[sortId].order,
        categoryId,
      })
      
      navigate(`?${queryString}`)
    }
    
    isMounted.current = true
    
  }, [categoryId, sortId])
  
  // Если был первый рендер, то проверяем на наличие параметры URL
  useEffect(() => {
    if(window.location.search){
      const params = qs.parse(window.location.search.substring(1)) 
      const sort  = sortList.findIndex((obj) => obj.sortProperty === params.sortProperty && obj.order === params.order)
      
      dispatch(setFilter({
        ...params,
        sortId: sort
      }))

      isSearch.current = true
    }
  }, [])
  
  // Если нет URL параметр, то делаем запрос по умолчанию
  useEffect(() => {
    window.scrollTo(0,0)
    getPizzas()
  }, [categoryId, sortId, searchValue])

  return (
    <div className="menu-wrapper">
      <div className='menu-choose-wrapper'>
      <div className="menu-choose">
        <Categories category={category}/>
        <Sort sortList={sortList}/>
      </div>
        
      </div>
      { status === 'error' 
      ?
      <div className="error-container">
        <h2>Произошла ошибка</h2>
        <p>Что-то пошло не так, пожвлуйста, попробуйте поаторить попытку позже</p>
      </div> 
      :
      <div className="menu-container">
          {status === 'loading'
            ? [...new Array(6)].map((_, i) => <Skeleton key={i}/>) 
            :  items.map((e,i) => (<Item key={i} data={e}/>))
          }
      </div>
      }
    </div>
  )
}

export default Menu