import FormPayment from './FormPayment';

function Modal({ handleModal }: any) {
  return (
    <div className='modal-background'>
      <div className='modal-container'>
        <div className='title-close-btn'>
          <button onClick={() => handleModal(false)}> &times; </button>
        </div>
        <div className='title'></div>
          {/*<h1>Editar pagamento</h1>*/}
        <div className='body'>
          <FormPayment /> 
        </div>
        <div className='footer'>
          <button onClick={() => handleModal(false)}>Cancel</button>
          <button>Continue</button>
        </div>
      </div>      
    </div>
    )
}

export default Modal;
