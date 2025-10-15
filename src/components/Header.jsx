import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import KhamsaCraftLogo from '../images/KhamsaLogo.png'
import styles from '../css/Header/Header.module.css'

function Header() {
  const location = useLocation()
  
  const isActive = (path) => {
    return location.pathname === path
  }
  
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link to="/" className={styles.navLogo}>
            <img className={styles.navLogoImg} src={KhamsaCraftLogo} alt="KhamsaCraftLogo" />
          </Link>
          <div className={styles.navLinks}>
            <Link 
              className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`} 
              to="/about"
            >
              Haqqımızda
            </Link>
            <Link 
              className={`${styles.navLink} ${isActive('/services') ? styles.active : ''}`} 
              to="/services"
            >
              Xidmətlərimiz
            </Link>
            <Link 
              className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`} 
              to="/contact"
            >
              Əlaqə
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header