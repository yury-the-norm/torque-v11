import React, { useRef, useEffect, useState } from 'react'
import FigmaChart from './FigmaChart.jsx'

/* Measures available width from CSS var and passes to FigmaChart */
export default function ResponsiveChart({ height = 160, labels, data }) {
  const ref = useRef()
  const [w, setW] = useState(354)

  useEffect(() => {
    const update = () => {
      const cssW = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--chart-w')) || 354
      setW(cssW)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div ref={ref} style={{ width:'var(--chart-w, 354px)' }}>
      <FigmaChart data={data} width={w} height={height} labels={labels}/>
    </div>
  )
}
