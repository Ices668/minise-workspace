import React from 'react'
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion'
import { ScreenSlide } from './ScreenSlide'
import screensData from '../screens.json'

const TRANSITION_FRAMES = 20

export const WalkthroughComposition: React.FC = () => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  // Calculate cumulative frame offsets
  const offsets: number[] = []
  let acc = 0
  for (const s of screensData.screens) {
    offsets.push(acc)
    acc += s.duration
  }

  // Find current screen index
  let currentIdx = 0
  for (let i = offsets.length - 1; i >= 0; i--) {
    if (frame >= offsets[i]) {
      currentIdx = i
      break
    }
  }

  const screen = screensData.screens[currentIdx]
  const localFrame = frame - offsets[currentIdx]

  return (
    <AbsoluteFill style={{ background: '#0f172a' }}>
      {/* Render only current screen (+ transition overlap) */}
      {screensData.screens.map((s, i) => {
        const start = offsets[i]
        const end = start + s.duration
        if (frame < start - TRANSITION_FRAMES || frame > end + TRANSITION_FRAMES) return null
        return (
          <ScreenSlide
            key={s.id}
            imageSrc={`assets/screens/${s.file}`}
            title={s.title}
            description={s.description}
          />
        )
      })}

      {/* Top progress bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: 'rgba(255,255,255,0.1)',
        }}
      >
        <div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #2761e7, #60a5fa)',
            width: `${((frame + 1) / acc) * 100}%`,
          }}
        />
      </div>

      {/* Step indicator dots */}
      <div
        style={{
          position: 'absolute',
          top: 20,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          gap: 8,
        }}
      >
        {screensData.screens.map((s, i) => (
          <div
            key={s.id}
            style={{
              width: i === currentIdx ? 24 : 8,
              height: 8,
              borderRadius: 4,
              background: i === currentIdx ? '#2761e7' : 'rgba(255,255,255,0.25)',
              transition: 'width 0.3s',
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  )
}
