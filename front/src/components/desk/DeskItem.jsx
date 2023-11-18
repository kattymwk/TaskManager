import React from 'react';
import {Box} from "@mui/material";
import {NavLink} from "react-router-dom";

import close from "../../img/close.png"
import {methods} from "../../api/methods";
import classes from "../../style/text.module.css"

const DeskItem = ({desk}) => {

    const deleteDesk = async () => {
        const token =JSON.parse(localStorage.getItem("token")).accessToken
        const data = await methods.deleteDesk(token,desk.deskId)
        console.log(data)
    }

    return (

        <Box sx={{
            background:"#e1e1e1",
            width:"250px",
            height:"50px",
            borderRadius:"20px",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            padding:"5px 10px"
        }}>
            <NavLink className={classes.workspace_link} to={`${desk.deskId}`}>
                <Box>
                    {desk.deskName}
                </Box>
            </NavLink>
            <Box onClick={deleteDesk} style={{cursor:"pointer"}}>
                <img style={{
                    width:"20px",
                    height:"20px"
                }} src={close} alt="close"/>
            </Box>
        </Box>
    );
};

export default DeskItem;