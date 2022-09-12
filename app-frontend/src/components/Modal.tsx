import FormPayment from './FormPayment';
import ButtonCloseModal from './ButtonCloseModal';

function Modal({ stateFunction, stateToSet }: any) {
  return (
    <div className='modal-background'>
      <div className='modal-container'>
        <ButtonCloseModal
          className='title-close-btn'
          stateFunction={stateFunction}
          stateToSet={!stateToSet}
        />
        <div className='body'>
          <FormPayment /> 
        </div>
        <div className='footer'>
        </div>
      </div>      
    </div>
    )
}

export default Modal;
