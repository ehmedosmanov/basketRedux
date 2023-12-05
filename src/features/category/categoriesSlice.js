import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const url = 'https://northwind.vercel.app/api/categories'

export const getCategories = createAsyncThunk(
    'category/getCategories',
    async (thunkAPI) => {
      try {
        const resp = await axios(url);
        return resp.data;
      } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong');
      }
    }
  );


export const createCategory = createAsyncThunk(
    'category/createCategory',
    async (category,thunkAPI) => {
        try {
            const resp = await axios.post(url, category)
            return resp.data
        } catch (error) {
            return thunkAPI.rejectWithValue('ERROR')
        }
    }
)


export const updateCategory = createAsyncThunk(
    'category/updateCategory',
    async({id,name}, thunkAPI) => {
        try {
            const resp = await axios.put(`${url}/${id}`, {
                name: name
            })
            return resp.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Error')
        }
    }
)