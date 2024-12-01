import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  // State variables to manage the app's data and behavior
  const [currencies, setCurrencies] = useState([]); // List of available currencies
  const [amount, setAmount] = useState(1); // Amount to convert
  const [fromCurrency, setFromCurrency] = useState('USD'); // Selected "from" currency
  const [toCurrency, setToCurrency] = useState('EUR'); // Selected "to" currency
  const [convertedAmount, setConvertedAmount] = useState(null); // Converted result
  const [loading, setLoading] = useState(false); // Loading state for API call
  const [error, setError] = useState(null); // Error message for API issues

  // Fetch exchange rates and calculate the conversion
  const fetchExchangeRates = async () => {
    setLoading(true); // Show loader during API call
    setError(null); // Clear any previous error
    try {
      const response = await axios.get(
        `https://v6.exchangerate-api.com/v6/45b21c4620c8ead432a86234/latest/${fromCurrency}`
      );
      const rates = response.data.conversion_rates; // Extract rates from API response

      setCurrencies(Object.keys(rates)); // Populate currency options
      setConvertedAmount(amount * rates[toCurrency]); // Calculate converted amount
    } catch {
      setError('Failed to fetch data. Please try again later.'); // Handle error
    } finally {
      setLoading(false); // Stop loader after API call
    }
  };

  // Fetch exchange rates automatically when dependencies change
  useEffect(() => {
    fetchExchangeRates();
  }, [fromCurrency, toCurrency]); // Re-run when `fromCurrency` or `toCurrency` changes

  return (
    <div className="App h-screen flex items-center justify-center bg-gray-100">
      {/* Main Box */}
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Currency Converter</h1>

        {/* Input: Amount */}
        <div className="mb-4">
          <label className="block text-left text-sm font-medium text-gray-700">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Math.max(0, parseFloat(e.target.value) || 0))}
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Input: From Currency */}
        <div className="mb-4">
          <label className="block text-left text-sm font-medium text-gray-700">From Currency</label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-green-500"
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        {/* Input: To Currency */}
        <div className="mb-4">
          <label className="block text-left text-sm font-medium text-gray-700">To Currency</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-green-500"
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        {/* Button: Convert */}
        <button
          onClick={fetchExchangeRates}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600"
          disabled={!currencies.length} // Disable button if currencies not loaded
        >
          Convert
        </button>

        {/* Show Error Message */}
        {error && <p className="mt-4 text-sm text-red-500">{error}</p>}

        {/* Show Conversion Result */}
        {convertedAmount !== null && !loading && !error && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">
              {amount} {fromCurrency} ={" "}
              <span className="text-green-500">{convertedAmount.toFixed(2)}</span>{" "}
              {toCurrency}
            </h2>
          </div>
        )}

        {/* Show Loading Text (instead of Loader component) */}
        {loading && <p className="mt-4 text-sm text-gray-600">Loading...🤖</p>}
      </div>
    </div>
  );
};

export default App;
