import userActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SIGN_IN_SUCCESS: 
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };
        case userActionTypes.SIGN_OUT_SUCCESS:
            alert('You have been successfuly logged out');
            return {
                ...state,
                currentUser: null,
                error: null
            };
        case userActionTypes.SIGN_IN_FAILURE:
            alert('Wrong email or password, please try again');
            return {
                ...state,
                error: action.payload
            };
        case userActionTypes.SIGN_OUT_FAILURE:
        case userActionTypes.REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export default userReducer;