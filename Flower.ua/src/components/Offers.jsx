import React from 'react';

export default function Offers(){
  return (
    <section style={{ padding: '80px 0', backgroundColor: '#3b0a0a' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        <div style={{ flex: 1 }}>
          <h2>Акційні пропозиції</h2>
          <p>Знижки на святкові букети та композиції до сезону. Поспішайте скористатися!</p>
          <button className="btn">Детальніше</button>
        </div>
        <div style={{ flex: 1 }}>
          <img src="/assets/placeholders/offers.jpg" alt="offer" style={{ width: '100%', borderRadius: '12px' }} />
        </div>
      </div>
    </section>
  );
}
