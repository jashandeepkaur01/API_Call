import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function City() {
  const navigate = useNavigate();
  const { name } = useParams();
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
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
      .then((response) => response.json())
      .then((res) => setData(res.data))
      .then((json) => console.log(json));
  }, []);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    data.filter((ele) => {
      ele.name.match(searchInput);
    });
  }

  console.log(data);
  return (
    <>
      <div>{name}</div>
      <div>City Name</div>

      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />

      {/* <ul name={data}>{data.length?data.map((val)=><li>{val}</li>):"data not found"}</ul> */}
      <button
        onClick={() => {
          navigate(`/`);
        }}
      >
        Back to Country
      </button>
    </>
  );
}

export default City;
