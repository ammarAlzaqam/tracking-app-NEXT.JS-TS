import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        text: {
            primary: 'rgb(40, 35, 35)', // Replace with your primary text color
            secondary: 'rgb(84, 98, 72)', // Replace with your secondary text color
        },
        primary: {
            main: 'rgb(25, 210, 170)', // Replace with your primary color
        },
        secondary: {
            main: 'rgb(252, 255, 162)', // Replace with your secondary color
        },
        background: {
            default: 'rgb(253, 242, 242)', // Replace with your background color
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif', // Replace with your preferred font
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none', // Disable uppercase transformation
                },
            },
        },
    },
});

export default theme;