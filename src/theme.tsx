import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ed9300',
        },
        secondary: {
            main: '#dadada',
        },
        error: {
            main: '#ed1c2e',
        },
        background: {
            default: '#fff',
        },
    },
    typography: {
        fontFamily: '"LFTEticaReg", "Lucida Sans Unicode", "Lucida Grande", sans-serif',
    },
    overrides: {
        MuiTypography: {
            root: {
                fontFamily: "LFTEticaReg",
            }
        },
        MuiToolbar: {
            regular: {
                minHeight: '50px!important'
            }
        },
        MuiIconButton: {
            root: {
                '&:hover': {
                    background: '#444f55',
                    borderRadius: 0
                }
            },
            label: {
                border: '2px white solid',
                borderRadius: '22px',
                color: '#dadada',
            }
        },
        MuiButton: {
            root: {
                padding: '8px 20px',
                borderRadius: 0,
                fontWeight: 700,
                textTransform: "none"
            },
            contained: {
                boxShadow: "none"
            }
        }
    }
});

export default theme;