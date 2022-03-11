import { createSlice } from '@reduxjs/toolkit'
import { yellowTheme } from '../../utils/ColorModel'

const initialState = {
    themeColor: yellowTheme,
}

export const themSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        updateTheme: (state, actions) => {
            state.themeColor = actions.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { updateTheme } = themSlice.actions

export default themSlice.reducer