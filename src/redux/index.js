import {createStore} from 'redux';
import reducer from './reducer'
// 创建一个store
const store = createStore(
    reducer,
    window.devToolsExtension ? window.devToolsExtension() : f => f
    );

export default store
