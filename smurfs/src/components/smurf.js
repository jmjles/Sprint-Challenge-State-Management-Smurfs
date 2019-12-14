import React from 'react'
import {Grid,Card, Paper,Typography as Font} from '@material-ui/core'
export default function smurf({smurf:{name,height,age}}) {
    return (
        <Grid item>
            <Card elevation={5}>
                <Paper>
                    <Font variant='h3'>
                        {name}
                    </Font>
                    <Font variant='h5'>
                        Height: {height} | Age: {age}
                    </Font>
                </Paper>
            </Card>
        </Grid>
    )
}
