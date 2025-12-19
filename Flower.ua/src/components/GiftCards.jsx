import React from 'react';

export default function GiftCards(){
  const cards = [
    { title: 'ВЕСНА', price: '1000₴' },
    { title: 'РАДІСТЬ', price: '3000₴' },
    { title: 'ЛЮБОВ', price: '5000₴' },
  ];
  return (
    <section style={{ padding: '80px 0', backgroundColor: '#3b0a0a', textAlign: 'center' }}>
      <div className="container">
        <h2>Подарункові сертифікати</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '40px' }}>
          {cards.map((c, i) => (
            <div key={i} className="card" style={{ padding: '20px', background: '#4b0d0d' }}>
              <img src={`/assets/placeholders/gift-${i + 1}.jpg`} alt={c.title} style={{ width: '100%', borderRadius: '12px' }} />
              <h3 style={{ marginTop: '16px' }}>{c.title}</h3>
              <p>{c.price}</p>
              <button className="btn">Купити</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
