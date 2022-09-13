import ButtonEdit from '../components/ButtonEdit';

export function TableHeader() {
  return (
    <tr>
      {/*<th>Código</th>*/}
      <th>Data Atendimento</th>
      <th>Sobrenome</th>
      <th>Nome</th>
      <th>Pagamento (R$)</th>
      <th>Parcelamento</th>
      <th>Parcela</th>
      <th>Total</th>
      <th>Editar</th>
    </tr>
  );
}

export function TableContent(item: any, index: number) {
  return (
    <tr key={ index }>
      {/*<td>{item.id} &nbsp; </td>*/}
      <td>{item.appointmentDate} &nbsp; </td>
      <td>{item.patientLastName} &nbsp; </td>
      <td>{item.patientFirstName} &nbsp; </td>
      <td>{item.paymentValue.toFixed(2)} &nbsp; </td>
      <td>{item.paymentInstallment} &nbsp; </td>
      <td>{item.paymentFraction} &nbsp; </td>
      <td>{item.paymentTotalValue.toFixed(2)} &nbsp; </td>
      <td><button>Botão</button></td>
    </tr>
  );
}

export function TableRow({ item, index, setShowModal, isOpen }: any) {
  return (
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
        stateFunction={ setShowModal }
        stateToSet={ isOpen }
        itemToSet={ item }
      />    
      </td>
    </tr>
  );
}

export function CounterPayments({ context, startDate, endDate }: any) {
  return (
    <div>
      <h3>Total faturado no período: </h3>
      <h2>R$ {
            context
            .filter(
              (item: any)=>(
                Date.parse(item.appointmentDate) >= Date.parse(startDate)
                && Date.parse(item.appointmentDate) <= Date.parse(endDate)))
            .reduce(
            (prevVal: any, curVal: any) => prevVal + curVal.paymentTotalValue,
             0,
            ).toFixed(2)
        }
      </h2>
    </div>        
  );
}

export function FilterPaymentsByDates({ setStartDate, setEndDate }: any) {
  return (
    <div>
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
          &nbsp;&nbsp;
          Fim: &nbsp;&nbsp;
          <input
            type='date'
            id='endDateFilter'
            onChange={({ target }) => {
            setEndDate(target.value);
              /*console.log(target.value);*/
            }}
          />
        <br />
  </div>
  )
}
