const initialState = {
    filter: '',
    selectedUserId: null,
    users: [],
    todos: [],

    loadingUsers: false,
    loadingTodos: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'users/load/start':
            return {
                ...state,
                loadingUsers: true
            }
        case 'users/load/success':
            return {
                ...state,
                users: action.payload,
                loadingUsers: false
            }
        case 'user/select':
            return {
                ...state,
                selectedUserId: action.payload
            }
        case 'todos/load/start':
            return {
                ...state,
                loadingUsers: true
            }
        case 'todos/load/success':
            return {
                ...state,
                todos: action.payload,
                loadingTodos: false
            }
        case 'filter/set':
            return {
                ...state,
                filter: action.payload
            }
        default:
            return state
    }
}