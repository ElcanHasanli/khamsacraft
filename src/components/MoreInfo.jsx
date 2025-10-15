import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/MoreInfo/MoreInfo.module.css'

export default function MoreInfo({ onClick, link }) {
  if (link) {
    return (
      <Link to={link} className={styles.moreInfoBtn}>
        Daha Ətraflı
      </Link>
    )
  }
  
  return (
    <button className={styles.moreInfoBtn} onClick={onClick}>
      Daha Ətraflı
    </button>
  )
}

