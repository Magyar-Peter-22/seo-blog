import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Footer from './footer/Footer';
import Header from './header/Header';
import { Outlet } from "react-router-dom";
import Stack from '@mui/material/Stack';
import { Suspense } from 'react';

export default () => {
    return (
        <Stack sx={{ minHeight: "100dvh" }}>
            <Header />
            <Toolbar />
            <Box component="main" sx={{flexGrow:1}}>
                <Suspense fallback={<p>loading</p>}>
                    <Outlet />
                </Suspense>
            </Box>
            <Footer />
        </Stack>
    );
}