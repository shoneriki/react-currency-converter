import React from 'react';
import CurrencyRow from './CurrencyRow';
import './App.css';

function App() {
  return (
    <>
      <h1>Conversion</h1>
      <CurrencyRow />
      <div className="equals">=</div>
      <CurrencyRow />
    </>
  );
}

export default App;
