import React, {useState} from 'react'
import Subscription from './Subscription'

function Hotels({data}) {

  const [show, setShow] = useState(false)
  const [sub, setSub] = useState(false)

  return (
    <div>
      <h3>{data.name}</h3>
      {show &&
        <>
          <p>{data.city}</p>
          <p>Stars: {data.stars}</p>
          <div>
          <button onClick={(() => setSub(true))}>Request more info about {data.name}</button>
          {sub && <Subscription/>} 
          </div>
        </>
    }
      {!show ? <button onClick={(()=>setShow(true))}>Show more</button> : <button onClick={(()=>setShow(false))}>Show less</button>}
    </div>
  )
}

export default Hotels
