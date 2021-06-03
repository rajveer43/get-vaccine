const intialState = {
    user: null,
    userRegistered: false,
    authError: null,
    initialAuthLoaded: false
};

const authReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'SIGNIN_ERROR':
            return {
                ...state,
                authError: action.error.message,
                initialAuthLoaded: true
            }

        case 'SIGNIN_SUCCESS':
            return {
                ...state,
                user: action.user,
                authError: null,
                initialAuthLoaded: true
            }

        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                authError: null,
                user: null,
                userRegistered: false
            }
        case 'LOGOUT_ERROR': 
            return  {
                ...state,
                authError: action.error.message
            }
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                userRegistered: action.userRegistered,
                authError: null
            }
        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: action.error.message
            }
        case 'UPDATE_USER_SUCCESS':
            return {
                ...state,
                user: action.user
            }
        case 'UPDATE_USER_ERROR':
            return {
                ...state,
                updateUserError: action.error
            }
        case 'UPDATE_PASS_SUCCESS':
            return {
                ...state
            }
        case 'UPDATE_PASS_ERROR': 
            return {
                ...state,
                updatePassError: action.error
            }
        default:
            return state

    }
}

export default authReducer;