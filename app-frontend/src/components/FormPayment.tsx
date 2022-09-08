// import React from 'react';

const FormPayment = () => {
  return (
    <div className="form">
      <form className="form-payment">
        Inserir pagamento: <br />
        <label htmlFor="form-date">
          <input type="hidden" className="form-payment-code" placeholder=""/><br />
          <input type="date" className="form-payment-date" placeholder="0"/><br />
          <input type="text" className="form-patient-name" placeholder="Sobrenome do paciente"/><br />
          <input type="text" className="form-patient-name" placeholder="Nome do paciente"/><br />
          <input type="number" className="form-payment-amount" placeholder="Valor total a receber"/><br />
          <select
            name=""
            id=""
            data-testid=""
          >
            <option value="">Parcelamento / À vista</option>
            <option value="parcelado">Parcelado</option>
            <option value="avista">À vista</option>
          </select><br />
          <input type="text" className="form-payment-method" placeholder="Método de pagamento"/><br />
          <select
            name=""
            id=""
            data-testid=""
          >
            <option value="null">Método de pagamento</option>
            <option value="cartaoCredito">Cartão de crédito</option>
            <option value="cartaoDebito">Cartão de débito</option>
          </select><br />
          <input type="text" className="form-payment-total-amount" placeholder="300.00"/><br />
          <button type="submit" className="btn btn-primary">Adicionar pagamento</button>
        </label>
      </form>
      <br />
    </div>
  );
};

export default FormPayment;
