import React from 'react';
import search from '../assets/icons/search.png'
const Search = () => {
    return (
        <div className="mt-4 max-w-[2000px] px-10 mx-20 relative">
            <span class="absolute inset-y-0 left-10 flex items-center pointer-events-none">
                <img src={search} />
            </span>
            <input
                type="text"
                placeholder="Search for a component"
                
                
                className="w-full max-w-[2000px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
        </div>
    );
}

export default Search;
