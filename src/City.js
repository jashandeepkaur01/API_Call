import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function City() {
  const navigate = useNavigate();
  const { name } = useParams();
  const [data, setData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [err,setErr]=useState("")
  const arr=[];
  useEffect(() => {
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
        setData(res.data)
      })
      .catch(err=>setErr(err))
  }, []);


  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchValue) {
        const filteredData = data.filter((item) => {
            return item.toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    }
    else{
        setFilteredResults(data)
    }
    console.log(filteredResults)
  }
  return (
    <>
      <div>{name}</div>
      <div>City Name</div>
      {/* <input type="search" placeholder="Search here" onChange={handleChange} /> */}

     


      <input type ='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />
             <ul>{filteredResults?.map((val) => <li>{val}</li>)}</ul> 

      <form>
      
       
    
      </form>
    
      
      
      <button
        onClick={() => {
          navigate(`/`);
        }}
      >
        Back to Country
      </button>
      <h1>{err}</h1>
    </>
  );
}


export default City;


