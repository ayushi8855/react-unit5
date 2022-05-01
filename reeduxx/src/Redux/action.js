export const ADD_COUNT = "ADD_COUNT"
export const ADD_TODO = "ADD_TODO"
export const TOGGLE = "TOGGLE"

export const ADD_TODO_DELETE_DATA = "ADD_TODO_DELETE_DATA"
export const addCount = (data)=>
{
    return {
        type:ADD_COUNT,
        payload : data
    }
}



export const addTodo = (data)=>
{
    return {
        type:ADD_TODO,
        payload : data
    }
}
export const addDelete = (data)=>
{
    return {
        type:ADD_TODO_DELETE_DATA,
        payload : data
    }
}
export const addtoggle = (data)=>
{
    return {
        type:TOGGLE,
        payload : data
    }
}