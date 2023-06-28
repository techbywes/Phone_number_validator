import React, { useEffect, useState } from "react";
import axios from "axios";

function Iban() {
  const [iban, setIban] = useState("");
  const [data1, setData1] = useState("");

  const fetchIBANData = async () => {
    const URL = "https://api.api-ninjas.com/v1/iban?iban=" + iban;
    const API_KEY = "Zraj/MIeUXiv0teG+pWCgA==vX0cqtoPIASbm9cg";

    try {
      const response = await axios.get(URL, {
        headers: { "X-Api-Key": API_KEY },
        contentType: "application/json",
      });
      setData1(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error: ", error.response.data);
    }
  };

  const handleButtonClick = () => {
    fetchIBANData();
  };

  return (
    <div>
      
      <input
        type="text"
        placeholder="ex.. DE16200700000532013000"
        onChange={event => setIban(event.target.value)}
      />
      <button onClick={handleButtonClick}>Fetch IBAN Data</button>

      <h4>IBAN: {data1?.iban}</h4>
      <h4>Bank Name: {data1?.bank_name}</h4>
      <h4>ACCOUNT NUMBER: {data1?.account_number}</h4>
      <h4>BANK CODE: {data1?.bank_code}</h4>
      <h4>COUNTRY: {data1?.country}</h4>
      <h4>CHECK SUM: {data1?.checksum}</h4>
      <h4>VALID: {data1?.valid}</h4>
      <h4>BBAN: {data1?.bban}</h4>
    </div>
  );
}

export default Iban;
