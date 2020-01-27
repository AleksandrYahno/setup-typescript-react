import React from 'react';
import { Select } from 'antd';
import styled from 'styled-components/macro';

const { Option } = Select;

const SelectWrapper = styled(Select)`
  & > div {
    background: #f0f2f5;
    width: 60px;
    display: flex;
    align-items: center;
  }
`;

export const SelectLang = () => {
  const handleChange = value => console.log(value);

  return (
    <SelectWrapper defaultValue="ru" onChange={handleChange}>
      <Option value="en">en</Option>
      <Option value="ru">ru</Option>
    </SelectWrapper>
  );
};
