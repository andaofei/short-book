const defaultState = {
    inputValue: '11111',
    list: [1,2,3]
}
// reducer 只能接受 state 不能改变
export default (state = defaultState, action) => {
    console.log(action)
    if (action.type === 'changeType') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === 'get_init_list') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.value
        return newState
    }
    if (action.type === 'add_item') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === 'delete_item') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value, 1)
        return newState
    }
    return state;
}
