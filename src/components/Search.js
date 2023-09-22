import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (

<form className="flex items-center">   
    <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <input 
          type="text" 
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Search for items" 
          value={query}
          onChange={handleSearchChange}

          />
    </div>

</form>

 
  );
};

export default Search;
