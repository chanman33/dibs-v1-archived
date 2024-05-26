// features/form/formSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { submitForm } from './formAPI';

export const submitFormAsync = createAsyncThunk(
  'form/submitForm',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await submitForm(formData);
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const formSlice = createSlice({
  name: 'form',
  initialState: {
    formData: {
      form_first_name: '',
      form_last_name: '',
      form_email: '',
      form_phone: '',
      form_address: '',
      form_city: '',
      form_state: '',
    },
    status: 'idle',
    error: null,
  },
  reducers: {
    updateForm: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitFormAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitFormAsync.fulfilled, (state) => {
        state.status = 'succeeded';
        state.formData = {
          form_first_name: '',
          form_last_name: '',
          form_email: '',
          form_phone: '',
          form_address: '',
          form_city: '',
          form_state: '',
        };
      })
      .addCase(submitFormAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { updateForm } = formSlice.actions;

export default formSlice.reducer;
