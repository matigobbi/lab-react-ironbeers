import './App.css';
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductDetails from "./pages/ProductDetails"
import About from "./pages/About";
import AllBeers from "./pages/AllBeers";
import Home from "./pages/Home";
import RandomBeer from './pages/RandomBeer';

function App() {
  const [beers, setBeers] = useState([])
  const [randomBeer, setRandomBeer] = useState([])  
  // console.log(beers)

  useEffect(() => {
      axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
            setBeers(response.data.slice(0, 25))
          
        })
        .catch(err => console.log(err))
    }, [])

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/all" element={<AllBeers beers={beers}/>} />
        <Route exact path="/random" element={<RandomBeer randomBeer={randomBeer} setRandomBeer={setRandomBeer}/>} />
        <Route exact path="/all/:_id" element={<ProductDetails beers={beers}/>} />
        <Route exact path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
