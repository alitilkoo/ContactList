import React from "react";
import "../CSS/search.css";

const Search = ({ searchTerm, handleSearch }) => {
  return (
    <div className="search-input">
      <input
        type="text"
        id="search"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
