import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./City.css";
function City() {
  const navigate = useNavigate();
  const { name } = useParams();
  const [data, setData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(true)
 
  useEffect(() => {
    setIsLoading(true)
    fetch("https://countriesnow.space/api/v0.1/countries/cities", {
      method: "POST",
      body: JSON.stringify({
        country: name,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
        setIsLoading(false)
      })
      .catch((err) => {setErr(err); setIsLoading(false)});
      
      
  }, []);


  useEffect(() => {
    
    const timer = setTimeout(() => searchItems(searchInput), 4000);
    return () => clearTimeout(timer);

}, [searchInput]);

  const handleChange= (event)=>{
    setSearchInput(event.target.value)
  }


  const searchItems = (searchValue) => {
    
    setSearchInput(searchValue);
    if (searchValue) {
      const filteredData = data.filter((item) => {
        return item.toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
    console.log(filteredResults);
  };
  function displayCity(data) {
    if(data.length){
      return data.map((val) => <li>{val}</li>);
    }else{
      return <h3>"No Data Found!"</h3>;
    }
  }



  return (
    <>
      <div className="content">
        <button
          className="btn"
          onClick={() => {
            navigate(`/`);
          }}
        >
         back
        </button>
        <br />

        <div className="city">Cities of {name} are:</div>

        <input
          className={"search"}
          type="search"
          placeholder="Search..."
          onChange={handleChange}
        />
    {console.log(isLoading, "isLoading")}
        {
          isLoading ? <h3>Loading....</h3> : searchInput ? displayCity(filteredResults) : displayCity(data)
        }
      </div>
    </>
  );
}

export default City;
