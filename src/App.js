import React, { useState, useEffect } from 'react'
import './App.css'
import LoadingMask from './components/loading'
import Hotels from './components/Hotels'



const App = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('api/hotels')
    .then(response => response.json())
    .then(data => setData(data))
    .finally(setLoading(false))
  }, [])



  console.log(data)

  return (
    <div className="App">
      <h1>Hotels</h1>
      {loading ? <LoadingMask/> : data.map((hotel, i) => (<Hotels data={hotel} key={i}/>)) }

    </div>
  )
}

export default App
