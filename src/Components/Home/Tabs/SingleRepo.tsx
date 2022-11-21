import React, {FC} from 'react'
import {Box, Grid, Typography, Stack, Divider} from '@mui/material';
import styled from '@emotion/styled'
import SplitButton from '../../SplitButton';

const Heading = styled(Typography)`
    color:#58A6FF;
    font-size: 20px;
`

const Info = styled(Typography)`
    opacity:0.5;
    font-size: 12px;
`
const Type = styled(Typography)`
    border: 1px solid rgba(0,0,0,0.3);
    opacity:0.5;
    border-radius : 20px;
    font-size: 12px;
    text-align:center;
    padding:5px
`

const SingleRepo : FC<RepoModel> = (data) => {
  return (
    <Box>
        <Grid container my={5}>
            <Grid item xs={8}>
                <Stack direction={'row'} alignItems="center" gap={2}>
                    <Box>
                        <Heading>{data.name}</Heading> 
                    </Box>
                    <Box>
                        <Type color='secondary.main' sx={{border:'1px solid white'}}>{data.private ? "Private" : "Public"}</Type> 
                    </Box>
                </Stack>
                
                <Stack direction={'row'} alignItems="center" mt={2} gap={2}>
                    <Box>
                        <Info color='secondary.main'>{data.language}</Info> 
                    </Box>
                    <Box>
                        <Info color='secondary.main'>{data.updated_at}</Info> 
                    </Box>
                </Stack>

            </Grid>
            <Grid item xs={4} display='flex' justifyContent={'flex-end'}>
                <SplitButton /> 
            </Grid>
        </Grid>
        <Divider />
    </Box>
  )
}

export default SingleRepo