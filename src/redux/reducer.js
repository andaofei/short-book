const defaultState = {
    inputValue: '1212',
    list: [1, 2, 3]
}

export default (state = defaultState, action) => {
    console.log(state, action)
    if (action.type === 'changeType') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
    }
    console.log(state, action)
    return state;
}
