import React from 'react';

export default function BoxSection(){
  return (
    <section style={{ backgroundColor: '#2d0909', padding: '80px 0' }}>
      <div className="container" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <img src="/assets/placeholders/box.jpg" alt="box" style={{ width: '100%', borderRadius: '12px' }} />
        </div>
        <div style={{ flex: 1 }}>
          <h2>Композиції та шапкові коробки</h2>
          <p>Унікальні авторські роботи у стильних коробках, які створюють особливу атмосферу.</p>
          <button className="btn">Переглянути</button>
        </div>
      </div>
    </section>
  );
}
