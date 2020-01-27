import React, { useState } from 'react';
import AntLayout from 'antd/lib/layout';

import styled from 'styled-components/macro';
import { Header } from '../Header';
import { Sider } from '../Sider';
import { ContentHeader } from '../ContentHeader';
import { Content } from '../Content';

const MainLayout = styled(AntLayout)`
  min-height: 100vh;
`;

const ContentLayout = styled(AntLayout)`
  padding: 0 20px 20px;
`;

const MainContentLayout = styled(AntLayout)`
  display: flex;
  flex-direction: row;
`;

const Layout: React.FC = () => {
  const [state, setState] = useState(false);

  return (
    <MainLayout>
      <Header state={state} setState={setState} />

      <MainContentLayout>
        <Sider state={state} />

        <ContentLayout>
          <ContentHeader />
          <Content />
        </ContentLayout>
      </MainContentLayout>
    </MainLayout>
  );
};

export default Layout;
