import React from 'react'
import { useParams } from 'react-router-dom'

const Singlemovies = () => {
  const {id} = useParams();
  return (
    <>
      <div>
        our single movies page {id}
      </div>
    </>
  )
}

export default Singlemovies
