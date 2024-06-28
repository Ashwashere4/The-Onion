
import {React, useState} from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import './AdminModal.css'
import '../App'
import raw from './password.txt'

function AdminModal({deleteButton, addButton, updateButton}){
    
    const [open, setOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [addOpen, setAddOpen] = useState(false);
    const [updateOpen, setUpdateOpen] = useState(false);
    const [nameEntered, setNameEntered] = useState("");
    const [urlEntered, seturlEntered] = useState("");
    const [tagsEntered, settagsEntered] = useState("");
    const [idEntered, setIDEntered] = useState("");
    const [passwordStatus, setPasswordStatus] = useState(false);
    const [password, setPassword] = useState("")

    const handleAddOpen = () => setAddOpen(true);
    const handleAddClose = () => {setAddOpen(false)
        setNameEntered("")
        seturlEntered("")
        settagsEntered("")
        };

    const handleOpen = () => {

        setOpen(true);
    }


    const handleClose = () => {
        setOpen(false)
        setPasswordStatus(false)
    }
    const handleDeleteOpen = () => setDeleteOpen(true);
    const handleDeleteClose = () => {setDeleteOpen(false) 
        setIDEntered("")
        };

    const handleUpdateOpen = () => setUpdateOpen(true);
    const handleUpdateClose = () => {setUpdateOpen(false)
            setNameEntered("")
            seturlEntered("")
            settagsEntered("")
        };

    const handleIDChange = (event) => {

        const ID = event.target.value
        setIDEntered(ID)


        return idEntered
    }
    
    const handleNameChange = (event) => {
        setNameEntered(event.target.value)

        return nameEntered
    }

    const handlePasswordChange = (event) =>{
        setPassword(event.target.value)

        return password
    }

    const handleUrlChange = (event) => {
        seturlEntered(event.target.value)

        return urlEntered
    }

    const handleTagsChange = (event) => {

        let tagsArray = (event.target.value)

        console.log(tagsArray)
        settagsEntered(tagsArray)
        
        return tagsArray
    }

    const checkPassword = () => {

        fetch(raw).then(r => r.text()).then(text=>{
            
            if (password === text.trim()){

                setOpen(false)
                setPasswordStatus(true)
                setPassword("")
            } else{
                console.log('Incorrect Password');
            }
            }).catch(error => {
                console.error("Error Fetching Password: ", error)
            });
        };
    


    return (
    <div>
        <Button onClick={handleOpen} variant= 'contained'> Admin Control</Button>   

        <Modal open = {open} onClose = {handleClose}>
            <Box className = 'Info'> 
                <Typography>
                    ADMIN PASSWORD?
                </Typography>
                <input type = 'password' value = {password} onChange = {handlePasswordChange} placeholder="Password"/>

                <Button variant='contained' onClick = {checkPassword}> Confirm</Button>
            </Box>
        </Modal>
        
        <Modal open = {passwordStatus} onClose = {handleClose} >
            <Box className= 'Info'> 
                <Typography id= "modal-modal-title" variant = "h6" component="h2">
                    What would you like to edit?
                </Typography>
                <p className = 'ButtonContainer'>
                    <Button variant = 'contained' className = 'Button' onClick = {handleAddOpen}> Add Recipe </Button>

                        <Modal open = {addOpen} onClose = {handleAddClose}>
                            <div className = "Info"> 
                                <Typography> Let's Add a Recipe </Typography>
                                <input type = 'text' value = {nameEntered} onChange = {handleNameChange} placeholder = "Recipe Name"/>
                                <input type = 'text' value = {urlEntered} onChange = {handleUrlChange} placeholder = "Recipe URL"/>
                                <input type = 'text' value = {tagsEntered} onChange = {handleTagsChange} placeholder = "Recipe Tags (numbers, seperated by commas)"/>
                                <Button variant = 'contained' onClick = {()=>addButton(nameEntered, urlEntered, tagsEntered)}> Confirm </Button>
                                <Typography> Tags by ID, surround tags in curley Braces</Typography>
                            </div>
                        </Modal> 

                    <Button variant = 'contained' className = 'Button' onClick = {handleDeleteOpen}> Delete Recipe</Button>
                        <Modal open = {deleteOpen} onClose = {handleDeleteClose}>
                            <div className="Info">
                                <Typography> What recipe would you like to delete?</Typography>
                                <Typography>(Delete by ID)</Typography>

                                <input type= "number" value = {idEntered} onChange = {handleIDChange} placeholder="Recipe ID"/>
                                <Button variant = 'contained' onClick = {()=>deleteButton(idEntered)}> Confirm </Button>
                            </div>
                        </Modal>
                    <Button variant = 'contained' className = 'Button' onClick = {handleUpdateOpen}> Edit Recipe</Button>
                        <Modal open = {updateOpen} onClose = {handleUpdateClose}>
                            <div className = "Info">
                                <Typography> What recipe would you like to update? </Typography>
                                <Typography>(Update by ID)</Typography>

                                <input type = "number" value = {idEntered} onChange={handleIDChange} placeholder="Recipe ID" />
                                <input type = 'text' value = {nameEntered} onChange = {handleNameChange} placeholder = "Recipe Name"/>
                                <input type = 'text' value = {urlEntered} onChange = {handleUrlChange} placeholder = "Recipe URL"/>
                                <input type = 'text' value = {tagsEntered} onChange = {handleTagsChange} placeholder = "Recipe Tags (numbers, seperated by commas)"/>
                                <Button variant = 'contained' onClick = {()=>updateButton(idEntered, nameEntered, urlEntered, tagsEntered)}>

                                </Button>
                            </div>
                        </Modal>
                </p>
            </Box>
        </Modal>
    </div>
    );
}

export default AdminModal