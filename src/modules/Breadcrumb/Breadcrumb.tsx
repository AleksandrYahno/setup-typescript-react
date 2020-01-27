import React from 'react';

import { Breadcrumb as AntBreadcrumb } from 'antd';

import styled from 'styled-components/macro';

const BreadcrumbWrapper = styled(AntBreadcrumb)`
  margin: 0 20px;
`;

export const Breadcrumb = () => {
  return (
    <BreadcrumbWrapper>
      <AntBreadcrumb.Item>Dashboard</AntBreadcrumb.Item>
      <AntBreadcrumb.Item>Products List</AntBreadcrumb.Item>
      <AntBreadcrumb.Item>Products List</AntBreadcrumb.Item>
    </BreadcrumbWrapper>
  );
};
