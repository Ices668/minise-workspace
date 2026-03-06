import React from 'react'
import { Composition } from 'remotion'
import { WalkthroughComposition } from './WalkthroughComposition'
import screensData from '../screens.json'

// Total frames = sum of all screen durations
const totalFrames = screensData.screens.reduce((sum, s) => sum + s.duration, 0)

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Walkthrough"
        component={WalkthroughComposition}
        durationInFrames={totalFrames}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  )
}
