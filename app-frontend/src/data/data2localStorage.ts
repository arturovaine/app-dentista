import data from './data';

export default function setDataToLocalStorage() {
  const strData: string = JSON.stringify(data);
  localStorage.setItem('paymentsData', strData);

  let storageTextData: any = localStorage.getItem('paymentsData');
  let storageObjData: any = JSON.parse(storageTextData);
  let paymentsData = storageObjData;
  console.log('Console DataTableContext:', paymentsData);

  return paymentsData;
}
