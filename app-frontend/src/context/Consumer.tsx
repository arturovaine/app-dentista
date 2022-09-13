import { useContext, useState, useEffect } from 'react';
import Context from './Context';
import { TableHeader, TableRow } from '../helpers/helpers';
import Modal from '../components/Modal';


function Consumer() {
  const isOpen = true;
  const [showModal, setShowModal] = useState(!isOpen);
  const context = useContext(Context);
  const [data, setData]: any = useState(context);
  const [startDate, setStartDate]: any = useState(Date.now());
  const [endDate, setEndDate]: any = useState(Date.now());

  useEffect(() => { if (data.length !== 0) {
    console.log('useEffect');
    console.log('startDate:', Date.parse(startDate), 'sem parse:', startDate);
    console.log('endDate:', Date.parse(endDate), 'sem parse:', endDate);
    setData(data);
  } }, [data, startDate, endDate]);

  return (
    <Context.Consumer>
      {(context: any) => (
        <span>
          <br />
          Início: &nbsp;&nbsp;
          <input
            type='date'
            id='startDateFilter'
            onChange={({ target }) => {
              setStartDate(target.value);
              /*console.log(target.value);*/
            }}
          />
          <br /><br />
          Final: &nbsp;&nbsp;
          <input
            type='date'
            id='endDateFilter'
            onChange={({ target }) => {
              setEndDate(target.value);
              /*console.log(target.value);*/
            }}
          />
          <br />
          <h2>Total: R$ {
            context
            .filter(
              (item: any)=>(
                Date.parse(item.appointmentDate) >= Date.parse(startDate)
                && Date.parse(item.appointmentDate) <= Date.parse(endDate)))
            .reduce(
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
