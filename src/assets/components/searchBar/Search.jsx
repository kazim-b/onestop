import React from 'react'
import './search.css'

const Search = () => {
  return (
    <>
      <div className="searchBox">
        <select>
            <option>All Assets</option>
            <option>Software</option>
            <option>Images</option>
            <option>Videos</option>
            <option>Games</option>
        </select>
        <input type="text" name="" id="" />
        <button>Search</button>
      </div>
    </>
  )
}

export default Search
