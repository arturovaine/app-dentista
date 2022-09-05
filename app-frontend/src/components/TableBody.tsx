import React from 'react';

const example_data = [
  {
    codigo: 1,
    appointmentDate: "2022-08-30",
    treatmentType: "",
    patientSurname: "",
    patientName: "",
    convenio: "",
    paymentValue: 300.00,
    paymentMethod: "",
    paymentInstallment: "",
    paymentFraction: "",
    paymentTotalValue: 300.00,
  },
  {
    codigo: 2,
    appointmentDate: "2022-08-30",
    treatmentType: "",
    patientSurname: "",
    patientName: "",
    convenio: "",
    paymentValue: 300.00,
    paymentMethod: "",
    paymentInstallment: "",
    paymentFraction: "",
    paymentTotalValue: 300.00,
  }
];

const strData: string = JSON.stringify(example_data);
localStorage.setItem('paymentsData', strData);

let storageTextData: any = localStorage.getItem('paymentsData');
let storageObjData: any = JSON.parse(storageTextData);

const TableBody = () => {
  return (
    <div className="table-body">
      { storageObjData.map((item: any) => {
        return (
        <tr>
          <td>{item.codigo} &nbsp; </td>
          <td>{item.appointmentDate} &nbsp; </td>
          <td>{item.treatmentType} &nbsp; </td>
          <td>{item.paymentValue} &nbsp; </td>
        </tr>
        )
        })
      }
      <p>
          Conteúdo<br /><br />
      </p>
    </div>
  );
};

export default TableBody;
