import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://course-api.com/react-useReducer-cart-project";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (thunkAPI) => {
    try {
      const res = await axios.get(baseUrl);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  basket: [],
  initial: [],
  isLoading: false,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const { id } = action.payload;
      const itemInCart = state.basket.find((item) => item.id === id);
      if (itemInCart) {
        itemInCart.count++;
      } else {
        state.basket.push({ ...action.payload, count: 1 });
      }
    },
    incCount: (state, action) => {
      const itemInBasket = state.basket.find((x) => x.id === action.payload);
      itemInBasket.count++;


    },
    decCount: (state,action) => {
        const itemInBasket = state.basket.find((x) => x.id === action.payload)
        itemInBasket.count--
      if (itemInBasket) {
        itemInBasket.count--
      } else {
        return
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.initial = action.payload;
      })
      .addCase(getAllProducts.pending, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const { addToBasket,incCount,decCount } = basketSlice.actions;

export default basketSlice.reducer;
