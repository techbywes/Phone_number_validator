import React, { useEffect, useState } from "react";
import axios from "axios";

function GetCats() {
  const URL = "https://catfact.ninja/fact";

  const [text, settext] = useState("");

  const FetchCat = async () => {
    try {
      const response = await axios.get(URL);
      settext(response.data.fact);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    FetchCat();
  }, []);

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}

export default GetCats;
