import { useState } from 'react';
import Context from './Context';
import { TableHeader } from '../helpers/helpers';
import ButtonEdit from '../components/ButtonEdit';
import Modal from '../components/Modal';


function Consumer() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Context.Consumer>
      {(context: any) => (
        <span>
          Renderizando o context:
          <br /><br />
          <button
            className="openModalBtn"
            onClick={()=> {setOpenModal(true)}}
          >Open Modal</button>
          { openModal && <Modal closeModal={setOpenModal}/> }
          <br /><br />
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
                    <ButtonEdit />
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
