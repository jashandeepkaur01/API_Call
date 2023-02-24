import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
// import { Navigate } from "react-router-dom";


const Join = () => {
  const [hasErrors, setStateErrors] = useState(false);
  const [country, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://countriesnow.space/api/v0.1/countries/capital")
      console.log(res)
      res.json().then(res => setCountry(res.data))
        .catch(err => setStateErrors)
    }

    fetchData();

  }, [])




  const handleSelectedCountry = (event) => {
    setSelectedCountry(event.target.value);

    console.log(event.target.value);
  }


  return (
    
    <div>
    <h1>Select a country</h1>
   
<select onChange={handleSelectedCountry} id="" name={country}>{country.map((val,index)=><option key={index} value={val.name}>{val.name}</option>)}</select>
<button onClick={()=>{navigate(`City/${selectedCountry}`) 

}}>Click</button>
<br/>
<br/>

      {/* <span>{JSON.stringify(country)}</span> */ }
      <hr />
      {/* <span>hasErrors :{JSON.stringify(hasErrors)}</span> */}
</div>
  )

}

export default Join;