import React from 'react'
import {Box, Grid} from '@mui/material'
import {useSelector} from 'react-redux'

import {DrawerHeader} from '../utils/globalStyle'
import MoleculeToggleListItem from '../components/molecules/ToggleListItem'

const MainView = () => {
    const menus = useSelector((state) => state.menu.value)

    return (
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
            <DrawerHeader />

            <Grid container spacing={2} columns={24}>
                {menus &&
                    menus.map(({childs, id, isAllowed, isShowed}, index) => {
                        return (
                            <MoleculeToggleListItem
                                isParent
                                childs={childs}
                                id={id}
                                index={index}
                                isAllowed={isAllowed}
                                isShowed={isShowed}
                                key={`main-view-toggle-item-${index}`}
                            />
                        )
                    })}
            </Grid>
        </Box>
    )
}

export default MainView
