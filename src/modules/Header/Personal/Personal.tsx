import React, { useState } from 'react';
import { Modal, Button, Icon } from 'antd';
import styled from 'styled-components/macro';

const UserButton = styled(Button)`
  border: 1px solid #d9d9d9;
  background: transparent;
  margin-left: 1em;
  &:hover {
    background: transparent;
  }
`;

export const Personal = () => {
  const [state, setState] = useState(false);

  const showModal = () => setState(true);
  const handleOk = () => setState(false);
  const handleCancel = () => setState(false);

  return (
    <div>
      <UserButton onClick={showModal}>
        <Icon type="user" />
      </UserButton>
      <Modal title="Настройка профиля" visible={state} onOk={handleOk} onCancel={handleCancel}>
        <p>Настройка профиля Настройка профиля Настройка профиля Настройка профиля Настройка профиля</p>
      </Modal>
    </div>
  );
};
