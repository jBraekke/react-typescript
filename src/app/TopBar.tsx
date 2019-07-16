import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            backgroundColor: 'white',
            height: 50
        },
        noPadding: {
            padding: '0 !important',
        },
        tekst: {
            margin: 0,
            fontSize: 'small'
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            textAlign: 'right',
            paddingRight: 10
        },
        profile: {
            height: 50,
            background: '#444f55'
        },
        img: {
            height: 25,
            borderRadius: 22
        },
    }),
);

export default function MenuAppBar() {
    const classes = useStyles();
    const [auth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    function handleMenu(event: React.MouseEvent<HTMLElement>) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <div className={classes.root}>
            <AppBar className={classes.root} position="static">
                <Toolbar className={classes.noPadding} >
                    <div className={classes.title}>
                        <p className={classes.tekst}>Logget inn som:</p>
                        <strong className={classes.tekst}>Jan Hans1 (prøveadmin)</strong>
                    </div>
                    {auth && (
                        <div className={classes.profile}>
                            <IconButton
                                className={classes.profile}
                                aria-label="Account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                            >
                                <img alt="profilbilde" className={classes.img} src="data:image/jpeg;base64,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"/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Logg ut</MenuItem>
                                <MenuItem onClick={handleClose}>Min konto</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}