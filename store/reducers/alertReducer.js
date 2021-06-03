const initialState = null;

const alertReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_ALERT':
            return {
                content: action.content,
                type: action.alertType
            }
        case 'REMOVE_ALERT':
            return null
        default:
            return state
    }
}

export default alertReducer;