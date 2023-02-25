import {
    ADD_TODO,
    SET_TODO_INPUT,
    EDIT_TODO,
    UPDATE_TODO,
    DELETE_TODO,
} from './Constants'

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})

export const addTodo = payload => ({
    type: ADD_TODO,
    payload
})

export const deleteTodo = payload => ({
    type: DELETE_TODO,
    payload
})

export const editTodo = payload => ({
    type: EDIT_TODO,
    payload
})

export const updateTodo = payload => ({
    type: UPDATE_TODO,
    payload
})