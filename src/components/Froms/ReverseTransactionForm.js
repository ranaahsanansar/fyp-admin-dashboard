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


const ReverseTransactionForm = () => {
    const [distric, setDistric] = useState("lahore");
    const [province, setProvince] = useState("punjab");
    const [society, setSociety] = useState("none");
    const [block, setBlock] = useState("park-view");
  
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
      <Box
        width="100%"
        sx={{
          border: "2px solid gray",
          padding: 2,
          borderRadius: "15px",
        }}
      >
        <Typography variant="h4" fontSize="25px" fontWeight="bold">
          Reverse of Ownership
        </Typography>
        <Divider />
        <Box mt={3}>
          <Box component="form" id="addProperty-form">
            <Grid container spacing={2}>
              <Grid item lg={4} md={4} sm={4}>
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
  
              <Grid item lg={4} md={4} sm={4}>
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
  
              <Grid item lg={4} md={4} sm={4}>
                <FormControl fullWidth>
                  <InputLabel id="society-label">Society</InputLabel>
  
                  <Select
                    fullWidth
                    required
                    labelId="society-label"
                    id="society"
                    value={society}
                    label="society"
                    onChange={handleChangeSociety}
                  >
                    <MenuItem value="none">None</MenuItem>
                    <MenuItem value="park-view">Park View</MenuItem>
                    <MenuItem value="bahria">Bahria</MenuItem>
                    <MenuItem value="rehman-garden">Rehman Garden</MenuItem>
                    <MenuItem value="iqbal-town">Iqbal Town</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
  
              <Grid item lg={4} md={4} sm={4}>
                <FormControl fullWidth>
                  <InputLabel id="block-label">Block</InputLabel>
  
                  <Select
                    fullWidth
                    required
                    labelId="block-label"
                    id="block"
                    value={block}
                    label="block"
                    onChange={handleChangeBlock}
                  >
                    <MenuItem value="none">None</MenuItem>
                    <MenuItem value="park-view">A Block</MenuItem>
                    <MenuItem value="bahria">B Block</MenuItem>
                    <MenuItem value="rehman-garden">X Block</MenuItem>
                    <MenuItem value="iqbal-town">Y Block</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
  
              <Grid item lg={4} md={4} sm={4}>
                <TextField
                  fullWidth
                  id="propertyTitle"
                  label="Property Title"
                  variant="outlined"
                  name="propertyTitle"
  
                />
              </Grid>
  
              <Grid item lg={4} md={4} sm={4}>
                <TextField
                  fullWidth
                  id="propertyID"
                  name="propertyID"
                  label="Property ID"
                  variant="outlined"
                />
              </Grid>
  
              <Grid item lg={4} md={4} sm={4}>
                <TextField
                  fullWidth
                  id="OwnerCnic"
                  name="OwnerCnic"
                  label="Owner Cnic"
                  variant="outlined"
                  type="Number"
                  placeholder="3520200000000"
                />
              </Grid>
              <Grid item lg={4} md={4} sm={4}>
                <TextField
                  fullWidth
                  id="sharesAmount"
                  name="sharesAmount"
                  label="Shares Amount"
                  variant="outlined"
                  type="number"
                  placeholder="0-100"
                  inputProps={{ min: 0 , max: 100 }}
  
                />
              </Grid>
              <Grid item lg={4} md={4} sm={4}>
                <TextField
                  fullWidth
                  id="otherApplicantCNIC"
                  name="otherApplicantCNIC"
                  label="Other Applicant Cnic"
                  variant="outlined"
                  type="Number"
                  placeholder="3520200000000"
                />
              </Grid>
              <Grid item lg={4} md={4} sm={4}>
                <TextField
                  fullWidth
                  id="caseNumber"
                  name="caseNumber"
                  label="Case Number"
                  variant="outlined"
                  type="Number"
                />
              </Grid>
              <Grid item lg={4} md={4} sm={4}>
                <TextField
                  fullWidth
                  id="OTPCode"
                  name="OTPCode"
                  label="OTP Code"
                  variant="outlined"
                  type="Number"
                  inputProps={{ minLength: 8 ,  }}
                  placeholder="Minimum 8 Digits Code"
                />
              </Grid>
            </Grid>
            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    );
}

export default ReverseTransactionForm