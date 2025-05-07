import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



const initialState = {
    isAuthenticated: false,
    user: null,
    isInitialized: false
  };

  export const initializeUser = createAsyncThunk(
    'user/initialize',
    async (_, { dispatch }) => {
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');
      
      const parsedUser = JSON.parse(user); 
  
      if (token && user) {
        dispatch(setLogin({ token, user: parsedUser }));
        // dispatch(setLogin(token));
      } else {
        dispatch(setLogout());
      }
    }
  );


  const slice = createSlice({
    name: 'user',
    initialState,
  
    reducers: {
      setLogin(state, action) {
        const { token, user } = action.payload;
        state.user = user;
        state.isAuthenticated = true;
        // console.log('state', state, 'action', action.payload);
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        
      },
      setLogout(state) {
        state.user = null;
        state.isAuthenticated = false;
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      },
      updateUser(state, action) {
        state.user = action.payload;
        state.isAuthenticated = true;
      },
    }
});


// Reducer
export default slice.reducer;

// Actions
export const { setLogin, updateUser, setLogout} = slice.actions;
