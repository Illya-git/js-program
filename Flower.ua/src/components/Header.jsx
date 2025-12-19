import React from 'react';

export default function Header() {
  return (
    <header style={{ background: '#2d0909', padding: '20px 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ letterSpacing: '2px' }}>КВІТИ</h2>
        <nav style={{ display: 'flex', gap: '24px' }}>
          <a href="#" className="nav-link">Головна</a>
          <a href="#" className="nav-link">Каталог</a>
          <a href="#" className="nav-link">Акції</a>
          <a href="#" className="nav-link">Контакти</a>
        </nav>
      </div>
    </header>
  );
}
