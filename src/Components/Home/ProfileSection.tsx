import React, { FC, useEffect, useState } from 'react'
import {Box, Grid, Button, IconButton, Typography, Divider  } from '@mui/material'
import styled from '@emotion/styled'
import acheive from '../../Assets/acheive.png'
import { FiSmile } from 'react-icons/fi'
import { HiOutlineUsers } from 'react-icons/hi'
import { SxProps } from '@mui/material/styles';
import { getGitHubUser } from '../../Utils/utils'

const Img = styled.img`
height:100%;
width:100%;
border-radius:100%;
@media screen and (max-width: 900px){
    width:103px;
    height:103px
}
`
const Acheivements = styled.img`
height:64px;
width:64px;
`

const Heading = styled.h5`
font-weight:bold;
fonst-size:16px
`
const Span = styled.span`
font-weight:bold;
`

interface Itypes {
    imgBtn : SxProps
}

const styles : Itypes = {
    imgBtn: {
        display:['none','none','grid'],
        position:'absolute',
        border:'1px solid black',
        right:[0,10],
        bottom:[0,40],
        backgroundColor:'white'
    }
}

interface Props {
    avatar_url: string
}

const UserImage:FC<Props> = ({avatar_url}) => {
    return (
        <Box>
            <Grid container>
                <Grid item sx={{position:'relative'}}>
                    <Box sx={{maxHeight:'296px', maxWidth:'296px'}}>
                        <Img src={avatar_url} />
                    </Box>
                    <IconButton 
                        sx={{...styles.imgBtn}}
                        size="large"
                    >
                        <FiSmile size={10} />
                    </IconButton >  
                </Grid>
                <Grid item xs={12} sx={{display:['block','block', 'none'],my:2}}>
                    <Button variant={'outlined'} sx={{width:'100%'}}>
                        <FiSmile size={20} /> Set status
                    </Button>                     
                </Grid>    
                
            </Grid>

        </Box>
    )
}

const ProfileSection:FC = () => {
    const [user, setUser] = useState<UserModel>({id: 0, login: '', followers: 0, following: 0, avatar_url: ''})

    const getUser = async () => {
        try {
            const res = await getGitHubUser()
            setUser(res)
        } catch(err) {
            console.log(err)
        }
        
    }

    useEffect(() => {
        getUser()
    }, [])

  return (
    <>
        <UserImage avatar_url={user.avatar_url}/>
        <Box>
            <p>{user.login}</p>
        </Box>
        <Box >
            <Button variant={'contained'} fullWidth>Edit profile</Button>
        </Box>
        <Box my={1}>
            <Typography sx={{display:'flex', alignItems:'center',gap:0.5,mt:2}}>
                <HiOutlineUsers /> <Span>{user.followers}</Span> follower <Span>. {user.following}</Span> following
            </Typography>
        </Box>
        <Divider />
        <Box mt={1}>
            <Heading>
                Achievements
            </Heading>
            <Acheivements src={acheive}/>
        </Box>
        <Box sx={{display:'flex', alignItems:'center',my:1}}>
            <Typography sx={{border:'1px solid green',px:1,py:0.2, borderRadius:'20px',color:'green', mr:2}}>
                Beta
            </Typography>
            <Typography>Send Feedback</Typography>
        </Box>
        <Divider/>
        <Box>
            <Heading>Organizations</Heading>
        </Box>
    </>
  )
}

export default ProfileSection