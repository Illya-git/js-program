import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Offers from './components/Offers';
import BoxSection from './components/BoxSection';
import GiftCards from './components/GiftCards';
import Partners from './components/Partners';
import Footer from './components/Footer';

export default function App(){
  return (
    <>
      <Header />
      <Hero />
      <Catalog />
      <Offers />
      <BoxSection />
      <GiftCards />
      <Partners />
      <Footer />
    </>
  );
}
