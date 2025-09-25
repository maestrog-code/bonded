import React from 'react'
import RelationshipCard from '../components/RelationshipCard'
import TrustTools from '../components/TrustTools'
import Activities from '../components/Activities'

export default function Dashboard(){
  return (
    <div style={{display:'grid',gap:16}}>
      <RelationshipCard />
      <TrustTools />
      <Activities />
    </div>
  )
}
