import React from 'react'
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Img,
  staticFile,
} from 'remotion'

interface ScreenSlideProps {
  imageSrc: string
  title: string
  description: string
}

export const ScreenSlide: React.FC<ScreenSlideProps> = ({
  imageSrc,
  title,
  description,
}) => {
  const frame = useCurrentFrame()
  const { fps, durationInFrames } = useVideoConfig()

  // Fade in
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  })

  // Fade out
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames],
    [1, 0],
    { extrapolateLeft: 'clamp' }
  )

  // Subtle zoom in
  const scale = spring({
    frame,
    fps,
    config: { damping: 80, stiffness: 50, mass: 1 },
    from: 1.04,
    to: 1,
  })

  // Title slide up
  const titleY = spring({
    frame,
    fps,
    config: { damping: 60, stiffness: 80 },
    from: 30,
    to: 0,
  })

  const finalOpacity = Math.min(opacity, fadeOut)

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        opacity: finalOpacity,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Phone frame */}
      <div
        style={{
          transform: `scale(${scale})`,
          position: 'relative',
          width: 390,
          height: 844,
          borderRadius: 44,
          overflow: 'hidden',
          boxShadow:
            '0 0 0 12px #1e293b, 0 0 0 14px #334155, 0 40px 80px rgba(0,0,0,0.6)',
        }}
      >
        <Img
          src={staticFile(imageSrc)}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Bottom label */}
      <div
        style={{
          position: 'absolute',
          bottom: 60,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transform: `translateY(${titleY}px)`,
        }}
      >
        <div
          style={{
            background: 'rgba(39,97,231,0.15)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(39,97,231,0.3)',
            borderRadius: 16,
            padding: '14px 32px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: '#fff',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: -0.5,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 16,
              color: 'rgba(255,255,255,0.6)',
              fontFamily: 'Inter, sans-serif',
              marginTop: 6,
            }}
          >
            {description}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  )
}
