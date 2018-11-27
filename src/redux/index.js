import {createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import todoSagas from './saga'
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
);
// 创建一个store
const store = createStore(
    reducer,
    enhancer
    // window.devToolsExtension ? window.devToolsExtension() : f => f
    );
// then run the saga
sagaMiddleware.run(todoSagas)

export default store
