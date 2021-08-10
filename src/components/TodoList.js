import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import TodoListItem from './TodoListItem';

const TodoList = () => {
    const todoIds = useSelector(state => state.todos.map(todo => todo.id), shallowEqual);

    return (
        <ul className="todo-list">
            {todoIds.map(todoId => <TodoListItem key={todoId} id={todoId} />)}
        </ul>
    );
};

export default TodoList;