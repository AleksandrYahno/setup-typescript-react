import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components/macro';

const { Search: AntSearch } = Input;

const SearchWrapper = styled(AntSearch)`
  width: 90%;
  margin: 20px auto;
  display: flex;
`;

export const Search = () => {
  const handleSearch = (value: any) => console.log(value);

  return <SearchWrapper placeholder="Поиск" onSearch={handleSearch} />;
};
