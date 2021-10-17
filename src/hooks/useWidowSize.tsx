import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [height, setHeight] = useState(window.innerHeight || 0)
  const [width, setWidth] = useState(window.innerWidth || 0)

  const handleResize = () => {
    setHeight(window.innerHeight || 0)
    setWidth(window.innerWidth || 0)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    height,
    width,
  }
}
