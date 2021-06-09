import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";


export const register = createAsyncThunk(
    'user/register', // actionType
    async (payload) => {
        const data = await userApi.register(payload)
        console.log('data:', data);
        localStorage.setItem('access_token', data.jwt)
        localStorage.setItem('user', JSON.stringify(data.user))
        console.log('data.user:', data.data.user);
        return data.data.user
    }
)
const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {}
    },
    reducers: {},
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payload
        }
    }
})

const { reducer } = userSlice;
export default reducer;
