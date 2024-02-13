import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { requestLogin, requestLogout, requestRefreshUser, requestRegister, setToken } from 'servises/api';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      const loginData = await requestLogin(formData);
      return loginData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const authData = await requestRegister(formData);
      return authData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      setToken(token);
      console.log(token);
      const authData = await requestRefreshUser();
      return authData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    coditions: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (!token) {
        return false;
      }
      return true;
    },
  }
);
export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await requestLogout();
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  token: null,
  user: {
    email: null,
    name: null,
  },
  authenticated: false,
  isLoading: false,
  error: false,
};

const authSlice = createSlice({
  name: 'auth',

  initialState: INITIAL_STATE,

  extraReducers: builder =>
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })

      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })

      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.user = action.payload;
      })

      .addCase(logoutThunk.fulfilled, state => {
        //return INITIAL_STATE;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoading = false;
        state.authenticated = false;
      })
      .addMatcher(
        isAnyOf(
          logoutThunk.pending,
          registerThunk.pending,
          loginThunk.pending,
          refreshUserThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          logoutThunk.rejected,
          registerThunk.rejected,
          loginThunk.rejected,
          refreshUserThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const authReducer = authSlice.reducer;