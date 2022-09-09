import React from 'react';

function Modal({ closeModal }: any) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
          <button onClick={() => closeModal(false)}> X </button>
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
