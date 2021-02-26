import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Countdown from 'react-countdown';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function generate(element) {
    return [0, 1, 2,3,4,5].map((value) =>
        React.cloneElement(element, {
        key: value,
        }),
    );
}

function Homepage() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                Username
                </Typography>
                <Button variant="outlined" color="inherit">
                Connect Wallet
                </Button>
            </Toolbar>
            </AppBar>


            <Grid item xs={12} md={12}>
            {/* <Typography variant="h6" className={classes.title}>
                Some Random Text
            </Typography> */}
            <div className={classes.demo}>
                <List dense={true}>
                {generate(
                    <ListItem alignItems="flex">
                    <ListItemAvatar >
                        <Avatar>
                        <MonetizationOnOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="AAVE"
                        secondary="$360"
                    />

                    <ListItemSecondaryAction>
                        <Countdown date={Date.now() + 10000000000} />
                            <IconButton edge="end">
                            <Button variant="outlined" color="primary" size="small">
                            Bull
                            </Button>
                            </IconButton>
                            <IconButton edge="end">
                            <Button variant="outlined" color="secondary" size="small">
                            Bear
                            </Button>
                            </IconButton>
                        
                    </ListItemSecondaryAction>
                    </ListItem>,
                )}
                </List>
            </div>
            </Grid>
            
        </div>
    )
}

export default Homepage;