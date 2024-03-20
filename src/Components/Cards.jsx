import { useState } from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Rating } from '@mui/material';
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
const Cards = ({ hotelName, image, address, price, defaultValue, hotelList, hotelId, availability }) => {
  const newObj = {
    hotelId: hotelId,
    hotelList: hotelList
  }
  return (
    <div>
      <Card
        variant="outlined"
        sx={{
          p: 2,
          display: 'flex',
          flexWrap: 'wrap',
          zIndex: 1,
        }}
      >
        <CardMedia
          component="img"
          width="100"
          height="150"
          src={image}
          sx={{
            borderRadius: '6px',
            width: { xs: '100%', sm: 300 },
          }}
        />
        <Box sx={{ alignSelf: 'center', ml: 4 }}>
          <Typography variant="h6" gutterBottom>
            {hotelName}
          </Typography>
          <Rating name="read-only" value={defaultValue} readOnly />
          <Typography variant="body2" color="text.secondary" fontWeight="regular">
            {address}
          </Typography>

          <Typography variant="body2" color="text.secondary" fontWeight="regular">
            {price}
          </Typography>
          {availability !== 0 ? (
            <>
              <Typography variant="body2" color="text.secondary" fontWeight="regular">
                availability {availability}
              </Typography>

              <Link to={"/form"} state={newObj}>
                <Button variant="contained">Book</Button>
              </Link></>) : (<>

                <Stack sx={{ width: '100%' }} spacing={2}>
                  <Alert severity="error">Not Availability The room  </Alert>
                </Stack>

                <Button variant="contained" disabled>
                  Disabled
                </Button>
              </>
          )}


              </Box>
      </Card>
    </div >
  )
}

export default Cards