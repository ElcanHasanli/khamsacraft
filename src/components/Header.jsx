import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import KhamsaCraftLogo from '../images/KhamsaLogo.png'
import styles from '../css/Header/Header.module.css'

function Header() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const isActive = (path) => {
    // Ana səhifə üçün dəqiq match
    if (path === '/') {
      return location.pathname === '/'
    }
    // Digər səhifələr üçün
    return location.pathname === path
  }

  // Menyu açıq olduqda body scroll-u bloklayır
  useEffect(() => {
    if (isMenuOpen) {
      // Scroll kilidlənir
      document.body.classList.add('menu-open')
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100vh'
      document.documentElement.style.overflow = 'hidden'
    } else {
      // Scroll açılır
      document.body.classList.remove('menu-open')
      document.body.style.overflow = 'unset'
      document.body.style.height = 'auto'
      document.documentElement.style.overflow = 'unset'
    }
    
    // Cleanup function
    return () => {
      document.body.classList.remove('menu-open')
      document.body.style.overflow = 'unset'
      document.body.style.height = 'auto'
      document.documentElement.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Route dəyişəndə menyunu bağlayır
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link to="/" className={styles.navLogo}>
            <img className={styles.navLogoImg} src={KhamsaCraftLogo} alt="KhamsaCraftLogo" />
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.navLinks}>
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
          </nav>

          {/* Mobile Hamburger Button */}
          <button 
            className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className={styles.mobileBackdrop} 
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuActive : ''}`}>
        <nav className={styles.mobileNav}>
          <Link 
            className={`${styles.mobileNavLink} ${isActive('/') ? styles.active : ''}`} 
            to="/"
          >
            Ana Səhifə
          </Link>
          <Link 
            className={`${styles.mobileNavLink} ${isActive('/about') ? styles.active : ''}`} 
            to="/about"
          >
            Haqqımızda
          </Link>
          <Link 
            className={`${styles.mobileNavLink} ${isActive('/services') ? styles.active : ''}`} 
            to="/services"
          >
            Xidmətlərimiz
          </Link>
          <Link 
            className={`${styles.mobileNavLink} ${isActive('/contact') ? styles.active : ''}`} 
            to="/contact"
          >
            Əlaqə
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header