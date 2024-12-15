import React from 'react';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search GitHub Users..." />
            <button>Search</button>
        </div>
    );
};

export default SearchBar;