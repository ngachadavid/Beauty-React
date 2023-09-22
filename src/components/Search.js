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

<