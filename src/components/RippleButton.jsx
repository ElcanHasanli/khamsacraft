import React from 'react'
import { useRipple } from '../hooks/useRipple'
import styles from '../css/RippleButton/RippleButton.module.css'

function RippleButton({ children, onClick, className, ...props }) {
  const { ripples, addRipple } = useRipple()

  const handleClick = (e) => {
    addRipple(e)
    if (onClick) onClick(e)
  }

  return (
    <button
      className={`${styles.rippleButton} ${className || ''}`}
      onClick={handleClick}
      {...props}
    >
      {children}
      <div className={styles.rippleContainer}>
        {ripples.map(ripple => (
          <span
            key={ripple.id}
            className={styles.ripple}
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
            }}
          />
        ))}
      </div>
    </button>
  )
}

export default RippleButton

