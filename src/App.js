import React, {Component, Fragment} from 'react' // 占位符
import './App.css';
import Todolist from './view/Todolist';
// import axios from 'axios';
import {Button, Input} from 'antd';
// import store from './redux';
import {connect} from 'react-redux'
// import {getTodoList, initListAction, getInitList} from './redux/actionCreators'
// a ui component
const App = (props) => {
    const {inputValue, handleInputChange, handleSubmit, handleDelete } = props;
    return (
        <Fragment>
            <div>
                <Input placeholder="请输入"
                       style={{width: '300px'}}
                       value={inputValue}
                       onChange={handleInputChange}
                />
                <Button type="primary" onClick={handleSubmit}>提交</Button>
            </div>
            {
                props.list.map((item, index) => {
                    return (
                        <Todolist
                            item={item}
                            key={index}
                            deletItem={handleDelete}
                            index={index}/>
                    )
                })
            }
        </Fragment>
    )
}

// class App extends Component {
//     // 构造函数
//     constructor(props) {
//         super(props)
//         this.state = store.getState()
//         console.log(this.state)
//         // this.handleInputChange = this.handleInputChange.bind(this)
//         this.hanleStoreChange = this.hanleStoreChange.bind(this)
//         // this.handleSubmit = this.handleSubmit.bind(this)
//         // this.handleDelete = this.handleDelete.bind(this)
//
//         store.subscribe(this.hanleStoreChange)
//         // this.state = {
//         //     inputValue: '',
//         //     list: []
//         // }
//     }
//
//     //  handleInputChange(e) {
//     //     console.log(e.target.value)
//     //      const action = {
//     //          type: 'changeType',
//     //          value: e.target.value
//     //      }
//     //      store.dispatch(action)
//     // }
//
//     // handleSubmit() {
//     //     this.setState((prevState) => ({
//     //         list: [...prevState.list, prevState.inputValue],
//     //         inputValue: ''
//     //     }))
//     // }
//
//     // handleDelete(index) {
//     //     // immutable
//     //     this.setState((prevState) => {
//     //         const listNew = [...prevState.list]
//     //         listNew.splice(index, 1)
//     //         return {list: listNew}
//     //     })
//     // }
//
//     hanleStoreChange() {
//         console.log(store.getState())
//         this.setState(store.getState())
//     }
//
//     componentDidMount() {
//         // const action = getTodoList()
//         // const action = getInitList()
//         // store.dispatch(action)
//     }
//
//     render() {
//         const {inputValue, handleInputChange, handleSubmit, handleDelete } = this.props;
//         return (
//             <Fragment>
//                 <div>
//                     <Input placeholder="请输入"
//                            style={{width: '300px'}}
//                            value={inputValue}
//                            onChange={handleInputChange}
//                     />
//                     <Button type="primary" onClick={handleSubmit}>提交</Button>
//                 </div>
//                     {
//                         this.props.list.map((item, index) => {
//                             return (
//                                 <Todolist
//                                     item={item}
//                                     key={index}
//                                     deletItem={handleDelete}
//                                     index={index}/>
//                             )
//                         })
//                     }
//             </Fragment>
//         )
//     }
// }
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
         handleInputChange(e) {
            console.log(e.target.value)
             const action = {
                 type: 'changeType',
                 value: e.target.value
             }
             dispatch(action)
        },
        handleSubmit() {
            const action = {
                type: 'add_item'
            }
            dispatch(action)
        },
        handleDelete(index) {
            const action = {
                type: 'delete_item',
                value: index
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
