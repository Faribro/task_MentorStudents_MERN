import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/search?q=${searchTerm}`);
      setSearchResults(data);
    };

    if (searchTerm !== "") {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search Ads"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div className="grid">
        {searchResults.map((ad) => (
          <div key={ad._id} className="grid-item">
            <h2>{ad.headline}</h2>
            <p>{ad.primary_text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
