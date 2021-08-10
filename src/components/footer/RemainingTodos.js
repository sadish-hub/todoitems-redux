import React from 'react';

const RemainingTodos = ({count}) => {
    return (<div className="todo-count">
        <h5>Remaining Todos</h5>
        <strong>{count}</strong> items left
        </div>)
};
export default RemainingTodos;