import * as React from 'react'
import {styled, useTheme} from '@mui/material/styles'
import {
    Menu as MenuIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
} from '@mui/icons-material'
import {
    AppBar as MuiAppBar,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    Toolbar,
    Typography,
} from '@mui/material'
import AtomCollapsableListItem from '../atoms/CollapsableListItem'
import AtomListItem from '../atoms/ListItem'
import {useSelector} from 'react-redux'
import {DrawerHeader} from '../../utils/globalStyle'

const drawerWidth = 290

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
)

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}))

const LayoutDashboard = ({children}) => {
    const theme = useTheme()
    const menus = useSelector((state) => state.menu.value)
    const [open, setOpen] = React.useState(true)

    const toggleDrawer = () => {
        setOpen((prev) => !prev)
    }

    const renderSideBar = (menus, sx = {}) => {
        return menus.map(({id, isShowed, isAllowed, childs}) => {
            if (isShowed) {
                if (childs) {
                    return (
                        <AtomCollapsableListItem
                            childs={childs}
                            isAllowed={isAllowed}
                            key={`collapse-${id}`}
                            sx={{pl: sx.pl + 2}}
                            title={id}
                        >
                            {renderSideBar(childs, {pl: sx.pl + 3})}
                        </AtomCollapsableListItem>
                    )
                }

                return (
                    <AtomListItem
                        childs={childs}
                        isAllowed={isAllowed}
                        key={`item-${id}`}
                        sx={{pl: sx.pl + 2}}
                        title={id}
                    />
                )
            }

            return <></>
        })
    }

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline />

            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        edge="start"
                        sx={{
                            mr: 2,
                            ...(open && {display: 'none'}),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={toggleDrawer}>
                        {theme.direction === 'rtl' ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </DrawerHeader>

                <Divider />

                <List>{renderSideBar(menus, {pl: 1})}</List>
            </Drawer>

            <Main open={open}>{children}</Main>
        </Box>
    )
}

export default LayoutDashboard
