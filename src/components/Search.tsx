import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useCallback, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setInputValue, clearInput } from '../redux/slices/searchSlice'
import debounce from 'lodash.debounce'
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons'

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  const onClickClear = () => {
    setSearchValue('')
    dispatch(clearInput())
    inputRef.current?.focus()
  }

  const updateSearchValue = useCallback(
    debounce((value: string) => {
      dispatch(setInputValue(value))
    }, 350), 
    []
  )

  const onChangeInput = (value: string) => {
    setSearchValue(value)
    updateSearchValue(value)
  }

  return (
    <div className='search-wrapper'>
      <FontAwesomeIcon icon={faSearch} className='icon'/>
      <input type="text" ref={inputRef} placeholder='Найти...' value={searchValue} 
      onChange={(e) => onChangeInput(e.target.value)}/>
      <FontAwesomeIcon icon={faXmark} className='icon' onClick={onClickClear}/>
    </div>
  )
}

export default Search