import { createSlice } from '@reduxjs/toolkit';
import { bool } from 'yup';


const initialState = JSON.parse(localStorage.getItem('userData')) || {
	userData: {},
	isLogged: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		registration: (state, { payload }) => {
			const data = {
				userData: payload,
				isLogged: false
			}
			localStorage.setItem('userData', JSON.stringify(data));
			state.userData = data
		},
		logIn: (state, { payload }) => {
			if (payload.remember) localStorage.setItem('userData', JSON.stringify({
				userData: state.userData,
				isLogged: true
			}));
			state.isLogged = true;
		},
		logOut: (state) => {
			localStorage.setItem('userData', JSON.stringify({
				userData: state.userData,
				isLogged: false,
			}));
			state.isLogged = false
		},
	}
})

export const { logIn, logOut, registration } = authSlice.actions;
export default authSlice.reducer;