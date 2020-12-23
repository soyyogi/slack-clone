export const initialState = {
    user: null,
};

export const actionTypes = {
    SET_USER: 'SET_USER',
};

const Reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            }
            break;
    
        default:
            return state;
            break;
    }
};

export default Reducer;