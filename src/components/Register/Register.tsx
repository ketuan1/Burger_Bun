import { useContext, useEffect, useState } from "react";
import Navigator from '../Navigator/navigator';
import { Alert, Button, Snackbar, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState('')
    const [open, setOpen] = useState(false);
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const [user, setUser] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        role: "user"
    })
    const [validate, setValidate] = useState({
        email: false,
        password: false,
        firstName: false,
        lastName: false,
        phone: false,
        address: false
    })
    const navigator = useNavigate()
    return (
        <div style={{ padding: '0px 24px 48px 24px' }}>
            {
                loading && <Loading /> 
            }
            <Navigator />
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {msg}
                </Alert>
            </Snackbar>
            <div style={{ marginTop: '108px' }}>
                <div>
                    <TextField
                        style={{ width: '100%' }}
                        label="email"
                        type="email"
                        value={user.email}
                        onChange={event => {
                            setUser({ ...user, email: event.target.value })
                        }}
                        error={validate.email}
                        helperText={validate.email ? 'Vui lòng nhập thông tin' : ' '}
                    />
                </div>
                <div>
                    <TextField
                        style={{ width: '100%' }}
                        label="password"
                        type="password"
                        value={user.password}
                        onChange={event => {
                            setUser({ ...user, password: event.target.value })
                        }}
                        error={validate.password}
                        helperText={validate.password ? 'Vui lòng nhập thông tin' : ' '}
                    />
                </div>
                <div>
                    <TextField
                        style={{ width: '100%' }}
                        label="first name"
                        value={user.firstName}
                        onChange={event => {
                            setUser({ ...user, firstName: event.target.value })
                        }}
                        error={validate.firstName}
                        helperText={validate.firstName ? 'Vui lòng nhập thông tin' : ' '}
                    />
                </div>
                <div>
                    <TextField
                        style={{ width: '100%' }}
                        label="last name"
                        value={user.lastName}
                        onChange={event => {
                            setUser({ ...user, lastName: event.target.value })
                        }}
                        error={validate.lastName}
                        helperText={validate.lastName ? 'Vui lòng nhập thông tin' : ' '}
                    />
                </div>
                <div>
                    <TextField
                        style={{ width: '100%' }}
                        label="phone"
                        type="number"
                        value={user.phone}
                        onChange={event => {
                            setUser({ ...user, phone: event.target.value })
                        }}
                        error={validate.phone}
                        helperText={validate.phone ? 'Vui lòng nhập thông tin' : ' '}
                    />
                </div>
                <div>
                    <TextField
                        style={{ width: '100%' }}
                        label="address"
                        value={user.address}
                        onChange={event => {
                            setUser({ ...user, address: event.target.value })
                        }}
                        error={validate.address}
                        helperText={validate.address ? 'Vui lòng nhập thông tin' : ' '}
                    />
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Button onClick={async () => {
                    let email = false
                    let firstName = false
                    let lastName = false
                    let password = false
                    let phone = false
                    let address = false
                    if (user.email === '') {
                        email = true
                    }
                    if (user.firstName === '') {
                        firstName = true
                    }
                    if (user.lastName === '') {
                        lastName = true
                    }
                    if (user.password === '') {
                        password = true
                    }
                    if (user.phone === '') {
                        phone = true
                    }
                    if (user.address === '') {
                        address = true
                    }
                    setValidate({ ...validate, email, firstName, password, lastName, address, phone })
                    if (user.email && user.address && user.firstName && user.lastName && user.phone && user.password) {
                        try {
                            setLoading(true)
                            let rs = await axios.post("/api/register", user)
                            setMsg(rs?.data?.message)
                            navigator('/login')
                        } catch (error: any) {
                            setMsg(error?.response?.data?.message || 'Có lỗi xảy ra')
                        }finally{
                            setLoading(false)
                        }
                    }
                }} variant="contained">Register
                </Button>
            </div>
        </div>
    );
};

export default Register;