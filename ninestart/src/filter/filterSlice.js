import { createSlice } from '@reduxjs/toolkit'
import { portfolioData } from '../portfolioData';

const initialState = {
    value: "",
    filters: [],
    loading: false,
    error: null
}

export const gallery_filter = (itemData) => {
    const filterData = portfolioData.filter((filter) => filter.title === itemData);
}
console.log(portfolioData)

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(gallery_filter.pending, (state) => {
            state.loading = true;

        });
        builder.addCase(gallery_filter.fulfilled, (state, action) => {
            state.filters = action.payload;
            state.loading = false;
        });
        builder.addCase(gallery_filter.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default filterSlice.reducer