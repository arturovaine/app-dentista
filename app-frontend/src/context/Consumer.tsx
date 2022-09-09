import Context from './Context';
import { TableHeader } from '../helpers/helpers';
import ButtonEdit from '../components/ButtonEdit';

const Consumer = () => (
  <Context.Consumer>
    {(context: any) => (
      <span>
        Renderizando o context:
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
  </Context.Consumer>
);

export default Consumer;
