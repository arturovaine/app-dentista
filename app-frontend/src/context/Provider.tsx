import PropTypes from 'prop-types';
import { useState } from 'react';
// import * as React from 'react';
// import { PaymentContextType, IPayment } from '../@types/payment';
import data from '../data/data';
import Context from './Context';

// const [payments, setPayments] = useState<IPayment[] | any>();
// Local Storage
const strData: string = JSON.stringify(data);
localStorage.setItem('paymentsData', strData);

let storageTextData: any = localStorage.getItem('paymentsData');
let storageObjData: any = JSON.parse(storageTextData);
let paymentsData = storageObjData;
console.log('Console DataTableContext:', paymentsData);

function Provider({ children }: any){

  const [payments, setPayments] = useState([]);
  setPayments(paymentsData);
  console.log(payments);
  
  // Context
  // const PaymentsContext: any = createContext(paymentsData);
  // const TableContext = { paymentsData };

  return (
    <Context.Provider value={ 1000 } >
      { children }
    </Context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Refs
// https://stackoverflow.com/questions/59106742/typescript-error-property-children-does-not-exist-on-type-reactnode
// https://blog.logrocket.com/how-to-use-react-context-typescript/
