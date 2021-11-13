const initialState = {
    allTask: null,
}
export const TaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_TASK":
            return { ...state, allTask: action.payload };
        default: return state

    }
}