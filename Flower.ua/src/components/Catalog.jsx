import React from 'react';

export default function Catalog(){
  const items = Array(6).fill(0);
  return (
    <section style={{ backgroundColor: '#2d0909', padding: '60px 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Каталог послуг</h2>
        <div className="grid">
          {items.map((_, i) => (
            <div key={i} className="card">
              <img src={`/assets/placeholders/catalog-${i + 1}.jpg`} alt="catalog" className="card-img" />
              <div className="card-body">
                <h3>Букет #{i + 1}</h3>
                <p>Авторська композиція з натуральних квітів.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
