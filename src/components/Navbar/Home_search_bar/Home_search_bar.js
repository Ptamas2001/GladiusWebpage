import React, { useState } from 'react';
import "./Home_search_bar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleSearch = () => {
    // Kezelje a keresési logikát itt
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className={`search-bar ${isActive ? 'active' : ''}`}>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>
        <span><FaSearch /></span>
      </button>
    </div>
  );
};

export default SearchBar;
