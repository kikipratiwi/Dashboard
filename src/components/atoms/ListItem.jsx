import React from 'react'
import {ListItem, ListItemButton, ListItemText} from '@mui/material'

import toTitleCase from '../../utils/toTitleCase'

const AtomListItem = ({title}) => {
    return (
        <ListItem key={title} disablePadding sx={{display: 'block'}}>
            <ListItemButton
                sx={{
                    minHeight: 48,
                    px: 2.5,
                }}
            >
                <ListItemText primary={toTitleCase(title)} />
            </ListItemButton>
        </ListItem>
    )
}

export default AtomListItem
