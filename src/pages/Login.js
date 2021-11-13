import React, { useState } from 'react'
import { Card, CardContent, Grid, Container, Button, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { connect } from 'react-redux'
import { LOGIN_USER } from '../redux/actions/user';
import { Link } from 'react-router-dom';

const useStylesBase = makeStyles({
    CardStyle: {
        width: '400px',
        height: '50vh',
        // backgroundColor: '#ebd3d7 !important',
        boxShadow: '20px 20px 30px 20px rgba(0,0,0,0.5)',
        marginTop: '12rem',
        display: 'flex',
        // flexDirection: 'column',
        alignItems: 'center'
    },
    inputStyle: {
        marginBottom: "1rem !important",
        Padding: '10%',
        boxShadow: '2px 2px 7px -2px rgba(0,0,0,0.5)',
    },
    ButtonStyle: {
        boxShadow: '5px 5px 15px -5px rgba(0,0,0,0.5)',
        backgroundColor: '#248ccb !important',
        color: '#ffff !important'
    }

});


function Login(props) {
    const classes = useStylesBase()
    const [showPassword, setShowPassword] = useState(false)
    const [loginPayload, setLoginPayload] = useState({})
    const { LOGIN_USER } = props

    const whenInputChangeGetValueName = (e) => {
        let { value, name } = e.target
        setLoginPayload({ ...loginPayload, [name]: value })
    }
    console.log(loginPayload)
    const handleLogin = (e) => {
        e.preventDefault()
        LOGIN_USER(loginPayload)
    }
    return (
        <div>
            <Container style={{ display: "flex", justifyContent: 'center' }}>
                <Card className={classes.CardStyle}>
                    <CardContent>
                        <Typography style={{color:'#248ccb'}}>Login</Typography>
                        <form onSubmit={handleLogin}>
                            <TextField
                                className={classes.inputStyle}
                                fullWidth
                                required
                                onChange={whenInputChangeGetValueName}
                                size='small'
                                type='email'
                                name='email'
                                label="Email"
                                style={{ marginTop: '10%' }}
                            />
                            <TextField
                                className={classes.inputStyle}
                                fullWidth
                                name='password'
                                required
                                onChange={whenInputChangeGetValueName}
                                size='small'
                                type={showPassword ? "text" : "password"}
                                InputProps={{
                                    endAdornment: <IconButton onClick={
                                        () => { setShowPassword(!showPassword) }
                                    }>
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                }}
                                label="Password"
                                style={{ marginTop: '5%' }}
                            />

                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <Button className={classes.ButtonStyle} component={Link} to={'/all_task'} type={'submit'} variant='text' color='secondary'>
                                    Login
                                </Button>
                                <Button className={classes.ButtonStyle} component={Link} to={'/register'} variant='text' color='secondary'>
                                    Register
                                </Button>
                            </div>

                        </form>
                    </CardContent>

                </Card>
            </Container>
        </div>
    )
}

const mapDispatchToProps = {

}

export default connect(null, { LOGIN_USER })(Login)
