export const onketik = (prop, value) => {
    return {
        type: 'input',
        payload: {
            prop, value
        }
    }
}

export const ceklogin = () => {
    return async (dispatch) => {
        try {
            const username = await localStorage.getItem('username');
            if (!username) {
                return dispatch({ type: 'fail' })
            }

            dispatch({
                type: 'sukses',
                payload: { username }
            })
        } catch (err) {
            dispatch({ type: 'fail' })
        }
    }
}

export const login = ({ username }) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'loading' })

            await localStorage.setItem('username', username);
            dispatch({
                type: 'sukses',
                payload: { username }
            })
        } catch (err) {
            dispatch({
                type: 'fail',
                payload: err.response ? err.response.data.message : err.message
            })
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        await localStorage.removeItem('username')
        dispatch({ type: 'fail' })
    }
}

// export const confirmLogin = (user) => {
//     return {
//         type: LOGIN_SUCCESS,
//         payload: user
//     }
// }

// export const checkKeepLogin = (token) => {
//     return (dispatch) => {
//         var options = {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         }

//         axios.post(API_URL + '/user/keeplogin', null, options)
//             .then(res => {
//                 console.log(res.data)
//                 dispatch({
//                     type: LOGIN_SUCCESS,
//                     payload: res.data
//                 })
//             }).catch(err => {
//                 localStorage.removeItem('token')
//                 console.log(err.response.data)
//                 dispatch({
//                     type: LOGOUT_USER
//                 })
//             })
//     }
// }