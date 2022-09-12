import { useState } from 'react';
import Context from './Context';
import { TableHeader, TableRow } from '../helpers/helpers';
import Modal from '../components/Modal';


function Consumer() {
  const isOpen = true;
  const [showModal, setShowModal] = useState(!isOpen);

  return (
    <Context.Consumer>
      {(context: any) => (
        <span>
          <h2>Total: R$ { context.reduce(
            (prevVal: any, curVal: any) => prevVal + curVal.paymentTotalValue,
             0,
            ).toFixed(2)
          }</h2>

          {
            showModal
            &&
            <Modal stateFunction={setShowModal} stateToSet={isOpen} />
          }

          <table>
            <thead>
              { TableHeader() }
            </thead>
            <tbody>
              {
                context.map((item: any, index: number) => (
                  <TableRow
                  item={item}
                  index={index}
                  setShowModal={setShowModal}
                  isOpen={isOpen}
                  />
                ))
              }
            </tbody>
          </table>
        </span>
      )}
    </Context.Consumer>)
};

export default Consumer;
