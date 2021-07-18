import React, { useEffect, useState } from 'react';
import CurrencyRow from './CurrencyRow';
import './App.css';

const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=bc0919d0fe715975194bd05d539adc6b'

// api key attachment: ?access_key=bc0919d0fe715975194bd05d539adc6b

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  console.log(currencyOptions)

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      })
  }, [])

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow
        currencyOptions={currencyOptions}
      />
      <div className="equals">=</div>
      <CurrencyRow
        currencyOptions={currencyOptions}
      />
    </>
  );
}

export default App;
