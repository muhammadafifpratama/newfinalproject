const initial_state = { username: '', error: '', loading: false, password: '' }

export default (state = initial_state, action) => {
    switch (action.type) {
        case 'input': console.log(state);
            return { ...state, [action.payload.prop]: action.payload.value }
        case 'sukses': console.log(action.payload);
            return { initial_state }
        case 'fail': return { ...state, loading: false, error: action.payload }
        case 'loading': return { ...state, loading: true, error: '' }
        default: return state
    }
}