import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import AddPropertyForm from '../components/Froms/AddPropertyForm'
import TransferNewOwnership from '../components/Froms/TransferNewOwnership'
import ApproveTransaction from '../components/Froms/ApproveTransaction'
import TransferToSuccessors from '../components/Froms/TransferToSuccessors'
const TransactionPage = () => {
    return (
        <>
    
            <Container>
                <Box mt={2} textAlign='center' >
                    <Typography variant='h3' fontSize='35px' fontWeight='bold' >Only LandInspector can use </Typography>
                </Box>
                {/* Add new Property Form  */}
                <Box mt={2} >
                    <ApproveTransaction />
                </Box>
                <Box mt={2} >
                    <TransferToSuccessors />
                </Box>
            </Container>
        </>
      )
}

export default TransactionPage