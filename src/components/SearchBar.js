import React, { useState } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  .search-input {
    width: 300px;
  }
`;

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <SearchBarWrapper>
      <Input.Search
        className="search-input"
        placeholder="Search places..."
        enterButton="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onSearch={handleSearch}
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;
