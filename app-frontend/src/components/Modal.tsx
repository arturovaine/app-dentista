import FormPayment from './FormPayment';

function Modal({ stateFunction, stateToSet }: any) {
  return (
    <div className='modal-background'>
      <div className='modal-container'>
        <div className='title-close-btn'>
          <button onClick={() => stateFunction(!stateToSet)}> &times; </button>
        </div>
        <div className='title'></div>
          {/*<h1>Editar pagamento</h1>*/}
        <div className='body'>
          <FormPayment /> 
        </div>
        <div className='footer'>
          <button onClick={() => stateFunction(!stateToSet)}>Cancel</button>
          <button>Continue</button>
        </div>
      </div>      
    </div>
    )
}

export default Modal;
