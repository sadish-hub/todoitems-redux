import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ColorFilters from './filters/ColorFilters';
import StatusFilter from './filters/StatusFilter';
import RemainingTodos from './RemainingTodos';
import {ChangeStatusFilter, ChangeColorFilter, CompleteAll, ClearComplete} from '../../store/todoActions';

const Footer = () => {
    const dispatch = useDispatch();
    const todosRemaining = useSelector((state) => state.todos.filter(todoItem => !todoItem.completed));
    const { status, colors } = useSelector((state) => state.filters);

    const onStatusChange = (e) => dispatch(ChangeStatusFilter(e.value));

    const onColorChange = (color, changeType) => 
    {
        console.log(changeType);
        console.log(color);
        dispatch(ChangeColorFilter(color, changeType));
    };

    const onCompleteAll = () => dispatch(CompleteAll);

    const onClearCompleted = () => dispatch(ClearComplete);

    return (
        <footer className="footer">
            <div className="actions">
                <h5>Actions</h5>
                <button className="button" onClick={onCompleteAll}>Mark All Completed</button>
                <button className="button" onClick={onClearCompleted}>Clear Completed</button>
            </div>
 
            <RemainingTodos count={todosRemaining.length || 0} />
            <StatusFilter value={status} onStatusChange={onStatusChange} />
            <ColorFilters value={colors} onColorChange={onColorChange} /> 
        </footer>
    )
};

export default Footer;
