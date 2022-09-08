import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
    Box,
    Divider,
    FormControlLabel,
    Grid,
    Stack,
    Switch,
    Typography,
} from '@mui/material'

import toTitleCase from '../../utils/toTitleCase'
import {updateMenu} from '../../redux/reducers/menu'

const MoleculeToggleListItem = ({
    isParent,
    index,
    childs,
    id,
    isAllowed,
    isShowed,
}) => {
    const menus = useSelector((state) => state.menu.value)
    const dispatch = useDispatch()

    const generateNewMenu = (menus, id, attribute) => {
        return menus.map((menu) => {
            if (menu.id === id) {
                return {
                    ...menu,
                    [attribute]: !menu[attribute],
                }
            } else {
                if (menu.childs) {
                    return {
                        ...menu,
                        childs: generateNewMenu(menu.childs, id, attribute),
                    }
                } else {
                    return menu
                }
            }
        })
    }

    const changeIsShowed = (id) => {
        const newMenu = generateNewMenu(menus, id, 'isShowed')

        dispatch(updateMenu(newMenu))
    }

    const changeIsAllowed = (id) => {
        const newMenu = generateNewMenu(menus, id, 'isAllowed')

        dispatch(updateMenu(newMenu))
    }

    return (
        <Grid item xs={24} md={24} p={2} key={index}>
            <Stack spacing={2}>
                <Stack
                    alignItems="center"
                    direction="row"
                    justifyContent="space-between"
                    spacing="2"
                >
                    <Typography
                        variant="body1"
                        fontWeight={(childs || isParent) && 'bold'}
                    >
                        {toTitleCase(id)}
                    </Typography>

                    <Box>
                        <FormControlLabel
                            control={
                                <Switch
                                    size="small"
                                    checked={isShowed}
                                    onChange={() => changeIsShowed(id)}
                                />
                            }
                            label="Show"
                        />

                        <FormControlLabel
                            control={
                                <Switch
                                    size="small"
                                    checked={isAllowed}
                                    onChange={() => changeIsAllowed(id)}
                                />
                            }
                            label="Active"
                        />
                    </Box>
                </Stack>

                {childs && (
                    <Stack spacing={2}>
                        <Divider />

                        <Grid container spacing={2} columns={24}>
                            {childs.map(
                                (
                                    {childs, id, isAllowed, isShowed},
                                    childIndex,
                                ) => {
                                    return (
                                        <MoleculeToggleListItem
                                            childs={childs}
                                            id={id}
                                            isAllowed={isAllowed}
                                            isShowed={isShowed}
                                            key={`toggle-item-${childIndex}`}
                                        />
                                    )
                                },
                            )}
                        </Grid>
                    </Stack>
                )}
            </Stack>
        </Grid>
    )
}

export default MoleculeToggleListItem
