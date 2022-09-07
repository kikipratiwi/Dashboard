import React from 'react'
import {Box, Card, FormControlLabel, Grid, Paper, Switch} from '@mui/material'

import {DrawerHeader} from '../utils/globalStyle'

function MainView() {
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
            <DrawerHeader />

            <Grid
                container
                spacing={{xs: 2, md: 3}}
                columns={{xs: 4, sm: 8, md: 12}}
            >
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Card>
                            <FormControlLabel
                                control={<Switch defaultChecked />}
                                label="Show"
                            />
                            <FormControlLabel
                                control={<Switch defaultChecked />}
                                label="Enable"
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default MainView
