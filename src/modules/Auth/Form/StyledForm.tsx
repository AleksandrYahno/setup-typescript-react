import styled from 'styled-components';
import { Button, Form as AntForm, Input } from 'antd';
import { Link } from 'react-router-dom';

export const FormWrapper = styled(AntForm)`
  width: 100%;
  padding: 0 34px;
  position: relative;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const FormItem = styled(AntForm.Item)`
  margin-bottom: 30px;
  .ant-form-explain {
    position: absolute;
  }
`;

export const FormInput = styled(Input)`
  &&& > input {
    width: 100%;
    height: 54px;
    display: inline-flex;
    box-sizing: border-box;
    padding-left: 36px;
    transition: all 0.5s ease;
    color: #000000;
    background: #f9f9f9;
    border: 1px solid #e3e6e9;
    box-shadow: inset 0 0 10px rgba(216, 216, 216, 0.15);
    border-radius: 4px;
    margin: 0;
    font-size: 14px;
    :hover {
      border-color: #08c357;
      transition: all 0.5s ease;
    }
  }
`;

export const LinkForgot = styled(Link)`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  font-size: 12px;
  margin-bottom: 20px;
  font-weight: 300;
  text-align: justify;
  color: rgba(0, 0, 0, 0.6);
  transition: all 0.5s ease;
  :hover {
    color: #08c357;
    transition: all 0.5s ease;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinkSign = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-decoration: none;
  width: calc(50% - 10px);
  transition: all 0.5s ease;
  border-radius: 4px;
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.4px;
  max-width: 224px;
  height: 54px;
  background: #f1f1f1;
  :hover {
    transition: all 0.5s ease;
    background: #00d75a;
    color: #ffffff;
  }
`;

export const ButtonSubmit = styled(Button)`
  &&& {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    text-decoration: none;
    width: calc(50% - 10px);
    min-width: initial;
    transition: all 0.5s ease;
    border-radius: 4px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.4px;
    max-width: 224px;
    height: 54px;
    border: none;
    background: #00d75a;
    :hover {
      transition: all 0.5s ease;
      background: #08c357;
      color: #ffffff;
      border: none;
    }
  }
`;
