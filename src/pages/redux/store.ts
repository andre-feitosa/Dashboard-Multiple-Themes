import { configureStore } from '@reduxjs/toolkit'
import colors from './colors'

export default configureStore({
    reducer: {
        colors: colors
    }
})