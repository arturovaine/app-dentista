import { useState } from 'react';

const FilterPayment = () => {
  const [methodPayment, setMethodFilter] = useState('cartaoCredito');

  return (
    <div className="form">
    <form className="form-payment">
      Filtrar pagamentos: <br /><br />
      <input type="date" className="form-payment-date" placeholder="0"/><br />
      <input type="date" className="form-payment-date" placeholder="0"/><br />
      <input type="text" className="form-payment-installment" placeholder="Parcelado"/><br />
      <input type="text" className="form-payment-total-amount" placeholder="300.00"/><br />
      <select
        name="column-filter"
        id="column-filter"
        data-testid="column-filter"
        onChange={ (event) => setMethodFilter(event.target.value) }
      >
        <option value="cartaoCredito">Cartão de crédito</option>
        <option value="cartaoDebito">Cartão de débito</option>
      </select><br />
      <button type="submit" className="btn btn-primary">Filtrar pagamentos</button>
    </form>
    <br />
    </div>
  );
};

export default FilterPayment;
