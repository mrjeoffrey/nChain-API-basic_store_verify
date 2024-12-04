import React from "react";
import { Link, useNavigate } from "react-router-dom";

const TransactionsTable = ({ transactions }) => {
  if (transactions.length === 0) {
    return <p className="mt-4 text-gray-500">No transactions available.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full mt-4 border-collapse">
        <thead>
          <tr>
            <th className="p-2 text-left border-b">Transaction ID</th>
            <th className="p-2 text-left border-b">API Key</th>
            <th className="p-2 text-left border-b">Original Data</th>
            <th className="p-2 border-b"></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={transaction.id || index}>
              <td className="p-2 border-b">{transaction.id}</td>
              <td className="p-2 border-b">
                {transaction.apiKey.slice(0, 4)}...{transaction.apiKey.slice(-4)}
              </td>
              <td className="p-2 border-b">{transaction.originalData}</td>
              <td className="p-2 border-b">
                <Link to={`/view?transactionid=${transaction.id}&original=${transaction.originalData}&apikey=${transaction.apiKey}`} className="px-4 py-2 text-white transition bg-blue-500 rounded hover:bg-blue-600"
                >
                  View</Link>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
