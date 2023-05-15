import React from 'react'
import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
  return (
   <div className={styles.wrapper}>
    <h1>
      <span>😥</span>
      <br />
      <b>Ничего не найдено</b>
    </h1>
    <p>К сожалению, данная страница отсутствует в нашем интернет-магазине</p>
   </div>
  )
}

export default NotFoundBlock