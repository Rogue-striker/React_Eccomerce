import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../Features/ProductSlice";
import UserReducer from './../Features/UserSlice';

export  default configureStore({
    reducer: {
        user: UserReducer,
        products : ProductReducer,
    },
});

