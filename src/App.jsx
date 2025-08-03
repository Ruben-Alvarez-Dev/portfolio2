import React, { useRef } from 'react';
import './App.css'
import Header from './components/layout/Header/Header'
import Main from './components/layout/Main/Main'
import Footer from './components/layout/Footer/Footer'

function App() {
  const mainRef = useRef(null);

  return (
    <div className="app">
      <Header mainRef={mainRef} />
      <Main ref={mainRef} />
      <Footer />
    </div>
  )
}

export default App
