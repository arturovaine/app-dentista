import React from 'react';

function Modal({ closeModal }: any) {
  return (
    <div className='modal-background'>
      <div className='modal-container'>
        <div className='title-close-btn'>
          <button onClick={() => closeModal(false)}> &times; </button>
        </div>
        <div className='title'></div>
          <h1>Editar pagamento</h1>
        <div className='body'>
          <p>
            Campos do pagamento a editar
          </p>
        </div>
        <div className='footer'>
          <button onClick={() => closeModal(false)}>Cancel</button>
          <button>Continue</button>
        </div>
      </div>      
    </div>
    )
}

export default Modal;
