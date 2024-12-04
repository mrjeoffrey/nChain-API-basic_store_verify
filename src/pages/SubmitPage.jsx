import React, { useState } from "react";
import axios from "axios";
import TransactionsTable from "../components/TransactionsTable";

const SubmitPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [textData, setTextData] = useState("");
  const [apiKey, setApiKey] = useState("0fd30c69e8b48b58c23ead14d26380e5c105cbbe");

  const handleSubmit = async () => {
    if (!apiKey || !textData) {
      alert("Please provide both API key and text data.");
      return;
    }

    try {
      const response = await axios.post(
        `/api/products/api/fe5c1c9901fb094e/api/v1/records?encode=SHA256(01-02T13.14.15)|Base64`,
        textData,
        {
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/octet-stream",
          },
        }
      );

      setTransactions([
        ...transactions,
        {
          id: response.data.txId,
          apiKey,
          originalData: textData,
        },
      ]);

      setTextData("");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to submit data. Please check your API key or network.");
    }
  };

  return (
    <div className="p-4">
      <div className="mt-4">
        <label className="block text-gray-700">Your API Key:</label>
        <input
          type="text"
          id="apiKey"
          placeholder="Enter your API key"
          className="w-full p-2 mb-4 border rounded outline outline-1"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
        
        <label className="block text-gray-700">Text Data:</label>
        <textarea
          value={textData}
          onChange={(e) => setTextData(e.target.value)}
          placeholder="Enter text data to submit"
          className="w-full p-2 mb-4 border rounded outline outline-1"
          rows="4"
        ></textarea>

        <button
          onClick={handleSubmit}
          className="px-4 py-2 mt-2 text-white bg-blue-500 rounded"
        >
          Submit
        </button>
      </div>
      <TransactionsTable transactions={transactions} />
    </div>
  );
};

export default SubmitPage;
