import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store'
import { fetchTasks } from 'reducers/todoListReducer'
import Loading from 'components/Loading'

const TodoItem: React.FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();

  const { list, fetchingList } = useAppSelector((state) => state.todoList);

  const id = params.id ? Number(params.id) : undefined;
  const itemFound = id !== null && id !== undefined && list[id];

  useEffect(() => {
    if (list.length <= 0)
      dispatch(fetchTasks(10));
  }, []);

  return (
    <Loading loading={fetchingList}>
      {itemFound ?
        <div>{itemFound}</div> :
        <div>Invalid item id !</div>
      }
    </Loading>
  );
};

export default TodoItem;