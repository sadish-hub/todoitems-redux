import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from '../store/todoActions';

const PLACEHOLDER_TEXT = "What needs to be done?", ENTER_KEY_TEXT = "Enter", EMPTY_TEXT = "";

const Header = () => {
    const [text, setText] = useState(EMPTY_TEXT);
    const dispatch = useDispatch();

    const handleChange = e => setText(e.target.value);

    const handleKeyDown = e => {
        const trimmedText = e.target.value.trim();
        if (e.key === ENTER_KEY_TEXT && trimmedText) {
            dispatch(addTodo(trimmedText)); //{ type: Constants.TODO_ADDED, payload: trimmedText }
            setText(EMPTY_TEXT);
        }
    };

    return (
        <header className="header">
            <input type="text" className="new-todo" placeholder={PLACEHOLDER_TEXT} autoFocus={true} value={text}
                onChange={handleChange}
                onKeyDown={handleKeyDown} />
        </header>
    );
};

export default Header;