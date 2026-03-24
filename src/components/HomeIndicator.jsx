import React from 'react'
import { useIsMobile } from '../hooks/useIsMobile.js'

export default function HomeIndicator() {
  const isMobile = useIsMobile()

  if (isMobile) {
    // On mobile: use real safe area padding, no visual pill (system draws it)
    return (
      <div style={{
        height: 'env(safe-area-inset-bottom, 0px)',
        background: 'transparent',
        flexShrink: 0,
      }}/>
    )
  }

  // Desktop: Figma pill 144×5px in 34px container
  return (
    <div style={{
      height: 34, display:'flex',
      alignItems:'center', justifyContent:'center',
      flexShrink: 0,
    }}>
      <div style={{
        width: 144, height: 5, borderRadius: 100,
        background: 'rgba(255,255,255,0.3)',
      }}/>
    </div>
  )
}
