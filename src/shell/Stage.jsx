import React from 'react'

export default function Stage({ children }) {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: '#0a0a0b',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Version badge — top right */}
      <div style={{
        position: 'absolute', top: 24, right: 32,
        fontFamily: 'Inter, sans-serif',
        fontSize: 11, fontWeight: 400,
        color: 'rgba(255,255,255,0.2)',
        letterSpacing: '0.06em',
      }}>Prototype v13</div>

      {/* M hint — bottom center */}
      <div style={{
        position: 'absolute', bottom: 20, left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: 'monospace', fontSize: 11,
        color: 'rgba(255,255,255,0.2)',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.07)',
        padding: '5px 14px', borderRadius: 16,
        pointerEvents: 'none', whiteSpace: 'nowrap',
      }}>⌘ M — annotations</div>

      {children}
    </div>
  )
}
