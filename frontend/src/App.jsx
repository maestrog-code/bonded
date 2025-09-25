import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function App(){
  return (
    <div>
      <header style={{ background: 'var(--primary-color)', padding: '16px 32px', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: 'var(--box-shadow)' }}>
        <h1 style={{ fontSize: 28, margin: 0 }}>💞 Bonded</h1>
        <nav style={{ display: 'flex', gap: 16 }}>
          <Link to='/' style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>Dashboard</Link>
          <Link to='/status' style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>Status Checker</Link>
        </nav>
      </header>
      <main style={{ padding: 32 }}>
        <Outlet />
      </main>
    </div>
  )
}
