import React, {Component, Fragment} from 'react' // 占位符
import './App.css'
import Todolist from './view/Todolist'

class App extends Component {
    // 构造函数
    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.state = {
            inputValue: '',
            list: []
        }
    }

    handleInputChange(e) {
        const value = e.target.value
        // console.log(e.target.value)
        this.setState(() => ({
            inputValue: value
        }))
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
        console.log(index)
        // const listNew = [...this.state.list]
        // listNew.splice(index, 1)
        this.setState((prevState) => {
            const listNew = [...prevState.list]
            listNew.splice(index, 1)
            return {listNew}
        })
        // this.setState({
        //     list: listNew
        // })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input type="text"
                           value={this.state.inputValue}
                           onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleSubmit}>提交</button>
                </div>
                <Todolist/>
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
