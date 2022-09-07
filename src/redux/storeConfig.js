import {configureStore} from '@reduxjs/toolkit'
import menuReducer from './reducers/menu'

export default configureStore({
    reducer: {
        menu: menuReducer,
    },
})
