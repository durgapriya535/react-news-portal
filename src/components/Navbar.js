import React, { useState } from 'react';

const Navbar = ({ categories, selectedCategory, onCategoryChange, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <nav className="navbar">
      <h1>The News Portal</h1>
      <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
    </nav>
  );
};

export default Navbar;
