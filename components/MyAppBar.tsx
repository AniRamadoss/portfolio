import { AppBar, Tabs, Tab } from '@mui/material';
import {useState, ChangeEvent} from 'react';
import { useRouter } from 'next/router';

export default function MyAppBar(MyAppBarProps:{tabNumber: number}) {
    const [selectedTab, setSelectedTab] = useState<number>(MyAppBarProps.tabNumber);
    const router = useRouter();
    const handleTabChange = (event: ChangeEvent<{}>, newValue: number) => {
        setSelectedTab(newValue);
    }
    const handleTabClick = (path: string) => {
        router.push(path);
    }
    return (
        <AppBar position="static" style={{minHeight: '50px'}}>
            <Tabs value={selectedTab} onChange={handleTabChange} sx={{marginLeft: 'auto'}}>
                <Tab label="Home" disabled={selectedTab === 0} onClick={() => {handleTabClick("/")}}/>
                <Tab label="Experience" disabled={selectedTab === 1} onClick={() => {handleTabClick("/experience")}}/>
                <Tab label="Resume" disabled={selectedTab === 2} onClick={() => {handleTabClick("/resume")}}/>
            </Tabs>
        </AppBar>
    );
}