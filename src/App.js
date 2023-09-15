import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div>
      <p className='text-white'>Hello World</p>
      <Navbar></Navbar>
      <Hero></Hero>
      <Analytics></Analytics>
      <Newsletter/>
    </div>
  );
}

export default App;