import { Box, Button, CssBaseline, Grid, Stack, Typography } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return <>
    <CssBaseline />
    <Navbar />
    <Box>
      <Grid container sx={{height: '90vh'}} >
        <Grid item lg={2} md={2} sm={2} sx={{ height: '100%' , overflow: 'scroll' }} >
          <Box height='100%'  >
            <Box height='100%'>
              <Stack >
                <Box my={2} padding={2} >
                  <Typography variant="h4" fontWeight='bold' fontSize='lg' >Admins</Typography>
                </Box>
                <Box mx={2} >
                  <Stack spacing={2}>
                  <Typography variant="h6"  fontSize='medium' >LandInspector</Typography>
                    <Button
                    component={NavLink} 
                    to='/add-property'
                    variant='contained' >Add Property</Button>
                    <Button
                    component={NavLink}
                    to='/'
                    variant='contained' >Citizen Approval</Button>
                    <Button
                    component={NavLink} 
                    to='/'
                    variant='contained' >Requests</Button>
                    <Typography variant="h6"  fontSize='medium' >Gov. Authority</Typography>
                    <Button
                    component={NavLink} 
                    to='/'
                    variant='contained' >New Society</Button>
                    <Button
                    component={NavLink} 
                    to='/'
                    variant='contained' >Manage Society</Button>
                    <Typography variant="h6"  fontSize='medium' >High Court</Typography>
                    <Button
                    component={NavLink} 
                    to='/'
                    variant='contained' >High Court</Button>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={10} md={10} sm={10} sx={{ height: '100%' , overflow: 'scroll' }}>
          <Outlet /> 
        </Grid>
      </Grid>
    </Box>
  </>;
};

export default Layout;
