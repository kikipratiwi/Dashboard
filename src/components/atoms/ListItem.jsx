import React from 'react'
import {ListItem, ListItemButton, ListItemText} from '@mui/material'
import toTitleCase from '../../utils/toTitleCase'

const AtomListItem = ({title, isAllowed, sx}) => {
    return (
        <ListItem
            disabled={!isAllowed}
            disablePadding
            key={title}
            sx={{display: 'block'}}
        >
            <ListItemButton
                sx={{
                    minHeight: 48,
                    px: 2.5,
                    ...sx,
                }}
            >
                <ListItemText primary={toTitleCase(title)} />
            </ListItemButton>
        </ListItem>
    )
}

export default AtomListItem
