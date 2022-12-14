import { FC, useState } from 'react';
// import FilterPayments from './components/FilterPayments';
import Header from './components/Header';
// import MainBody from './components/MainBody';
// import FormPayment from './components/FormPayment';
// import Provider from './context/Provider';
import './App.css';
import Context from './context/Context';
import Consumer from './context/Consumer';
// import data from './data/data';
import setDataToLocalStorage from './data/data2localStorage';

const App: FC = () => {
  return (
    <div className="App">
      <Context.Provider value={ setDataToLocalStorage() }>
        <Header />
        <Consumer />
      </Context.Provider>
    </div>
  );
}

export default App;

/*
<Header />
        <FormPayment />
        <FilterPayments />
        <MainBody />
*/
