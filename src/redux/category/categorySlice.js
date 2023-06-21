import { createSlice } from '@reduxjs/toolkit';
import { categories } from '../../Constants/constants';

const categorySlice = createSlice({
  name: 'category',
  initialState: categories[0],
  reducers: {
    selectCategory: (state, action) => action.payload,
  },
});

export const { selectCategory } = categorySlice.actions;
export default categorySlice.reducer;
