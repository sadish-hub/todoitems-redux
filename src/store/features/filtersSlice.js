import Constants from "../constants";

const initialState = {
    status: 'All',
    colors: []
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        // Do something here based on the different types of actions
        case Constants.FILTER_STATUS_FILTER_CHANGED:
            return {
                ...state,
                status: action.payload
            };
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state;
    }
};

export default filterReducer;