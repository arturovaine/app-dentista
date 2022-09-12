import { useState } from 'react';
import Context from './Context';
import { TableHeader, TableRow } from '../helpers/helpers';
import ButtonEdit from '../components/ButtonEdit';
import Modal from '../components/Modal';


function Consumer() {
  const isOpen = true;
  const [showModal, setShowModal] = useState(!isOpen);

  console.log(Context)

  return (
    <Context.Consumer>
      {(context: any) => (
        <span>
          Renderizando o context:

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
                  <tr key={ index }>
                    <td>{item.appointmentDate} &nbsp; </td>
                    <td>{item.patientLastName} &nbsp; </td>
                    <td>{item.patientFirstName} &nbsp; </td>
                    <td>{item.paymentValue.toFixed(2)} &nbsp; </td>
                    <td>{item.paymentInstallment} &nbsp; </td>
                    <td>{item.paymentFraction} &nbsp; </td>
                    <td>{item.paymentTotalValue.toFixed(2)} &nbsp; </td>
                    <td>
                    <ButtonEdit
                      stateFunction={setShowModal}
                      stateToSet={isOpen}
                    />    
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </span>
      )}
    </Context.Consumer>)
};

export default Consumer;
