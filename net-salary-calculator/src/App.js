import React from 'react';
import './assets/css/App.css';
import Header from './components/Header';
import CalculatorPage from './pages/CalculatorPage';

function App() {
  return (
    <main className="app">
      <Header />
      <CalculatorPage />
    </main>
  );
}

export default App;
