import React, { useEffect, useState } from "react";
import axios from "axios";

function ValidatePhoneNo() {
  const [number, setNumber] = useState("");
  const [data, setData] = useState(null);

  const validateNumber = async () => {
    try {
      const apiKey = "Zraj/MIeUXiv0teG+pWCgA==vX0cqtoPIASbm9cg";
      const url = `https://api.api-ninjas.com/v1/validatephone?number=${encodeURIComponent(
        number
      )}`;
      const headers = {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      };
      const response = await axios.get(url, { headers });
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleValidate = () => {
    validateNumber();
    // setNumber("");
  };

  useEffect(() => {
    validateNumber();
  }, []);

  return (
    <div className="general_container">
      <h1 className="title header">Phone Validator.</h1>
      <p className="para_text">
        {" "}
        "Free Phone Validator: Ultimate Tool for Accurate
        Numbers. Boost Your Success Today!"
      </p>
    <p className="para_text2 ">TRUSTED BY THE BEST SEO MARKETERS!</p>
      <div className="input_submit_btn_div">
        <input
          className="input_class"
          type="text"
          placeholder="Eg...+12065550100"
          value={number}
          onChange={event => setNumber(event.target.value)}
        />{" "}
        <br />
        <button className="Validate_btn header2" onClick={handleValidate}>
          Validate Number
        </button>
      </div>
      {data && (
        <div className="result_div header2">
          <h4>Format International: {data.format_international}</h4>
          <h4>Is Valid: {data.is_valid}</h4>
          {/* <h4>Is Formatted Properly: {data.is_formatted_properly}</h4> */}
          {data.timezones && <h4>Timezones: {data.timezones.join(", ")}</h4>}
          <h4>Country: {data.country}</h4>
          {/* <h4>Location: {data.location}</h4> */}
          <h4>Format National: {data.format_national}</h4>
          {/* <h4>Format International: {data.format_international}</h4> */}
          {/* <h4>Format E164: {data.format_e164}</h4> */}
          <h4>Country Code: {data.country_code}</h4>
        </div>
      )}
    </div>
  );
}

export default ValidatePhoneNo;
