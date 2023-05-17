/* eslint-disable no-sequences */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreeting = createAsyncThunk('greeting', async () => {
  const response = await axios.get('http://127.0.0.1:3000/api/v1/greetings');
  const { greeting } = response.data;
  return greeting;
});

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: '',
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.pending, (state) => {
      state.loading = true;
    }),
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.loading = false;
      state.greeting = action.payload;
    }),
    builder.addCase(fetchGreeting.rejected, (state, action) => {
      console.log('error: ', action.payload);
      state.error = true;
    });
  },
});

export default greetingSlice.reducer;
