import React from 'react';

function Modal() {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
          <button> X </button>
        <div className='title'></div>
          <h1>Editar pagamento</h1>
        <div className='body'>
          <p>
            Campos do pagamento a editar
          </p>
        </div>
        <div className='footer'>
          <button>Cancel</button>
          <button>Continue</button>
        </div>
      </div>      
    </div>
    )
}

export default Modal;
