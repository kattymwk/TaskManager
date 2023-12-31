import React, {useContext, useEffect, useState} from 'react';
import {Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import {methods} from "../../api/methods";
import {DeskContext} from "../../pages/Workspace";
import DeskItem from "./DeskItem";

const Desks = () => {

    const {currentWorkspace,setCurrentWorkspace}  = useContext(DeskContext);

    const [deskItems, setDeskItems] = useState([])

    const [deskData, setDeskData] = useState({
        name: "",
        visibilityTypeCode: "Public",
        workSpaceId: ""
    });

    const [updateDesk, setUpdateDesk] = useState(false)
    const [createDesk, setCreateDesk] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDeskData({ ...deskData, [name]: value });
    };

    const newDeskHandler = async () => {
        const token =JSON.parse(localStorage.getItem("token")).accessToken
        const response = await methods.createDesk(token,deskData)

        setCreateDesk(false)
        setUpdateDesk(true)

    }

    const fetchDesk =  async () => {
        const token =JSON.parse(localStorage.getItem("token")).accessToken
        const data = await methods.getDesk(token,currentWorkspace.id);
        setDeskItems(data.data)
        console.log(data)
    }

    useEffect(() => {
        fetchDesk()
        setDeskData({ ...deskData, workSpaceId: currentWorkspace.id });
    }, [updateDesk]);

    return (
        <Box ml={10} mb={10}>
            <Typography variant="h4" style={{
                paddingBottom:"30px",
                paddingTop:"15px"
            }}>Desks:</Typography>

            <Box sx={{display:"flex",flexDirection:"row", gap:"30px" , flexWrap:"wrap"}}>
                {
                    deskItems.map((item,index) => (
                        <DeskItem key={index} desk={item}/>
                    ))
                }
            </Box>
            <Box mt={5}>
                {
                    !createDesk &&  <Button onClick={ () => setCreateDesk(true)} variant="contained">Create a desk</Button>
                }

                {
                    createDesk &&

                    <Box sx={{width:"500px", background:"#dcdcdc", borderRadius:"20px", padding:"20px" }} mt={2}>
                        <TextField style={{
                            marginBottom:"40px"
                        }}
                                   fullWidth
                                   onChange={(e)=>    setDeskData({ ...deskData,  name:e.target.value })}
                                   id="outlined-basic"
                                   label="Desk name"
                                   variant="outlined"
                        />
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel>Тип рабочего пространства</InputLabel>
                            <Select
                                label="Тип рабочего пространства"
                                name="visibilityTypeCode"
                                onChange={handleChange}
                                value={deskData.visibilityTypeCode}
                                required
                            >
                                <MenuItem value="Public">Открытое</MenuItem>
                                <MenuItem value="Private">Закрытое</MenuItem>
                            </Select>
                        </FormControl>
                        <Box sx={{
                            display:"flex",
                            gap:"20px",
                            marginTop:"40px"
                        }}>
                            <Button onClick={newDeskHandler} variant="contained">Create</Button>
                            <Button onClick={ () => setCreateDesk(false)} variant="outlined" color="error">
                                Cancel
                            </Button>
                        </Box>

                    </Box>
                }
            </Box>
        </Box>
    );
};

export default Desks;