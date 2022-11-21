import { FC, useState } from 'react'
import { Box, Grid, Tabs, Tab } from '@mui/material'
import ProfileSection from './ProfileSection'
import TabSection from './TabSection'
import { BsBook } from 'react-icons/bs'
import { useNavigate, useLocation } from 'react-router'
const ProfileTabs: FC = () => {
    const [activeTab, setactiveTab] = useState<String>('')
    const navigate = useNavigate();
    const loc = useLocation()

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        let param = '?tab='
        switch (newValue) {
            case 0:
                param = ''
                break;
            case 1:
                param += 'repositories'
                break;
            case 2:
                param += 'projects'
                break;
            case 3:
                param += 'package'
                break;
            case 4:
                param += 'stars'
                break;

            default:
                break;
        }
        navigate(`/${param}`)
        setactiveTab(param)
    }

    const ActiveTab = (val: string) => {
        console.log(loc.search)
        if (loc.search.includes(val)) {
            return '2px solid #F78166'
        }
        else if (!loc.search && val == '/') {
            return '2px solid #F78166'
        }
        else {
            return ''
        }
    }

    return (
        <Grid container justifyContent={'center'} spacing={3} sx={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }}>
            <Grid item xs={0} md={3} />
            <Grid item xs={12} md={8}>
                <Tabs
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                >
                    <Tab value={0} sx={{ color: 'secondary.main', textTransform: 'capitalize', borderBottom: ActiveTab('/') }} iconPosition="start" icon={<BsBook />} label="Overview" />
                    <Tab value={1} sx={{ color: 'secondary.main', textTransform: 'capitalize', borderBottom: ActiveTab('repositories') }} iconPosition="start" icon={<BsBook />} label="Repositories" />
                    <Tab value={2} sx={{ color: 'secondary.main', textTransform: 'capitalize', borderBottom: ActiveTab('projects') }} iconPosition="start" icon={<BsBook />} label="Projects" />
                    <Tab value={3} sx={{ color: 'secondary.main', textTransform: 'capitalize', borderBottom: ActiveTab('package') }} iconPosition="start" icon={<BsBook />} label="Packages" />
                    <Tab value={4} sx={{ color: 'secondary.main', textTransform: 'capitalize', borderBottom: ActiveTab('stars') }} iconPosition="start" icon={<BsBook />} label="Stars" />
                </Tabs>
            </Grid>
        </Grid>
    )
}

const Home: FC = () => {
    return (
        <Box mt={5}>
            <Grid container justifyContent={'space-around'} spacing={1}>
                <Grid item xs={12} md={12} order={{ xs: 2, md: 1 }}>
                    <ProfileTabs />
                </Grid>
                <Grid item xs={11} md={3} order={{ xs: 1, md: 2 }}>
                    <Box sx={{ mt: ['-35px'] }}>
                        <ProfileSection />
                    </Box>
                </Grid>
                <Grid item xs={11} md={8} order={3}>
                    <TabSection />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home