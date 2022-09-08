import {createSlice} from '@reduxjs/toolkit'
import MENUS from '../../consts/menu'

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        value: MENUS,
    },
    reducers: {
        updateMenu: (state, action) => {
            state.value = action.payload
        },
    },
})

export const {updateMenu} = menuSlice.actions
export default menuSlice.reducer
