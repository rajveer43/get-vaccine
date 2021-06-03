const initialState = {}

const availabilityReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHECK_BY_PINCODE':
            return {
                ...state,
                result: action.result
            }
        case 'CHECK_BY_PINCODE_USER':
            return {
                ...state,
                userResult: action.result
            }
        case 'CHECK_ERROR':
            return {
                error: action.error
            }
        default:
            return state
    }
}

export default availabilityReducer;