import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  src: string
}

export default function StitchFrame({ src }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.data?.type === 'navigate') {
        navigate(e.data.path)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [navigate])

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100">
      <iframe
        ref={iframeRef}
        src={src}
        style={{
          width: '390px',
          height: '100vh',
          border: 'none',
          display: 'block',
          boxShadow: '0 0 40px rgba(0,0,0,0.15)',
        }}
        title="page"
      />
    </div>
  )
}
