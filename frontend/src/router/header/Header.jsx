import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NavMenu from './tabs/NavMenu';

export default () => {
    return (
        <>
            <AppBar component="nav">
                <Toolbar>
                    <NavMenu />
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}