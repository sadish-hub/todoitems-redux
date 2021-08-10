import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Constants from '../store/constants';
import {SelectColor,DeleteTodo, ToggleTodo} from '../store/todoActions';

const TodoListItem = ({ id }) => {
    const todoItem = useSelector(state => state.todos.find(item => item.id === id));
    const dispatch = useDispatch();

    const getColorsList = () => {
        let colorsList = [];
        const colors = Constants.COLORS;
        for (const key in colors) {
            if (Object.hasOwnProperty.call(colors, key)) {
                colorsList.push(
                    <option key={key} value={key}>{colors[key]}</option>
                );
            }
        }
        return colorsList;
    };

    const onTodoListItemColorSet = (e) => {
        console.log(e.target.value);
        dispatch(SelectColor(id, e.target.value));
    };

    const deleteTodoListItem = () => dispatch(DeleteTodo(id));

    const onToggleComplete = () => dispatch(ToggleTodo(id));

    return (
        <li key={id}>
            <div className="view">
                <div className="segment label">
                    <input className="toggle" type="checkbox" onChange={onToggleComplete} defaultChecked={todoItem.completed} />
                    <div className="todo-text">{todoItem.text}</div>
                </div>
                <div className="segment buttons">
                    <select className="colorPicker" onChange={onTodoListItemColorSet} value={todoItem.color || ''}>
                        <option value=""></option>
                        {getColorsList()}
                    </select>
                    <button className="destroy" onClick={deleteTodoListItem}>Delete</button>
                </div>
            </div>
        </li>
    );
};

export default TodoListItem;