import { createStore, combineReducers } from 'redux'
import bars from './reducers/bars'

let store = createStore(combineReducers({
    bars
}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;