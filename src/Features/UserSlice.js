import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loginStatus : false,
        cart : [],
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },

        setLoginStatus : (state, action) => {
            state.loginStatus = action.payload;
        },
        addToCart : (state, action) =>{
            [
                ...state,
                action.payload,
            ]
        }

    }
})

export const {setUser, setLoginStatus, addToCart} = userSlice.actions;
export default userSlice.reducer;