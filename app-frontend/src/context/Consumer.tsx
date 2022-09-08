import Context from './Context';
import Table from '../components/Table';

const Consumer = () => (
  <Context.Consumer>
    {(context: any) => (
      <span>
        Renderizando o context:
        <br /><br />
        {' '}
        {
          JSON.stringify(context)
        }
        <Table />
      </span>
    )}
  </Context.Consumer>
);

export default Consumer;
