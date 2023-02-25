import {
    SET_TODO_INPUT, 
    ADD_TODO,
    EDIT_TODO,
    UPDATE_TODO,
    DELETE_TODO
} from './Constants'

const initState = {
    todos: [],
    todoInput: '',
    editTodo: false
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }

        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case EDIT_TODO: 
            return {
                editTodo: action.payload,
                todoInput: state.todos[action.payload],
                todos: [...state.todos]
            }
        case UPDATE_TODO:
            const updateTodos = [...state.todos]
            if(action.payload === "") {
                return {
                    ...state,
                    todos: [...state.todos], 
                    editTodo:  false
                }
            } else {
                updateTodos[state.editTodo] = action.payload
                return {
                    ...state,
                    todos: updateTodos,
                    editTodo: false
                }
            }

        case DELETE_TODO:
            const newTodos = [...state.todos];
            newTodos.splice(action.payload, 1)
            return {
                ...state, 
                todos: newTodos
            }
        default:
            throw new Error('avakdjhd')
    }
}

export { initState }
export default reducer