const defaultState = {
    inputValue: '',
    list: []
}
// reducer 只能接受 state不能改变
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
    // console.log(state, action)
    return state;
}
