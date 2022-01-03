import React from "react";

const SearchBar = ({ completion }) => {
  return (
<div className="SearchBar">
      <form action="/" method="get">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search game</span>
        </label>
        <input
            onInput={e => completion(e.target.value)}    
            type="text"
            id="header-search"
            placeholder="Search"
            name="" 
        />
      </form>
    </div>
  );
};

export default SearchBar;
