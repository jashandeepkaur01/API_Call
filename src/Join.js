import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const [hasErrors, setStateErrors] = useState(false);
  const [country, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://countriesnow.space/api/v0.1/countries/capital"
      );
      console.log(res);
      res
        .json()
        .then((res) => setCountry(res.data))
        .catch((err) => setStateErrors);
    }

    fetchData();
  }, []);

  const handleSelectedCountry = (event) => {
    setSelectedCountry(event.target.value);

    console.log(event.target.value);
  };

  return (
    <div class="container">
      <h1 class="header">Select a country</h1>

      <select onChange={handleSelectedCountry} id="" name={country}>
        <option>Select a country</option>
        {country.map((val, index) => (
          <option key={index} value={val.name}>
            {val.name}
          </option>
        
        ))}
      </select>
      <br></br>
      <button
        className="btn1"
        onClick={() => {
          {!selectedCountry ? alert("Please select a country"):navigate(`City/${selectedCountry}`)}
          
        }}
      >
        Next
      </button>
      <br />
      <br />

      <hr />
    </div>
  );
};

export default Join;
