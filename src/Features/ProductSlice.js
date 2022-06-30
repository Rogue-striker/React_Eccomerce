import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
}

const Productslice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.cart.push(action.payload);
        }
    }
});

export default Productslice.reducer;

