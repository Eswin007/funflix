import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/account/21141007/lists",
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmQ1MWRmZGFkYjc3OTZmMjc0NWUxY2Y3NzNlMTA1NiIsInN1YiI6IjY2MDMwYzY0MDkyOWY2MDE3ZTllZTIyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mFRFsvDjqSs_PSjaFQSXooMLNMTeIk38P3i-KJZRmB0",
        },
      }
    );
    console.log(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>App</div>;
};

export default App;
