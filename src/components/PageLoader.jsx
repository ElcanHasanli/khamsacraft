import React, { useState, useEffect } from 'react'
import styles from '../css/PageLoader/PageLoader.module.css'
import KhamsaCraftLogo from '../images/KhamsaLogo.png'

function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Minimum 1.5 saniyə loader göstər
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loaderContent}>
        <div className={styles.logoContainer}>
          <img src={KhamsaCraftLogo} alt="Khamsacraft" className={styles.logo} />
        </div>
        <div className={styles.dotsContainer}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
    </div>
  )
}

export default PageLoader

