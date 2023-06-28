import React, { useEffect, useState } from "react";
import axios from "axios";

function PredictAge() {
  const URL = "https://api.agify.io/?name=";
  const [data1, setData] = useState("");
  const [name, Setname] = useState("");

  const getmyAGe = () => {
    fetchData();
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(URL + name);
      setData(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="ex.. wisdom"
        onChange={event => {
          {
            Setname(event.target.value);
          }
        }}
      />
      <h1>Name: {data1?.name}</h1>
      <h1>Predicted Age: {data1?.age}</h1>
      <h1>Count: {data1?.count}</h1>

      <button onClick={getmyAGe}>Get Age</button>
    </div>
  );
}

export default PredictAge;
