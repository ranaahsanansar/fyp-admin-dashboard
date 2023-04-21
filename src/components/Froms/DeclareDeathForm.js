import {
    Box,
    Button,
    Container,
    Divider,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";

const DeclareDeathForm = () => {
    const [distric , setDistric ] = useState('lahore');
    const [province , setProvince ] = useState('punjab');
    const [society , setSociety ] = useState('none');
    const [block , setBlock ] = useState('park-view');
    
  
    const handleChangeProvience = (event) => {
      setProvince(event.target.value);
    };
    const handleChangeDistric = (event) => {
      setDistric(event.target.value);
    };
    const handleChangeSociety = (event) => {
      setSociety(event.target.value);
    };
    const handleChangeBlock = (event) => {
      setBlock(event.target.value);
    };
    return (
      <Box width='100%'  sx={{
        border:'2px solid gray' , padding:2 , borderRadius: '15px'
      }} >
        <Typography variant="h4" fontSize='25px' fontWeight='bold' >Declare Death of Citizzen</Typography>
        <Divider />
        <Box mt={3} >
          <Box 
          component='form'
          id="addProperty-form"
          >
              <Grid container spacing={2} >
  
              <Grid item lg={4} md={4} sm={4} >
                <FormControl fullWidth>
                        <InputLabel id="province-label">Province</InputLabel>
  
                        <Select
                          fullWidth
                          required
                          labelId="province-label"
                          id="province"
                          value={province}
                          label="province"
                          onChange={handleChangeProvience}
                        >
                          <MenuItem value="punjab">punjab</MenuItem>
                          <MenuItem value="sindh">Karachi</MenuItem>
                          <MenuItem value="balochistan">Sialkot</MenuItem>
                          <MenuItem value="KPK">KPK</MenuItem>
                        </Select>
                      </FormControl>
              </Grid>
              
              <Grid item lg={4} md={4} sm={4} >
              <FormControl fullWidth>
                        <InputLabel id="distric-label">Distric</InputLabel>
  
                        <Select
                          fullWidth
                          required
                          labelId="distric-label"
                          id="distric"
                          value={distric}
                          label="Distric"
                          onChange={handleChangeDistric}
                        >
                          <MenuItem value="lahore">Lahore</MenuItem>
                          <MenuItem value="karachi">Karachi</MenuItem>
                          <MenuItem value="sialkot">Sialkot</MenuItem>
                        </Select>
                      </FormControl>
              </Grid>
  
              <Grid item lg={4} md={4} sm={4} > 
              <TextField fullWidth id="Cnic" type="number" name="cnic" label="CNIC" variant="outlined" />
                
                 </Grid>
  
              </Grid>
              <Box textAlign="center">
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3, mb: 2, px: 5 }}
                    >
                      Declare Dead
                    </Button>
                  </Box>
                  
  
          </Box>
        </Box>
      </Box>
    );
}

export default DeclareDeathForm