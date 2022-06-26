import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loginStatus : false,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser : (state, action) => {
            state.user = null;
        },
        setLoginStatus : (state, action) => {
            state.loginStatus = action.payload;
        },
    }
})

export default userSlice.reducer;