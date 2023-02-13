import React, { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useSearchResultsStore } from "./useSearchResultStore";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSearchResults } = useSearchResultsStore()
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.mediehuset.net/homelands/search/${searchTerm}`
      );
      const results = await response.json();

      setSearchResults(results.items);
    } catch (error) {
      console.error(error);
    }
    navigate("/search")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Indtast søgeord"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">
        <GrSearch />
      </button>
    </form>
  );
};

export default Search;
