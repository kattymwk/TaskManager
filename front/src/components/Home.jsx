import React, {useContext, useState} from "react";
import { Box, Typography} from "@mui/material"
import {UserContext} from "../App";


const Home = () => {

    const {user,setUser} = useContext(UserContext)

    console.log(user)

    return (
        <Box>
            <Typography>Home</Typography>
            {
                user.isAuthenticated ? "true" : "false"
            }
        </Box>
    );
}


export default Home;