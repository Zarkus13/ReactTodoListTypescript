import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store'
import { fetchTasks } from 'reducers/todoListReducer'
import Loading from 'components/Loading'
import { NextItem, PreviousItem, ReturnToList, TodoItemDetails, TodoItemWrapper } from './styles'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

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
    <Loading
      loading={fetchingList}
      size="large"
    >
      <TodoItemWrapper>
        <TodoItemDetails>
          {itemFound ?
            <>
              {id > 0 &&
                <PreviousItem
                  to={'/item/' + (id - 1)}
                >
                  <BiLeftArrow />
                </PreviousItem>
              }

              <div>{itemFound}</div>

              {id < list.length - 1 &&
                <NextItem
                  to={'/item/' + (id + 1)}
                >
                  <BiRightArrow />
                </NextItem>
              }
            </> :
            <div>Invalid item id !</div>
          }
        </TodoItemDetails>

        <ReturnToList to="/">
          Return to list
        </ReturnToList>
      </TodoItemWrapper>
    </Loading>
  );
};

export default TodoItem;