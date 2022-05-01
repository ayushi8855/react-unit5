
import { ADD_COUNT, ADD_TODO,  ADD_TODO_DELETE_DATA, TOGGLE } from "./action";
export const counterReducer = (store,{type,payload})=>
{
    switch(type)
    {
        case ADD_COUNT:
            return {...store,counter:store.counter + payload}
            case ADD_TODO:
            return {...store,todos:payload}
            case TOGGLE:
                return {...store,todos : payload}
            case ADD_TODO_DELETE_DATA:
            return {...store,todos : payload}
            default :
            return store
    }
}
