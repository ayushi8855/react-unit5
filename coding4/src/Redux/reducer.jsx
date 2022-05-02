import { isLoggedIn } from "./actions";

const init = {auth: false}
;

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case isLoggedIn :
          return {...store,auth:store.auth = !payload}
    default:
      return store;
  }
}