import React from 'react';

const FormPayment = () => {
  return (
    <div className="form">
      <form className="form-payment">
        <label htmlFor="form-date">
          <input type="hidden" className="form-payment-code" placeholder=""/><br />
          <input type="date" className="form-payment-date" placeholder="0"/><br />
          <input type="text" className="form-treatment" placeholder=""/><br />
          <input type="text" className="form-patient-name" placeholder=""/><br />
          <input type="text" className="form-dentistry-company" placeholder=""/><br />
          <input type="number" className="form-payment-amount" placeholder=""/><br />
          <input type="text" className="form-payment-method" placeholder=""/><br />
          <input type="text" className="form-payment-by-installment" placeholder=""/><br />
          <input type="text" className="form-payment-installment" placeholder=""/><br />
          <input type="text" className="form-payment-total-amount" placeholder=""/><br />
          <button type="submit" className="btn btn-primary">Adicionar pagamento</button>
        </label>
      </form>
      <br />
    </div>
  );
};

export default FormPayment;

// codigo (int)
// data-do-atendimento (YYYY-mm-dd)
// tratamento (dicionario, enum...)
// paciente-nome (string, min/max chars)
// convenio (dicionario, enum...)
// valor-do=pagamento (float)
// metodo-de-pagamento (dicionario, enum...)
// pagamento-parcelado (boolean)
// parcela (int/int)
// total-do-tratamento (float)
