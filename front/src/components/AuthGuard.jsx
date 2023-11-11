import React, {Fragment, useContext, useState} from 'react';
import {methods} from "../api/methods";
import {UserContext} from "../Main";
import {Box, Button, TextField, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

const AuthGuard = ({isExist}) => {

    const [creds, setCreds] = useState({
        name: "",
        password: ""
    })

    const handleClick = () => {
        methods.login(creds).then(r => {
            console.log("loginpage" , r)
        })
        localStorage.setItem("token", "dfgksdhgkjshdkfsdhnoifguasc")
        console.log(creds);
    }

    const {user,setUser} = useContext(UserContext)

    return (
        <Fragment>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh"
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    alignItems: "center",
                    p: "50px",
                    bgcolor: "#e4e4e4",
                    borderRadius: "10px"
                }}>
                    <Typography variant="h4">{isExist ? "Login" : "Register"}</Typography>
                    <TextField value={creds.name} onChange={(e) => setCreds({...creds, name: e.target.value})} label="name"/>
                    <TextField value={creds.password} onChange={(e) => setCreds({...creds, password: e.target.value})} label="password"/>
                    <Button variant="contained" onClick={handleClick}>{isExist ? "Login" : "Register"}</Button>

                    <NavLink to="/">
                        на главную
                    </NavLink>
                </Box>
            </Box>
        </Fragment>
    );
};

export default AuthGuard;