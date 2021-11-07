import React from 'react'
import { Card, CardContent, Grid, Container } from '@mui/material'
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

const useStylesBase = makeStyles({
    CardStyle: {
        width: '90%',
        height: '50vh',
        // backgroundColor: '#ebd3d7 !important',
        boxShadow: '5px 5px 25px -5px rgba(0,0,0,0.5)',
        marginTop: '12rem'
    },
    inputStyle:{
        marginBottom:"1rem !important"
    }

});


function Login() {
    const classes = useStylesBase()
    return (
        <div>
            <Container>
                <Grid container spacing={1}>
                    <Grid item sm={12} md={6} lg={6}>
                    </Grid>
                    <Grid item sm={12} md={6} lg={6}>
                        <Card className={classes.CardStyle}>
                            <CardContent>
                                <TextField
                                    className={classes.inputStyle}
                                    fullWidth
                                    size='small'
                                    type='email'
                                    label="Email"
                                />
                                <TextField
                                    className={classes.inputStyle}
                                    fullWidth
                                    size='small'
                                    type= 'password'
                                    label="Password"
                                />
                               
                            </CardContent>

                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Login
