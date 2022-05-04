import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { addTodoItem, fetchTasks } from 'reducers/todoListReducer'
import { useAppDispatch, useAppSelector } from 'store'
import { SetState } from 'utils'
import Loading from 'components/Loading'

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

  // const onAddItem = useCallback(() => {
  //   dispatch(addTodoItem(itemToAdd));
  //   setItemToAdd('');
  // }, [itemToAdd]);

  return (
    <>
      <div>
        <input
          type="text"
          value={itemToAdd}
          onChange={(event) => onItemToAddChange(event, setItemToAdd)}
          ref={inputRef}
        />

        {/*<button onClick={() => onAddItem()}>*/}
        <button>
          Add item
        </button>
      </div>

      <Loading loading={fetchingList}>
        <ul>
          {list.map((item, id) =>
            <li key={id}>
              <Link to={`/item/${id}`}>{item}</Link>
            </li>
          )}
        </ul>
      </Loading>
    </>
  );
};

const onItemToAddChange = (event: ChangeEvent<HTMLInputElement>, setItemToAdd: SetState<string>) =>
  setItemToAdd(event.target.value);

export default TodoList;