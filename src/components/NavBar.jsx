import React from 'react'
import { motion } from 'framer-motion'
import { useIsMobile } from '../hooks/useIsMobile.js'
import iconJournal       from '../assets/icons/icon-journal.svg'
import iconKnowledge     from '../assets/icons/icon-knowledge.svg'
import iconNotifications from '../assets/icons/icon-notifications.svg'
import iconProfile       from '../assets/icons/icon-profile.svg'
import nfcIcon           from '../assets/bottom_menu_icon.png'

/*
 Desktop: Figma exact — 402×90, absolute pixel positions
 Mobile:  flex row, tabs fill viewport width, FAB centred via flex
*/

const TABS = [
  { id:'journal',       label:'Journal',       icon:iconJournal       },
  { id:'knowledge',     label:'Knowledge',     icon:iconKnowledge     },
  { id:'notifications', label:'Notifications', icon:iconNotifications },
  { id:'profile',       label:'Profile',       icon:iconProfile       },
]

function TabCell({ tab, active, onClick }) {
  const color = active ? '#F04E23' : 'rgba(255,255,255,0.45)'
  return (
    <motion.button onClick={onClick} whileTap={{ scale:0.85 }}
      style={{
        flex: 1, height: 56, minWidth: 0,
        display:'flex', flexDirection:'column',
        alignItems:'center', justifyContent:'center',
        gap: 4, background:'none', border:'none', cursor:'pointer', padding:0,
      }}>
      <img src={tab.icon} alt={tab.label} style={{
        width:24, height:24,
        filter: active
          ? 'invert(42%) sepia(97%) saturate(1300%) hue-rotate(340deg) brightness(105%)'
          : 'invert(1) brightness(0.45)',
        transition:'filter 0.15s', display:'block',
      }}/>
      <span style={{
        fontFamily:'Inter,sans-serif', fontSize:11, fontWeight:400,
        color, lineHeight:'14px', whiteSpace:'nowrap',
        transition:'color 0.15s',
      }}>{tab.label}</span>
    </motion.button>
  )
}

function FABButton({ onClick }) {
  return (
    <motion.button onClick={onClick} whileTap={{ scale:0.88 }}
      style={{
        width:64, height:64, borderRadius:16,
        background:'rgba(255,255,255,0.10)',
        border:'none', flexShrink:0,
        display:'flex', alignItems:'center', justifyContent:'center',
        cursor:'pointer', boxShadow:'none', outline:'none',
      }}>
      <img src={nfcIcon} alt="NFC" style={{ width:36, height:36, opacity:0.9, display:'block' }}/>
    </motion.button>
  )
}

export default function NavBar({ active = 'journal', onChange }) {
  const isMobile = useIsMobile()

  if (isMobile) {
    /* ── Mobile: flex row, full width, FAB floats up ── */
    return (
      <div style={{
        position:'absolute', bottom:0, left:0, right:0,
        background:'#1C1D21',
        borderTop:'1px solid rgba(255,255,255,0.06)',
        display:'flex', flexDirection:'column',
        paddingBottom:'env(safe-area-inset-bottom, 0px)',
      }}>
        <div style={{
          position:'relative', height:56,
          display:'flex', alignItems:'center',
        }}>
          {/* Left two tabs */}
          <TabCell tab={TABS[0]} active={active===TABS[0].id} onClick={() => onChange?.(TABS[0].id)}/>
          <TabCell tab={TABS[1]} active={active===TABS[1].id} onClick={() => onChange?.(TABS[1].id)}/>

          {/* Centre gap for FAB */}
          <div style={{ width:80, flexShrink:0 }}/>

          {/* Right two tabs */}
          <TabCell tab={TABS[2]} active={active===TABS[2].id} onClick={() => onChange?.(TABS[2].id)}/>
          <TabCell tab={TABS[3]} active={active===TABS[3].id} onClick={() => onChange?.(TABS[3].id)}/>

          {/* FAB — floats above nav */}
          <div style={{
            position:'absolute', left:'50%',
            transform:'translateX(-50%)',
            top:-16, zIndex:10,
          }}>
            <FABButton onClick={() => onChange?.('nfc')}/>
          </div>
        </div>
      </div>
    )
  }

  /* ── Desktop: exact Figma pixel positions ── */
  return (
    <div style={{
      position:'absolute', bottom:0, left:0,
      width:402, height:90, background:'#1C1D21',
      display:'flex', flexDirection:'column',
    }}>
      {/* Nav row: 402×56 */}
      <div style={{ position:'relative', width:402, height:56 }}>
        {[
          { ...TABS[0], x:0   },
          { ...TABS[1], x:81  },
          { ...TABS[2], x:249 },
          { ...TABS[3], x:330 },
        ].map(tab => {
          const isActive = active === tab.id
          return (
            <motion.button key={tab.id} onClick={() => onChange?.(tab.id)}
              whileTap={{ scale:0.84 }}
              style={{
                position:'absolute', left:tab.x, top:0,
                width:73, height:56,
                display:'flex', flexDirection:'column',
                alignItems:'center', justifyContent:'center',
                gap:4, background:'none', border:'none', cursor:'pointer', padding:0,
              }}>
              <img src={tab.icon} alt={tab.label} style={{
                width:24, height:24,
                filter: isActive
                  ? 'invert(42%) sepia(97%) saturate(1300%) hue-rotate(340deg) brightness(105%)'
                  : 'invert(1) brightness(0.45)',
                transition:'filter 0.15s', display:'block',
              }}/>
              <span style={{
                fontFamily:'Inter,sans-serif', fontSize:12, fontWeight:400,
                color: isActive ? '#F04E23' : 'rgba(255,255,255,0.45)',
                lineHeight:'16px', whiteSpace:'nowrap',
                transition:'color 0.15s',
              }}>{tab.label}</span>
            </motion.button>
          )
        })}

        {/* FAB: left=169 top=-16 */}
        <motion.button onClick={() => onChange?.('nfc')} whileTap={{ scale:0.88 }}
          style={{
            position:'absolute', left:169, top:-16,
            width:64, height:64, borderRadius:16,
            background:'rgba(255,255,255,0.10)',
            border:'none', display:'flex', alignItems:'center',
            justifyContent:'center', cursor:'pointer', zIndex:10,
          }}>
          <img src={nfcIcon} alt="NFC" style={{ width:36, height:36, opacity:0.9, display:'block' }}/>
        </motion.button>
      </div>

      {/* Home indicator */}
      <div style={{ height:34, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <div style={{ width:144, height:5, borderRadius:100, background:'rgba(255,255,255,0.3)' }}/>
      </div>
    </div>
  )
}
