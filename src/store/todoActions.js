import Constants from "./constants";

    export const addTodo = todoText => ({ type: Constants.TODO_ADDED, payload: todoText });
    export const ToggleTodo = todoId => ({ type: Constants.TODO_TOGGLED, payload: todoId });
    export const SelectColor = (todoId, color) => ({ type: Constants.TODO_COLOR_SELECTED, payload: { todoId, color } });
    export const DeleteTodo = todoId => ({ type: Constants.TODO_DELETED, payload: todoId });
    export const CompleteAll = () => ({ type: Constants.TODO_ALL_COMPLETED });
    export const ClearComplete = () => ({ type: Constants.TODO_COMPLETED_CLEARED });
    export const ChangeStatusFilter = filterValue => ({ type: Constants.FILTER_STATUS_FILTER_CHANGED, payload: filterValue });
    export const ChangeColorFilter = (color, changeType) => ({ type: Constants.FILTER_COLOR_FILTER_CHANGED, payload: { color, changeType } });