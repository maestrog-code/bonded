import React, {useState} from 'react'

export default function RelationshipCard(){
  const [status, setStatus] = useState('Taken')
  return (
    <div className="card">
      <h3>You & Partner</h3>
      <p>Status: <strong>{status}</strong></p>
      <button onClick={()=>setStatus(s=> s==='Taken'? 'Single':'Taken')} className="button-primary">Toggle Status</button>
    </div>
  )
}
