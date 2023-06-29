import React, { useEffect, useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function ValidatePhoneNo() {
  const [number, setNumber] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateNumber = async () => {
    try {
      setIsLoading(true);
      const apiKey = "Zraj/MIeUXiv0teG+pWCgA==vX0cqtoPIASbm9cg"; 
      const url = `https://api.api-ninjas.com/v1/validatephone?number=${encodeURIComponent(number)}`;
      const headers = {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      };
      const response = await axios.get(url, { headers });
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }finally {
      setIsLoading(false); 
    }
  };

  const handleValidate = () => {
    validateNumber();
  };

  return (
    <div className="general_container">
      <h1 className="title header">Phone Validator.</h1>
      <p className="para_text">
        "Free Phone Validator: Ultimate Tool for Accurate Numbers. Boost Your Success Today!"
      </p>
      <p className="para_text2">TRUSTED BY THE BEST SEO MARKETERS!</p>
      <div className="input_submit_btn_div">
        <label >
          <PhoneInput
          className="input_class form-control "
            country={'us'}
            value={number}
            onChange={setNumber}
          />
        </label>
        <br />
        <button className="Validate_btn header2" onClick={handleValidate}>
          Validate Number
        </button>
      </div>
      {isLoading ? (
        <p className="loading_message">Loading...</p> // Display a loading message or spinner while loading
      ) : (
        data && (
          <div className="result_div header3">
            <p>Format International: {data.format_international}</p>
            <p>Is Valid: {data.is_valid}</p>
            {data.timezones && (
              <h4>Timezones: {data.timezones.join(", ")}</h4>
            )}
            <p>Country: {data.country}</p>
            <p>Format National: {data.format_national}</p>
            <p>Country Code: {data.country_code}</p>
          </div>
        )
      )}
    </div>
  );
}

export default ValidatePhoneNo;
