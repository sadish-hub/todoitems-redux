import todoReducer from './todosSlice';
import Constants from '../constants';

test('Toggles a todo based on a id', () => {
    const initialState = [{
        id: 0,
        text: 'Test text',
        completed: false
    }];
    const action = { type: Constants.TODO_TOGGLED, payload: 0 };
    const result = todoReducer(initialState, action);
    expect(result[0].completed).toBe(true);
});
