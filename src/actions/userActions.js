import axios from 'axios';
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
} from '../constants/userConstants';
import { loadEvents } from './eventActions';

// function to login the user to request to the backend
export const login = (email, password) => async (dispatch) => {
    try {
        // dispatches the user login request type action
        dispatch({
            type: USER_LOGIN_REQUEST,
        });

        // configure variable to store the request header
        const config = {
            headers: {
                'Content-type': 'application/json',
            },
        };

        // make request to the backend for user login. The request is a POST request
        const { data } = await axios.post(
            '/api/users/login/',
            {
                username: email,
                password: password,
            },
            config
        );

        // If the request has a valid response from the backend,
        // the action type success is dipatched with the payload
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        });

        dispatch(loadEvents());

        // storing the user info in the local storage after stringifying the json response
        localStorage.setItem('token', JSON.stringify(data.token));
    } catch (error) {
        // if any error response is encountered, a fail action is dispatched
        // with the corresponding error message as payload
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const signup = (email, password) => (dispatch) => {
    console.log('Signup');
    console.log(email, password);
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch({
        type: USER_LOGOUT,
    });
};
