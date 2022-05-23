import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'color',
    initialState: {
        backgroundColor: 'light-background',
        themeColor: 'blue-color'
    },
    reducers: {
        replaceBackground(state, { payload }) {
            return {...state, backgroundColor: payload}
        },
        replaceThemes(state, { payload }) {
            return {...state, themeColor: payload}
        }
    }
})

export const { replaceBackground, replaceThemes } = slice.actions;

export const selectColors = (state: { colors: any; }) => state.colors

export default slice.reducer;

