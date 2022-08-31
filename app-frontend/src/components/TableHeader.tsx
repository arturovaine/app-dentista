import React from 'react';

const TableHeader = () => {
  return (
    <div className="table-header">
      <th>Código</th>
      <th>Data Atendimento</th>
      <th>Tratamento</th>
      <th>Paciente</th>
      <th>Convênio</th>
      <th>Valor do pagamento</th>
      <th>Método do pagamento</th>
      <th>Pagamento parcelado</th>
      <th>Parcela</th>
      <th>Total</th>
    </div>
  );
};

export default TableHeader;

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
