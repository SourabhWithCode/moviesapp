import React from 'react'
import {useGlobalContext } from '../context/context'
const Search = () => {
  const {query,setQuery,isError} = useGlobalContext();
 

  const handleSubmit = (e)=>{
    e.preventDefault();
  }

  const handleOnchange = (e)=>{
    setQuery(e.target.value)
  }
  
  return (
    <>
      <section className='search-section'>
        <h2>Search Your Favourite movies</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder='Search Here ....' value={query} onChange={handleOnchange} />
          </div>
        </form>
        <div className="card-error">
          <p>{isError.show && isError.msg}</p>
        </div>
        </section>  
    </>
  )
}

export default Search
