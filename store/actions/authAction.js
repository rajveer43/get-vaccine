import axios from 'axios';
import { setAlert } from './alertAction';

//sign up user
export const registerUser = (data) => async dispatch => {
    try {

        data.age = parseInt(data.age);

        let config = {
            method: 'POST',
            url: 'https://vaccine-notifier-api.agarwal.work/api/auth/register',
            data: data,
        }

        await (await axios(config)).data;
        await dispatch({
            type: 'SIGNUP_SUCCESS',
            userRegistered: true
        })
        dispatch(setAlert({
            alertType: 'success',
            content: 'Registered successfully'
        }))

    } catch (error) {
        console.log(error.response.data);
        await dispatch({
            type: 'SIGNUP_ERROR',
            error: error
        })
        dispatch(setAlert({
            alertType: 'danger',
            content: error.response.data
        }))
    }
}

//sign in user and load user
export const loginUser = (data) => async dispatch => {
    try {
        //sign in user
        let config = {
            method: 'POST',
            url: 'https://vaccine-notifier-api.agarwal.work/api/auth/login',
            data: data,
        }

        let user = await (await axios(config)).data;

        if (user.Token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${user.Token}`
        } else {
            throw new Error("Token not found")
        }
        //store jwt token in local storage
        localStorage.setItem('token', user.Token);

        //load user using token
        let userConfig = {
            method: 'GET',
            url: 'https://vaccine-notifier-api.agarwal.work/api/auth/user',
        }

        let userData = await (await axios(userConfig)).data;
        await dispatch({
            type: 'SIGNIN_SUCCESS',
            user: userData
        })

        dispatch(setAlert({
            alertType: 'success',
            content: 'Signed in successfully'
        }))

    } catch (error) {
        console.log(error.response.data);
        await dispatch({
            type: 'SIGNIN_ERROR',
            error: error
        })
        dispatch(setAlert({
            alertType: 'danger',
            content: error.response.data
        }))
    }
}

//load user
export const loadUser = (data) => async dispatch => {
    try {
        //load user using token
        let userConfig = {
            method: 'GET',
            url: 'https://vaccine-notifier-api.agarwal.work/api/auth/user',
            headers: {
                'Authorization': `Bearer ${data}`
            }
        }

        let userData = await (await axios(userConfig)).data;
        await dispatch({
            type: 'SIGNIN_SUCCESS',
            user: userData,
        })
    } catch (error) {
        console.log(error);
        await dispatch({
            type: 'SIGNIN_ERROR',
            error: error,
        })
    }
}
export const logOut = () => async dispatch => {
    try {
        localStorage.removeItem('token');
        await dispatch({
            type: 'LOGOUT_SUCCESS',
        })
        dispatch(setAlert({
            alertType: 'success',
            content: 'Logged out successfully'
        }))
    } catch (error) {
        console.log(error);
        await dispatch({
            type: 'LOGOUT_ERROR',
            error: error
        })
    }
}

export const updateUser = (data) => async dispatch => {
    try {
        let token = localStorage.getItem('token');
        let userConfig = {
            method: 'PATCH',
            url: 'https://vaccine-notifier-api.agarwal.work/api/auth/user',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data: data
        }

        let userData = await (await axios(userConfig)).data;
        await dispatch({
            type: 'UPDATE_USER_SUCCESS',
            user: userData
        })
        dispatch(setAlert({
            alertType: 'success',
            content: 'Details updated successfully'
        }))
    } catch(error) {
        console.log(error.response.data);
        await dispatch({
            type: 'UPDATE_USER_ERROR',
            error: error
        })
        dispatch(setAlert({
            alertType: 'danger',
            content: error.response.data
        }))
    }
}

export const updatePassword = (data) => async dispatch => {
    try {
        let config = {
            method: 'POST',
            url: 'https://vaccine-notifier-api.agarwal.work/api/auth/reset_password',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        }
        await axios(config);
        await dispatch({
            type: 'UPDATE_PASS_SUCCESS',
        })
        dispatch(setAlert({
            alertType: 'success',
            content: 'Check your mail to reset password'
        }))
    } catch(error) {
        console.log(error);
        await dispatch({
            type: 'UPDATE_PASS_ERROR',
            error: error
        })
        dispatch(setAlert({
            alertType: 'danger',
            content: error.response.data
        }))
    }
}   