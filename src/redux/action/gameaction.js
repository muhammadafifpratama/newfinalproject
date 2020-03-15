
export const kirimid = (data) => {
    return {
        type: 'click',
        payload: data
    }
}
export const searching = (kocheng) => {
    return {
        type: 'search',
        payload: kocheng
    }
}
