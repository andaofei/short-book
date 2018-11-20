import React, {Component, Fragment} from 'react'; // 占位符
import './App.css';

class App extends Component {
    // 构造函数
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
    }

    handleInputChange(e) {
        console.log(e.target.value)
        this.setState({
            inputValue: e.target.value
        })
    }

    handleSubmit() {
        console.log(this.state.inputValue)
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleDelete(index) {
        // immutable
        console.log(index)
        const listNew = [...this.state.list]
        listNew.splice(index, 1)
        this.setState({
            list: listNew
        })
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input type="text"
                           value={this.state.inputValue}
                           onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleSubmit.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index} onClick={this.handleDelete.bind(this,index)}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }

}

export default App;
