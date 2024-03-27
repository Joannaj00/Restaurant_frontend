import React, { useState } from 'react';
import './header.css'; 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Header() {
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = () => {
        axios.post('http://localhost:5000/login', {  // Changed to http
            username: username
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    return (
        <header className='header'>
            <div className='title-container'>
                <h1 className='title'>PICK MY DINNER</h1>
            </div>
            <div className='login-profile-container'>
                <Button className='login-button' onClick={handleOpen}>Log in</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <input type="text" id="name" name="name" size="10" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <Button className='submit' onClick={handleSubmit}>  {/* Changed to onClick={handleSubmit} */}
                            Submit
                        </Button>
                    </Box>
                </Modal>
                <div className='profile-circle'></div>
            </div>
        </header>
    );
}

export default Header;