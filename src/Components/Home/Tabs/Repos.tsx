import React, { FC, useEffect, useState } from 'react'
import {Grid, Button, TextField, MenuItem, Select, Box} from '@mui/material'
import {BiBookBookmark} from 'react-icons/bi';
import { SxProps } from '@mui/material/styles';
import SingleRepo from './SingleRepo';
import { getUserRepos } from '../../../Utils/utils';

const select : SxProps = {
    bgcolor:'primary.main',
    color: 'secondary.main',
    border:'1px solid rgba (0,0,0,0.2)',
    height:'32px',
    "& .MuiSvgIcon-root": {
        color: "secondary.main",
      },
}

interface Props {
    duplicateRepos: RepoModel[]
    setRepos: Function
}

const Search : FC<Props> = ({duplicateRepos, setRepos}) => {
    const [text, setText] = useState<string>('')

    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
        const searchedRepos = duplicateRepos.filter(repo => repo.name.includes(e.target.value))
        setRepos(searchedRepos)
    }

    return (
        <Grid container alignItems={'center'} spacing={2}>
            <Grid item xs={12} md={10} order={{sm:2, md:1}}>
                <Grid container alignItems={'center'} spacing={1}>
                    <Grid item xs={12} lg={6}>
                    <TextField onChange={searchHandler} value={text} size='small' placeholder='Find a repository..' fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={11} lg={5} my={2} display='flex' gap={2}>
                    <Select
                        sx={select}
                        displayEmpty
                        label="Type"
                        value={""}
                    >
                        <MenuItem value="">
                            <em>Type</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <Select
                        sx={select}
                        displayEmpty
                        label="Type"
                        value={""}
                    >
                        <MenuItem value="">
                            <em>Language</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <Select
                        sx={select}
                        displayEmpty
                        label="Type"
                        value={""}
                    >
                        <MenuItem value="">
                            <em>Sort</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={2} order={{sm:1, md:2}}>
                <Button fullWidth startIcon={<BiBookBookmark />} variant="contained">
                    New
                </Button>
            </Grid>
        </Grid>
    )
}

const Repos:FC = () => {
    const [repos, setRepos] = useState<RepoModel[]>([])
    const [duplicateRepos, setDuplicateRepos] = useState<RepoModel[]>([])

    const getRepos = async () => {
        try {
            const res = await getUserRepos()
            setRepos(res)
            setDuplicateRepos(res)
        } catch(err) {
            console.log(err)
        }
        
    }

    useEffect(() => {
        getRepos()
    }, [])

  return (
    <Box>
        <Search duplicateRepos={duplicateRepos} setRepos={(data: RepoModel[]) => setRepos(data)}/>
        {repos.map((data)=>(
            <span key={data.id}>
                <SingleRepo {...data}/>
            </span>
        ))}
    </Box>
  )
}

export default Repos