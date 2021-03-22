import React, { useState } from 'react'

function Subscription() {

  const [email, setEmail] = useState('');
  const [res, setRes] = useState(false)

  function sendForm() {
    fetch('api/hotels/subscribe', {
      method: 'POST',
      headers: {
        "Accept": 'application.json',
        "Content type": 'application.json' 
      },
      body: JSON.stringify({"email": email, "hotel": "hotel name"})
  })
    .then(response => setRes(true))
}

  return (
    
    <div>
      <input type='text' onChange={(e) => setEmail(e.target.value)}></input>
      <input type="submit" disabled={!(email.includes('@') && email.includes('.'))} onClick={sendForm()}></input>
    </div>
  )
}
export default Subscription
