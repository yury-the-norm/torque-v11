import React from 'react'
import { useIsMobile } from '../hooks/useIsMobile.js'

/* Desktop only — on mobile the system status bar shows instead */
export default function StatusBar() {
  const isMobile = useIsMobile()
  if (isMobile) return null

  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0,
      height: 54, zIndex: 100,
      display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
      padding: '0 24px 8px',
      pointerEvents: 'none',
    }}>
      <span style={{ fontFamily:'Inter,sans-serif', fontSize:17, fontWeight:590, color:'#fff' }}>9:41</span>
      <div style={{ display:'flex', alignItems:'center', gap:8 }}>
        {/* Signal bars */}
        <svg width="19" height="12" viewBox="0 0 19 12" fill="white">
          <rect x="0"  y="7" width="3" height="5" rx="1" opacity="1"/>
          <rect x="4"  y="5" width="3" height="7" rx="1" opacity="1"/>
          <rect x="8"  y="3" width="3" height="9" rx="1" opacity="1"/>
          <rect x="12" y="0" width="3" height="12" rx="1" opacity="1"/>
          <rect x="16" y="0" width="3" height="12" rx="1" opacity="0.35"/>
        </svg>
        {/* WiFi */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="white">
          <path d="M8.5 9.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
          <path d="M4.2 6.8a6 6 0 018.6 0" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M1 4a10 10 0 0115 0" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
        </svg>
        {/* Battery */}
        <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
          <rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke="white" strokeOpacity="0.35"/>
          <rect x="2" y="2" width="18" height="9" rx="2" fill="white"/>
          <path d="M23 4.5v4a2 2 0 000-4z" fill="white" fillOpacity="0.4"/>
        </svg>
      </div>
    </div>
  )
}
