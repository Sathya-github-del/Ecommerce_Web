// src/components/SearchBar.js
import React, { useState } from 'react';
import ProductPage from '../pages/ProductPage'; // should start from here
function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', query);
    const filteredResults = product.name.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
    console.log('Filtered results:', filteredResults);
    // You can now use the filteredResults array to display the search results
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        spellCheck="true"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}><i className="fas fa-search"></i></button>
    </div>
  );
}

export default SearchBar;
