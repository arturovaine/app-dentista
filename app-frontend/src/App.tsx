import React, { FC } from 'react';
import Header from './components/Header';
import MainBody from './components/MainBody';
import FormPayment from './components/FormPayment';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <FormPayment />
      <MainBody />
    </div>
  );
}

export default App;
