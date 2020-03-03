const initial_state = {
    id: 0
}

export const gamereducer = (asd = initial_state, action) => {
    switch (action.type) {
        case 'click':
            console.log(action.payload);
            return { ...asd, id: action.payload }
        default:
            return asd
    }
}