import styled from 'styled-components'
import { colors } from 'utils/colors'

export const TodoListWrapper = styled.div`
  width: 600px;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  padding: 200px 50px 100px;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const Title = styled.h1`
  font-size: 50px;
  text-align: center;
`;

export const AddTodoItem = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  
  & > input {
    font-size: 1em;
    color: ${colors.textColor};
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${colors.borderColor};
    outline: none;
    padding: 5px 10px;
    flex: 1;
  }
  
  & > button {
    font-size: 1em;
    color: ${colors.textColor};
    background-color: transparent;
    border: none;
    outline: none;
    margin-left: 20px;
    cursor: pointer;
    
    &:hover {
      color: ${colors.primaryColor};
    }
  }
`;

export const TodoItemsList = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
`;

export const TodoItem = styled.div`
  & > a {
    line-height: 2em;
    color: ${colors.textColor};
    text-decoration: none;
    display: block;
    
    &:hover {
      color: ${colors.primaryColor};
    }
  }
`;