import React from 'react'; //

export function TableHeader() {
  return (
    <tr>
      {/*<th>Código</th>*/}
      <th>Data Atendimento</th>
      <th>Nome</th>
      <th>Sobrenome</th>
      <th>Valor pgto.</th>
      <th>Pagamento parcelado</th>
      <th>Parcela</th>
      <th>Total</th>
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
    </tr>
  );
}
