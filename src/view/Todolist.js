import React, {Component} from 'react'

class Todolist extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        const {deletItem, index} = this.props;
        // this.props.deletItem(this.props.index)
        // console.log(this.props.deletItem)
        deletItem(index)
    }
    render() {
        const {item} = this.props;
        return (
            <div>
                <p onClick={this.handleClick}>{item}</p>
            </div>
        )
    }
}

export default Todolist
