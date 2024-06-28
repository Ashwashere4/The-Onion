
import {React, useState} from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import './AddModal.css'

function AddModal(){
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
    <div>
        <Button onClick={handleOpen} variant= 'contained'> Test Modal</Button>   
        <Modal open = {open} onClose = {handleClose} >

            <Box className= 'Info'> 
                <Typography id= "modal-modal-title" variant = "h6" component="h2">
                    Text in Modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
        </Modal>
    </div>
    );
}

export default AddModal