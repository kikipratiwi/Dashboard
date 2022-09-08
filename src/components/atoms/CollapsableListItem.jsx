import React from 'react'
import {ExpandLess, ExpandMore} from '@mui/icons-material'
import {Collapse, ListItemButton, ListItemText} from '@mui/material'
import toTitleCase from '../../utils/toTitleCase'

const AtomCollapsableListItem = ({
    children,
    childs,
    isAllowed,
    sx = {},
    title,
}) => {
    const [open, setOpen] = React.useState(false)

    const isChildAvailable = childs.filter((item) => item.isShowed)?.length > 0

    return (
        <>
            <ListItemButton
                disabled={!isAllowed}
                sx={sx}
                onClick={() => setOpen((prev) => !prev)}
            >
                <ListItemText primary={toTitleCase(title)} />
                {isChildAvailable && (open ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                {children}
            </Collapse>
        </>
    )
}

export default AtomCollapsableListItem
