const todoReducer = (state = {}, action) => {
    switch (action.type) {
    case 'ADD_TODO':
        return {
            id: action.id,
            task: action.task,
            done: false
        };
    case 'REMOVE_TODO':
        return state.id !== action.id;
    case 'TOGGLE_TODO':
        if (state.id === action.id) {
            return {
                ...state,
                done: !state.done
            };
        }
        return state;
    default:
        return state;
    }
};

const todosReducer = (state = [], action) => {
    switch (action.type) {
    case 'ADD_TODO':
        return [...state, todoReducer(state, action)];
    case 'REMOVE_TODO':
        return state.filter(s => todoReducer(s, action));
    case 'TOGGLE_TODO':
        return state.map(s => todoReducer(s, action));
    default:
        return state;
    }
};

export default todosReducer;