import React from "react";
import { useNavigate } from "react-router-dom";

const TransactionsTable = ({ transactions }) => {
  const navigate = useNavigate();

  return (
    <table className="w-full mt-4 border-collapse">
      <thead>
        <tr>
          <th className="border-b p-2 text-left">Transaction ID</th>
          <th className="border-b p-2 text-left">API Key</th>
          <th className="border-b p-2"></th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td className="border-b p-2">{transaction.id}</td>
            <td className="border-b p-2">{transaction.apiKey}</td>
            <td className="border-b p-2">
              <button
                onClick={() =>
                  navigate(`/view?transactionid=${transaction.id}&apikey=${transaction.apiKey}`)
                }
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsTable;
