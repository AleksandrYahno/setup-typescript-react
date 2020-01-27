import React from 'react';
import { Icon } from 'antd';
import { HeaderWrapper, LogoWrapper, Left, Right } from './StyledHeader';
import { SelectLang } from './SelectLang';
import { Personal } from './Personal';
import { Breadcrumb } from '../Breadcrumb';

interface HeaderProps {
  state: boolean;
  setState: (value: boolean) => void;
}

export const Header = ({ state, setState }: HeaderProps) => {
  return (
    <HeaderWrapper>
      <Left>
        <LogoWrapper />
        <Icon type={state ? 'menu-unfold' : 'menu-fold'} onClick={() => setState(!state)} />
        <Breadcrumb />
      </Left>
      <Right>
        <SelectLang />
        <Personal />
      </Right>
    </HeaderWrapper>
  );
};
