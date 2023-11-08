import React, {useContext, useState} from "react";
import { Box, Typography, Button} from "@mui/material"
import {UserContext} from "../App";
import {NavLink} from "react-router-dom";


const Home = () => {

    const {user,setUser} = useContext(UserContext)

    console.log(user)

    return (
        <Box>
            <Typography>Home</Typography>
            {
                user.isAuthenticated ? "true" : "false"
            }
            <br/>
            <Button variant="outlined" color="success">
                <NavLink to="/login">
                    login
                </NavLink>
            </Button>
            <br/> <br/>
            <Button variant="outlined" color="error">
                <NavLink to="/registration">
                    registration
                </NavLink>
            </Button>
        </Box>
    );
}


export default Home;