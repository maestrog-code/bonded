import React, {useState} from 'react'
import axios from 'axios'

export default function StatusChecker(){
  const [name, setName] = useState('')
  const [result, setResult] = useState(null)
  async function check(){
    try{
      const res = await axios.get((import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000') + '/api/status/' + encodeURIComponent(name))
      setResult(res.data)
    }catch(e){
      setResult({error:'not found'})
    }
  }
  return (
    <div className="card">
      <h2>Status Checker</h2>
      <div style={{marginTop:8,display:'flex',gap:8}}>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder='Enter username' style={{padding:8,flex:1, borderRadius: 'var(--border-radius)', border: '1px solid #ccc'}}/>
        <button onClick={check} className="button-primary">Check</button>
      </div>
      {result && <pre style={{marginTop:12, background: '#eee', padding: '16px', borderRadius: 'var(--border-radius)'}}>{JSON.stringify(result,null,2)}</pre>}
    </div>
  )
}
