import React, { useState, useEffect, useMemo } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import TodoList from '../../components/TodoList';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';
function ListPage(props) {
  const initialTodoList = [
    {
      id: 1,
      title: 'ReactJs',
      status: 'new',
    },
    {
      id: 2,
      title: 'AngularJs',
      status: 'completed',
    },
    {
      id: 3,
      title: 'VueJs',
      status: 'new',
    },
  ];
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initialTodoList);
  const [filterTodoList, setfilterTodoList] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setfilterTodoList(params.status || 'all');
  }, [location.search]);
  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    setTodoList(newTodoList);
  };
  const handleShowAll = () => {
    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowCompleted = () => {
    const queryParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowNew = () => {
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const renderTodoList = useMemo(
    () => todoList.filter((todo) => filterTodoList === 'all' || filterTodoList === todo.status),
    [(todoList, filterTodoList)]
  );
  const handleTodoFormSubmit = (values) => {
    console.log('values in ListPage:', values);
    const newTodo = {
      id: 4,
      title: values.title,
      status: 'new',
    };
    const newTodoList = [...todoList, newTodo];

    setTodoList(newTodoList);
  };
  return (
    <div>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <h3>TODOLIST</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />

      <button onClick={handleShowAll}>ShowStatusAll</button>
      <button onClick={handleShowCompleted}>ShowStatusCompleted</button>
      <button onClick={handleShowNew}>ShowStatusNew</button>
    </div>
  );
}

export default ListPage;
