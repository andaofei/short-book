import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        // this.handleChange = this.handleChange.bind(this)
        this.state = {
            inputValue: '1111'
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        <input type="text" onChange={this.handleInputChange.bind(this)} value={this.state.inputValue}/>
                    </p>
                </header>
            </div>
        );
    }

    handleInputChange(e) {
        console.log(e.target.value)
        this.setState({
            inputValue: e.target.value
        })
        console.log(this.state.inputValue)
    }
}

export default App;
