import { useContext, useState } from 'react';
import { TableHeader } from '../helpers/helpers';
import Context from '../context/Context';

const Table = () => {

  const { paymentsData }: any = useContext(Context as any);
  // console.log('payments--->', paymentsData);

  const [payments, setPayments] = useState(paymentsData);
  // console.log('paymentsData--->', paymentsData);

  // const [filteredData, setFilteredData] = useState([]);

  /*const handleChange = ({ target }: any) => {
    setFilteredData(
      filteredData.filter(
        (results: any) => results.paymentMethod.toLowerCase().includes(target.value)
      ),
    );
  };*/

  /*useEffect(() => {
    console.log('console da Table', payments);
    if (payments.length !== 0) {
      setFilteredData(payments);
    }
  }, [payments]);*/

  // console.log('console da Table', payments);

  return (
    <div className="main-table">
      <table>
        <thead>
          { TableHeader() }
        </thead>
        <tbody>
          { /* payments.map((results: any, index: any) => (TableContent(results, index))) */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
