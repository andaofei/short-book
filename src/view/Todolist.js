import React, {Component} from 'react'
import PropTypes from 'prop-types'
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

Todolist.propTypes = {
    item: PropTypes.string,
    deletItem: PropTypes.func,
    index: PropTypes.number
    // index: PropTypes.number.isRequired // 必填
}

Todolist.defultProps = {
    item: '1',
    deletItem: '2',
    index: 3 // 必填
}
export default Todolist
