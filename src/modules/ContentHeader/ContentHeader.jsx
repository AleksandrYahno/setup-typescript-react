import React from 'react';
import styled from 'styled-components/macro';

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 20px;
  background: #fff;
`;

export const ContentHeader = () => {
  return (
    <ContentWrapper>
      <div>Content Header</div>
      <div>Фильтры</div>
    </ContentWrapper>
  );
};
