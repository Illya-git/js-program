import React from 'react';

export default function Partners(){
  const partners = Array(6).fill(0);
  return (
    <section style={{ padding: '80px 0', backgroundColor: '#2d0909' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Наші постачальники</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {partners.map((_, i) => (
            <div key={i} style={{ padding: '16px' }}>
              <img src={`/assets/placeholders/partner-${i + 1}.jpg`} alt="partner" style={{ width: '100%', borderRadius: '8px' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
