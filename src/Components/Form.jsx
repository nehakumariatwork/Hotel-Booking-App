import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useLocation, useNavigate } from "react-router-dom";
import Nevbar from './Navbar'
import Navbar from './Navbar';
const Form = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const hotelList = location.state.hotelList
    const hotelId = location.state.hotelId

    console.log(hotelList);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        room: '',
        date: '',
        checkin: '',
        checkout: ''
    });
    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target
        if (form.checkValidity()) {
            console.log("valid")
            let updateDate = {}
            hotelList.forEach(element => {
                if(element.id === hotelId){
                    element.availability -= formData.room
                    updateDate = {...element}
                }
            });
            fetch(`http://localhost:3002/data/${parseInt(hotelId)}`, {
                method: "PUT",
                headers: {
                    'Content-type': "application/json"
                },
                body: JSON.stringify(updateDate )
            })
            navigate('/BookingDetails', { state: formData })
        }
    };

    return (
        <div>
         <Navbar className='nev'>
            
         </Navbar>
        <div className='Form'>
            
            
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                onSubmit={handleSubmit}
            >
                <div>
                    <div>
                        <TextField
                            label="First Name"
                            id="firstName"
                            size="small"
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            label="Last Name"
                            id="lastName"
                            size="small"
                            onChange={handleChange}
                            required
                        />

                    </div>
                    <div>
                        <TextField
                            label="Phone Number"
                            id="phoneNumber"
                            type="number"
                            size="small"
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            label="Email"
                            id="email"
                            size="small"
                            type="email"
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            label="room"
                            id="room"
                            type='number'
                            size="small"
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            id="checkin"
                            label="check-in"
                            type="Date"
                            size="small"
                           InputProps={{
                            shrink:true,
                           }}
                            required
                        />
                         <TextField
                            id="checkout"
                            label="check-out"
                            type="Date"
                            size="small"
                            InputProps={{
                                shrink:true,
                               }}
                            
                            required
                        />
                        <div className='button'>
                            <Button variant="contained" type='submit'>Submit</Button>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
        </div>
    );
};

export default Form;