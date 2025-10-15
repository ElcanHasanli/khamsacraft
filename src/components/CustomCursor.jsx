import React, { useEffect, useState } from 'react'
import styles from '../css/CustomCursor/CustomCursor.module.css'

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorType = (e) => {
      const target = e.target
      const isClickable = target.closest('a, button, input, textarea, select, [role="button"]')
      setIsPointer(!!isClickable)
    }

    const hideCursor = () => setIsHidden(true)
    const showCursor = () => setIsHidden(false)

    document.addEventListener('mousemove', updateCursorPosition)
    document.addEventListener('mouseover', updateCursorType)
    document.addEventListener('mouseleave', hideCursor)
    document.addEventListener('mouseenter', showCursor)

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition)
      document.removeEventListener('mouseover', updateCursorType)
      document.removeEventListener('mouseleave', hideCursor)
      document.removeEventListener('mouseenter', showCursor)
    }
  }, [])

  return (
    <>
      <div
        className={`${styles.cursor} ${isPointer ? styles.cursorPointer : ''} ${isHidden ? styles.cursorHidden : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`${styles.cursorFollower} ${isPointer ? styles.followerPointer : ''} ${isHidden ? styles.cursorHidden : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  )
}

export default CustomCursor

