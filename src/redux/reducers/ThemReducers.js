import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    themeColor: {
        statusBarColor: '#E29834',
        headerColor: '#FFAD3B',
    },
}

export const themSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        updateTheme: (state, actions) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.themeColor = actions.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { updateTheme } = themSlice.actions

export default themSlice.reducer