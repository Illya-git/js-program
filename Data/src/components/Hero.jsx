import React from 'react';

export default function Hero(){
  return (
    <section style={{ textAlign: 'center', padding: '80px 0', backgroundColor: '#3b0a0a' }}>
      <div className="container">
        <img
          src="/assets/placeholders/hero.jpg"
          alt="hero"
          style={{ width: '100%', borderRadius: '12px', marginBottom: '40px' }}
        />
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Флористика з душею</h1>
        <button className="btn">Замовити букет</button>
      </div>
    </section>
  );
}
