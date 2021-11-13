import React, { useState } from 'react'
import { Card, CardContent, Grid, Container, Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { display } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { connect } from 'react-redux'
import { REGISTER_USER } from '../redux/actions/user';
import { Link } from 'react-router-dom';

const useStylesBase = makeStyles({
    CardStyle: {
        width: '400px',
        height: '50vh',
        // backgroundColor: '#ebd3d7 !important',
        boxShadow: '20px 20px 25px 20px rgba(0,0,0,0.5)',
        marginTop: '12rem',
        display: 'flex',
        // flexDirection: 'column',
        alignItems: 'center'
    },
    inputStyle: {
        marginBottom: "1rem !important",
    },
    ButtonStyle: {
        boxShadow: '5px 5px 15px -5px rgba(0,0,0,0.5)',
        backgroundColor: '#248ccb !important',
        color: '#ffff !important'
    }


});




function Register(props) {
    const classes = useStylesBase()
    const [showPassword, setShowPassword] = useState(false)
    const [registerPayoad, setRegisterPayload] = useState({})
    const { REGISTER_USER } = props
    // const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const whenInputChangeGetValueName = (e) => {
        let { value, name } = e.target
        setRegisterPayload({ ...registerPayoad, [name]: value })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        REGISTER_USER(registerPayoad)
    }
    return (
        <div>
            <Container style={{ display: "flex", justifyContent: 'center' }}>
                <Card className={classes.CardStyle}>
                    <CardContent>
                        <form onSubmit={handleRegister}>
                            <TextField
                                className={classes.inputStyle}
                                fullWidth
                                required
                                onChange={whenInputChangeGetValueName}
                                name='name'
                                size='small'
                                type='text'
                                label="Full Name"
                            />
                            <TextField
                                className={classes.inputStyle}
                                fullWidth
                                required
                                onChange={whenInputChangeGetValueName}
                                name='age'
                                size='small'
                                type='number'
                                label="Age"
                            />
                            <TextField
                                className={classes.inputStyle}
                                fullWidth
                                required
                                onChange={whenInputChangeGetValueName}
                                name='email'
                                size='small'
                                type='email'
                                label="Email"
                            />
                            <TextField
                                className={classes.inputStyle}
                                fullWidth
                                required
                                onChange={whenInputChangeGetValueName}
                                name='password'
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
                            />

                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                                <Button className={classes.ButtonStyle} component={Link} to={'/login'} variant='text' color='secondary' >
                                    Login
                                </Button>
                                <Button className={classes.ButtonStyle} type={'submit'} variant='text' color='secondary'>
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
export default connect(null, { REGISTER_USER })(Register)
