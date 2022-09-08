import React from 'react'
import {ExpandLess, ExpandMore} from '@mui/icons-material'
import {Collapse, ListItemButton, ListItemText} from '@mui/material'
import toTitleCase from '../../utils/toTitleCase'

const AtomCollapsableListItem = ({title, children, isAllowed, sx = {}}) => {
    const [open, setOpen] = React.useState(false)

    return (
        <>
            <ListItemButton
                disabled={!isAllowed}
                sx={sx}
                onClick={() => setOpen((prev) => !prev)}
            >
                <ListItemText primary={toTitleCase(title)} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                {children}
            </Collapse>
        </>
    )
}

export default AtomCollapsableListItem
