export function GkxHtml({ page }) {
  // We keep the original HTML in /public/gkx/*.html and render it inside an iframe.
  // This is the only truly safe way to guarantee 1:1 rendering while we progressively
  // convert each page into TSX.
  return (
    <iframe
      title={page}
      src={`/gkx/${page}`}
      style={{
        width: '100%',
        height: '100vh',
        border: 0,
        display: 'block',
        background: '#fff',
      }}
    />
  )
}
