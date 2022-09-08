export interface IPayment {
  id: number;
  appointmentDate: string;
  treatmentType: string;
  patientLastName: string;
  patientFirstName: string;
  convenio: string;
  paymentValue: number;
  paymentMethod: string;
  paymentInstallment: string;
  paymentFraction: string;
  paymentTotalValue: number;
}

export type PaymentContextType = {
  payments: IPayment[];
  // savePayment: (payment: IPayment) => void;
  // updatePayment: (id: number) => void;
};
