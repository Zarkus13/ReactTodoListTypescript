import React, { ChangeEvent, KeyboardEventHandler, useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { addTodoItem, fetchTasks } from 'reducers/todoListReducer'
import { AppDispatch, useAppDispatch, useAppSelector } from 'store'
import { SetState } from 'utils'
import Loading from 'components/Loading'
import { AddTodoItem, Title, TodoItem, TodoItemsList, TodoListWrapper } from './styles'

const TodoList: React.FC = () => {
  const { list, fetchingList } = useAppSelector((state) => state.todoList);
  const [itemToAdd, setItemToAdd] = useState('');

  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (list.length <= 0)
      dispatch(fetchTasks(10));

    inputRef?.current?.focus();
  }, []);

  return (
    <TodoListWrapper>
      <Title>TodoList React</Title>

      <AddTodoItem>
        <input
          type="text"
          value={itemToAdd}
          onChange={(event) => onItemToAddChange(event, setItemToAdd)}
          onKeyPress={onItemToAddKeyPress(itemToAdd, setItemToAdd, dispatch)}
          ref={inputRef}
        />

        <button onClick={() => onAddItem(itemToAdd, setItemToAdd, dispatch)}>
          Add item
        </button>
      </AddTodoItem>

      <Loading loading={fetchingList}>
        <TodoItemsList>
          {list.map((item, id) =>
            <TodoItem key={id}>
              <Link to={`/item/${id}`}>{item}</Link>
            </TodoItem>
          )}
        </TodoItemsList>
      </Loading>
    </TodoListWrapper>
  );
};

const onItemToAddChange = (event: ChangeEvent<HTMLInputElement>, setItemToAdd: SetState<string>) =>
  setItemToAdd(event.target.value);

const onAddItem = (itemToAdd: string, setItemToAdd: SetState<string>, dispatch: AppDispatch) => {
  dispatch(addTodoItem(itemToAdd));
  setItemToAdd('');
};

const onItemToAddKeyPress = (itemToAdd: string, setItemToAdd: SetState<string>, dispatch: AppDispatch) => (event: React.KeyboardEvent<HTMLInputElement>) => {
  if (event.key === 'Enter')
    onAddItem(itemToAdd, setItemToAdd, dispatch);
};

export default TodoList;