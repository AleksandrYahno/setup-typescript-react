import { Layout } from 'antd';
import styled from 'styled-components/macro';
import { ReactComponent as MainLogo } from '../../assets/img/svg/MainLogo.svg';

const { Header: AntHeader } = Layout;

export const HeaderWrapper = styled(AntHeader)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f0f2f5;
`;

export const LogoWrapper = styled(MainLogo)`
  margin: 0 20px 0 0;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;
