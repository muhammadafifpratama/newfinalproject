const initial_state = { checked: false }

export default (state = initial_state, action) => {
    switch (action.type) {
        case 'sukses': return { ...action.payload, checked: true }
        case 'fail': return { checked: true }
        default: return state
    }
}