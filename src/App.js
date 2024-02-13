import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Gallary from "./Gallary";
const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((res) => setData(res.data.photos.photo));

    console.log(search);
  };
  return (
    <div>
      <center>
        <h2>Gallary SnapShot</h2>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={search}
            onChange={changeHandler}
            className="mb-2 bg-info"
          />
          <br />
          <input type="submit" name="search" />
        </form>
        <div>
          {data.length >= 1 ? <Gallary data={data} /> : <h2>No Data</h2>}
        </div>
      </center>
    </div>
  );
}

export default App;
