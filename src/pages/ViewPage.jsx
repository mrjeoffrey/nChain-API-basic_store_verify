import React, {useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const ViewPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [content, setContent] = useState("");
  const txId = searchParams.get("transactionid");
  const apiKey = searchParams.get("apikey");
  
  useEffect(() => {
    if(searchParams.get("transactionid") && searchParams.get("apikey")) handleView()
  }, [searchParams])
  

  const handleView = async () => {
    const txInput = searchParams.get("transactionid") || document.getElementById("txId").value;
    const apiKeyInput = searchParams.get("apikey") || document.getElementById("apiKey").value;
    setSearchParams({ transactionid: txInput, apikey: apiKeyInput });
    try{
      const response = await axios.get(
        `/api/products/api/fe5c1c9901fb094e/api/v1/records/${txInput}/content`,
        {
          headers: {
            "x-api-key": `${apiKey}`,
            "Content-Type": "application/octet-stream",
            "Accept": "text/plain"
          },
        }
      );

      console.log("API Response:", response.data);
      setContent(response.data); // Update the content state with the fetched text data
    } catch(e) {
      console.error("Error fetching data:", e);
    }
  };

  return (
    <div className="p-4">
      {txId && apiKey ? (
        <div className="text-center">
          <p><b>Transaction ID:</b> {txId}</p>
          <p><b>API Key:</b> {apiKey}</p>
          <p className="p-10 mt-10 text-3xl font-semibold bg-gray-400 outline-dotted">{content}</p>
        </div>
      ) : (
        <div>
          <div className="my-5">
            <label className="block text-gray-700">Transaction ID:</label>
            <input id="txId" placeholder="Transaction ID" className="w-full p-2 mb-2 border rounded outline outline-1" />
          </div>
          <div className="my-5">
            <label className="block text-gray-700">Your API Key:</label>
            <input id="apiKey" placeholder="API Key" className="w-full p-2 mb-2 border rounded outline outline-1" />
          </div>
          
          <button
            onClick={handleView}
            className="px-4 py-2 text-white bg-blue-500 rounded"
          >
            View
          </button>
        </div>
      )}
    </div>
  );
};

export default ViewPage;
