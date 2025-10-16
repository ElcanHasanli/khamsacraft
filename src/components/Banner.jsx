import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/Banner/Banner.module.css'
import MaskGroupLeft from '../images/Banner/Mask group.png'
import MaskGroupRight from '../images/Banner/Mask group (1).png'

function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.decorativeBackground}>
        <img 
          src={MaskGroupLeft} 
          alt="Decorative" 
          className={styles.maskLeft}
        />
        <img 
          src={MaskGroupRight} 
          alt="Decorative" 
          className={styles.maskRight}
        />
      </div>
      
      <div className="container">
        <div className={styles.bannerContent}>
          <div className={styles.textSection}>
            <h1 className={styles.mainTitle}>
              Brendinizi <span className={styles.highlight}>Zirvəyə</span> Çatdırırıq
            </h1>
            <h2 className={styles.subtitle}>
              Yaradıcılıq və İnnovasiya ilə Uğura Gedən Yol
            </h2>
            <p className={styles.description}>
              Müasir dizayn həlləri, güclü marketinq strategiyaları və 
              innovativ texnologiyalarla biznesinizi rəqabətdə bir addım 
              önə çəkiririk. Sizin uğurunuz bizim missiyamızdır.
            </p>
            <div className={styles.buttonGroup}>
              <Link to="/services" className={styles.primaryBtn}>Daha çox</Link>
              <Link to="/contact" className={styles.secondaryBtn}>Bizimlə Əlaqə</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner