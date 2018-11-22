import React, {Component, Fragment} from 'react' // 占位符
import './App.css';
import Todolist from './view/Todolist';
import axios from 'axios';
import {Button, Input} from 'antd';
import store from './redux';

class App extends Component {
    // 构造函数
    constructor(props) {
        super(props)
        console.log(store)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.hanleStoreChange = this.hanleStoreChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        store.subscribe(this.hanleStoreChange)
        // this.state = {
        //     inputValue: '',
        //     list: []
        // }
    }

     handleInputChange(e) {
        // const values = e.target.value
        // const action = {
        //     type: 'changeType',
        //     value: e.target.value
        // }
        // store.dispatch(action)
        // const value = this.inputRef.value
        console.log(e.target.value)
        // this.setState(() => ({
        //     inputValue: value
        // }))
        // this.setState({
        //     inputValue: e.target.value
        // })
    }

    handleSubmit() {
        // console.log(this.state.inputValue)
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // })
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }

    handleDelete(index) {
        // immutable
        // console.log(index)
        // const listNew = [...this.state.list]
        // listNew.splice(index, 1)
        this.setState((prevState) => {
            const listNew = [...prevState.list]
            listNew.splice(index, 1)
            // console.log(listNew)
            return {list: listNew}
        })
        // this.setState({
        //     list: listNew
        // })
    }

    hanleStoreChange() {
    }

    componentDidMount() {
        axios.get('/api/todolist')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <Fragment>
                <div>
                    {/*<input type="text"*/}
                    {/*value={this.state.inputValue}*/}
                    {/*onChange={this.handleInputChange}*/}
                    {/*ref={(inputRef) => {*/}
                    {/*this.inputRef = inputRef*/}
                    {/*}}*/}
                    {/*/>*/}
                    <Input placeholder="请输入"
                           style={{width: '300px'}}
                           value={this.state.inputValue}
                           onChange={this.handleInputChange}
                    />
                    {/*<button onClick={this.handleSubmit}>提交</button>*/}
                    <Button type="primary" onClick={this.handleSubmit}>提交</Button>
                </div>
                {/*<Todolist/>*/}
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            // return <li key={index} onClick={this.handleDelete.bind(this,index)}>{item}</li>
                            return (
                                <Todolist
                                    item={item}
                                    key={index}
                                    deletItem={this.handleDelete}
                                    index={index}/>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

}

export default App
