import { useState, useCallback } from 'react'

export const useRipple = () => {
  const [ripples, setRipples] = useState([])

  const addRipple = useCallback((event) => {
    const rippleContainer = event.currentTarget
    const rect = rippleContainer.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = event.clientX - rect.left - size / 2
    const y = event.clientY - rect.top - size / 2

    const newRipple = {
      x,
      y,
      size,
      id: Date.now()
    }

    setRipples(prevRipples => [...prevRipples, newRipple])

    setTimeout(() => {
      setRipples(prevRipples => prevRipples.filter(r => r.id !== newRipple.id))
    }, 600)
  }, [])

  return { ripples, addRipple }
}

