import filterReducer from './filtersSlice';
import Constants from '../constants';

test('Set a status in filter', () => {
    const initialState = { status: 'All', colors: [] };
    const action = { type: Constants.FILTER_STATUS_FILTER_CHANGED, payload: 'Completed' };
    const result = filterReducer(initialState, action);
    expect(result.status).toBe('Completed');
});