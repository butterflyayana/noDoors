import { createSlice } from '@reduxjs/toolkit'

const heartSlice = createSlice({
    name: 'heart',
    initialState: {
        hearts: []
    },
    reducers: {
        addToHeart: (state, action) => {
            const heart = action.payload;
            state.hearts = [...state.hearts, heart]
        }
    }
})

export const { addToHeart } = heartSlice.actions
export const heartReducer = heartSlice.reducer