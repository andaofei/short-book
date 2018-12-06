import React, {Component, Fragment} from 'react' // 占位符
import './App.css';

import Header from './commom/header'
class App extends Component {
    // 构造函数
    constructor(props) {
        super(props)
    }


    componentDidMount() {

    }

    render() {
        return (
            <Fragment>
                <div>
                    <Header/>
                </div>
            </Fragment>
        )
    }

}

export default App
