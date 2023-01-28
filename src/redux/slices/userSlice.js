import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';

export const loginThunk = createAsyncThunk(
	'user/loginThunk',
	async ({ email, password }, { dispatch, rejectWithValue }) => {
		try {
			const auth = getAuth();

			const { user, ...data } = await signInWithEmailAndPassword(
				auth,
				email,
				password,
			);
			localStorage.setItem(
				'userData',
				JSON.stringify({ email, id: user.uid, token: user.accessToken }),
			);

			dispatch(setUser({ email, id: user.uid, token: user.accessToken }));
		} catch (error) {
			if (error.code === 'auth/user-not-found') {
				return rejectWithValue('Неправильний email або пароль');
			} else {
				return rejectWithValue('Помилка при спробі увійти в систему');
			}
		}
	},
);

export const registerThunk = createAsyncThunk(
	'user/registerThunk',
	async ({ email, password }, { dispatch, rejectWithValue }) => {
		try {
			const auth = getAuth();
			await createUserWithEmailAndPassword(auth, email, password);
			dispatch(loginThunk({ email, password }));
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				return rejectWithValue('Користувач з цим email вже існує');
			} else {
				return rejectWithValue('Помилка при реєстрації');
			}
		}
	},
);

export const logoutThunk = createAsyncThunk(
	'user/logoutThunk',
	async (_, { dispatch }) => {
		try {
			const auth = getAuth();

			await signOut(auth);
			localStorage.removeItem('userData');
			dispatch(removeUser());
		} catch (e) {
			alert('Помилка при виході з системи');
		}
	},
);

const initialState = {
	email: null,
	token: null,
	id: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action) {
			const { email, token, id } = action.payload;
			state.email = email;
			state.token = token;
			state.id = id;
		},
		removeUser(state) {
			state.email = null;
			state.token = null;
			state.id = null;
		},
	},
	extraReducers: {
		[loginThunk.rejected]: (state, action) => {
			alert(action.payload);
		},
		[registerThunk.fulfilled]: (state, action) => {
			console.log('Зареєстровано в системі');
		},
		[registerThunk.rejected]: (state, action) => {
			alert(action.payload);
		},
	},
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
