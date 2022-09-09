import Context from './Context';
import Table from '../components/Table';

const Consumer = () => (
  <Context.Consumer>
    {(context: any) => (
      <span>
        Renderizando o context:
        <br /><br />
        {' '}
        {/*
          JSON.stringify(context)*/
        }
        <Table />
        { /* payments.map((results: any, index: any) => (TableContent(results, index))) */}
        <tbody>
          {
          context.map((item: any, index: number) => (
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
          ))
        }
        </tbody>
      </span>
    )}
  </Context.Consumer>
);

export default Consumer;
