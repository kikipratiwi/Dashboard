import {createSlice} from '@reduxjs/toolkit'

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {},
    reducers: {
        toggleAllow: (state, action) => {},
        toggleShow: (state, action) => {},
    },
})

export const {toggleAllow, toggleShow} = menuSlice.actions
export default menuSlice.reducer
