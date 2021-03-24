import { createStore } from 'redux';

const defaultState = {
  name: "Cookies",
  count: 0
}

const store = createStore(defaultStore)

export default store