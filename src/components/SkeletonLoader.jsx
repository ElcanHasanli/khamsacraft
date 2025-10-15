import React from 'react'
import styles from '../css/SkeletonLoader/SkeletonLoader.module.css'

// Təməl Skeleton komponenti
export const Skeleton = ({ width, height, borderRadius = '4px', className = '' }) => {
  return (
    <div
      className={`${styles.skeleton} ${className}`}
      style={{ width, height, borderRadius }}
    />
  )
}

// Xidmət kartı skeleton
export const ServiceCardSkeleton = () => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.cardTop}>
        <Skeleton width="60px" height="60px" borderRadius="12px" />
      </div>
      <div className={styles.cardBody}>
        <Skeleton width="70%" height="24px" borderRadius="6px" />
        <div className={styles.textLines}>
          <Skeleton width="100%" height="14px" />
          <Skeleton width="95%" height="14px" />
          <Skeleton width="85%" height="14px" />
        </div>
      </div>
      <div className={styles.cardFooter}>
        <Skeleton width="120px" height="40px" borderRadius="20px" />
      </div>
    </div>
  )
}

// About section skeleton
export const AboutSkeleton = () => {
  return (
    <div className={styles.aboutSkeleton}>
      <Skeleton width="200px" height="40px" borderRadius="20px" className={styles.centered} />
      <div className={styles.spacing}></div>
      <Skeleton width="60%" height="48px" borderRadius="8px" className={styles.centered} />
      <Skeleton width="80%" height="18px" className={styles.centered} />
      <Skeleton width="75%" height="18px" className={styles.centered} />
    </div>
  )
}

// Contact form skeleton
export const ContactFormSkeleton = () => {
  return (
    <div className={styles.formSkeleton}>
      <Skeleton width="100%" height="50px" borderRadius="8px" />
      <Skeleton width="100%" height="50px" borderRadius="8px" />
      <Skeleton width="100%" height="50px" borderRadius="8px" />
      <Skeleton width="100%" height="120px" borderRadius="8px" />
      <Skeleton width="180px" height="48px" borderRadius="10px" />
    </div>
  )
}

// Ümumi Grid Skeleton
export const GridSkeleton = ({ count = 4, CardComponent = ServiceCardSkeleton }) => {
  return (
    <div className={styles.gridSkeleton}>
      {Array.from({ length: count }).map((_, index) => (
        <CardComponent key={index} />
      ))}
    </div>
  )
}

export default Skeleton

