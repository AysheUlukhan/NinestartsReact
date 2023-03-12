import { createSlice } from '@reduxjs/toolkit'
import { portfolioData } from '../../portfolioData';

const initialState = {
    value: "",
    filters: [],
    loading: false,
    error: null
}

// export const gallery_filter = (itemData) => {
//     const filterData = portfolioData.filter((item) => item.id === itemData);
//     return(filterData)
// }




export const filterData = (data) => {
    portfolioData.filter((filter) => filter.title === data);
}
console.log(portfolioData)


export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(filterData.pending, (state) => {
            state.loading = true;

        });
        builder.addCase(filterData.fulfilled, (state, action) => {
            state.filters = action.payload;
            state.loading = false;
        });
        builder.addCase(filterData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default filterSlice