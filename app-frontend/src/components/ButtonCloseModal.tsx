function ButtonCloseModal({ stateFunction, stateToSet }: any) {
  return (
    <div className='title-close-btn'>
      <button type='button' onClick={()=> {stateFunction(stateToSet)}}>
      &times;
      </button>
    </div>
  )
  };

export default ButtonCloseModal;
