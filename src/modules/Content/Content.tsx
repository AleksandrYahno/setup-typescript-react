import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components/macro';
import Form from '../Auth/Form';

const { Content: AntContent } = Layout;

const ContentWrapper = styled(AntContent)`
  background: #fff;
  padding: 20px;
  margin: 0;
  min-height: 280px;
`;

export const Content = () => {
  return (
    <ContentWrapper>
      ContentWrapper
      <Form />
    </ContentWrapper>
  );
};
