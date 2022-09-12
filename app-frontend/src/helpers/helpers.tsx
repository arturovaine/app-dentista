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

export function TableRow(
  item: any,
  index: number,
  setShowModal: any,
  isOpen: any
  ) {
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
        stateFunction={setShowModal}
        stateToSet={isOpen}
      />    
      </td>
    </tr>
  );
}
