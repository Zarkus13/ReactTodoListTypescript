import styled from 'styled-components'
import { colors } from 'utils/colors';
import { Link } from 'react-router-dom'

export const TodoItemWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TodoItemDetails = styled.div`
  width: 100%;
  font-size: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  & > div {
    text-align: center;
    flex: 1;
  }
`;

export const NavigateButton = styled(Link)`
  background-color: transparent;
  border: none;
  outline: none;
  margin-bottom: -12px;
  cursor: pointer;
  
  & > svg {
    width: 55px;
    height: 55px;
  }
  
  &:hover {
    color: ${colors.primaryColor};
  }
  
  &:visited {
    color: ${colors.textColor};

    &:hover {
      color: ${colors.primaryColor};
    }
  }
`;

export const PreviousItem = styled(NavigateButton)`
  margin-left: 50px;
`;

export const NextItem = styled(NavigateButton)`
  margin-right: 50px;
`;

export const ReturnToList = styled(Link)`
  color: ${colors.darkGray};
  text-decoration: none;
  margin-top: 80px;
  cursor: pointer;
  
  &:hover {
    color: ${colors.primaryColor};
  }
  
  &:visited {
    color: ${colors.darkGray};

    &:hover {
      color: ${colors.primaryColor};
    }
  }
`;