import Context from './Context';

// const Context: any = createContext(null);

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
      </span>
    )}
  </Context.Consumer>
);

export default Consumer;
