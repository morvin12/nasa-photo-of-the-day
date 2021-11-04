import React, { useState, useEffect } from "react";
import "./App.css";

import { API_KEY } from './Constants';
import axios from "axios";
import Image from './Components/Image';



function App() {
  const [nasaData, setNasaData] = useState()

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, [])
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
