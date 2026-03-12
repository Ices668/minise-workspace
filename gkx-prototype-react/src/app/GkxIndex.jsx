import { Link } from 'react-router-dom'

import { GKX_PAGES } from './routes.js'

export function GkxIndex() {
  return (
    <div style={{ padding: 24, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif' }}>
      <h1 style={{ margin: 0, fontSize: 22 }}>GKX Prototype</h1>
      <p style={{ marginTop: 8, marginBottom: 20, color: '#555' }}>
        Pick a page to preview. (1:1 preview uses the original HTML in an iframe.)
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
        {GKX_PAGES.map((p) => (
          <Link
            key={p}
            to={p === 'home.html' ? '/home' : `/gkx/${p.replace(/\.html$/, '')}`}
            style={{
              display: 'block',
              padding: 12,
              border: '1px solid #e5e5e5',
              borderRadius: 10,
              textDecoration: 'none',
              color: '#111',
              background: '#fff',
            }}
          >
            <div style={{ fontWeight: 600, fontSize: 14 }}>{p}</div>
            <div style={{ marginTop: 6, fontSize: 12, color: '#666' }}>/gkx/{p}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
