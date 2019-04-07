import { createStore, combineReducers } from 'react-redux'

let store = createStore(combineReducers({
    bars: [1,2,3]
}),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;