import Constants from "../constants";

const initialState = [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
];

const nextTodoId = todos => {
    const maxId = todos.reduce((maxId, todoItem) => Math.max(todoItem.id, maxId), -1);
    return maxId + 1;
};
const todoReducer = (state = initialState, action) => {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions
        case Constants.TODO_ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state.todos),
                    text: action.payload,
                    completed: false
                }

            ];
        case Constants.TODO_TOGGLED:
            return state.map(todoItem => {
                if (todoItem.id !== action.payload) {
                    return todoItem;
                }
                return {
                    ...todoItem,
                    completed: !todoItem.completed
                }
            });
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state;
    }
}

export default todoReducer;