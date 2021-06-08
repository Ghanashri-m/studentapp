import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Typography,
    Box,
    Grid,
    Hidden,
    Card,
    CardActions,
    MenuItem,
    CardActionArea,
    CardContent,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Select from '@material-ui/core/Select';
// import {timeFromNow} from './utils';
import Navbar from './navbar';

// CSS styles
const useStyles = makeStyles(theme=>({
    mainContainer: {
        background: '#233',
        height: '100%'
    },
    cardContainer: {
        width: '95vw',
        margin: '1rem auto'
    },
    container : {
        flexDirection: 'column !important',
        marginTop: '4rem',
        paddingTop: '2rem'
    },
    menuItem: {
        background: 'transparent',
        '&:hover': {
            background: '#e5f2fd !important'
        },
        '&:active': {
            color: '#2c5cc5 !important',
            background: '#e5f2fd !important'
        }
    },
    bullet: {
        paddingRight: '1rem',
        fontSize: '24px'
    },
    button: {
        margin: theme.spacing(1),
    },
    ticketsHeader: {
        color: 'white',
        marginLeft: '3rem',
        [theme.breakpoints.down("md")]: {
            marginLeft: '1rem',
        }
    }
}));

const Tickets = () => {
    const classes = useStyles();
    // const [tickets, setTickets] = useState([]);

    // useEffect(() => {
    //     getTickets();
    // }, [])


    return (
        <Box component='div' className={classes.mainContainer}>
            <Navbar />
            <Grid container className={classes.container} justify="center">
                <Typography gutterBottom variant='h5' className={classes.ticketsHeader}>
                    All Tickets
                </Typography>
                <Grid item xs={12} sm={12} md={12} key={0}>
                    <Card className={classes.cardContainer}>
                        <Hidden mdDown>
                            <CardActionArea disableRipple style={{display: 'flex', justifyContent: 'space-between'}}>
                                <CardContent>
                                    <Typography gutterBottom variant='h6' id={1}>
                                        Ticket <span style={{color: 'tomato'}}> #1</span>
                                    </Typography>
                                    <Typography variant='body2' style={{color: '#6f7c87'}} component='p'>
                                        Description
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                <div style={{marginRight: '2rem'}}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        startIcon={<EditIcon />}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className={classes.button}
                                        startIcon={<DeleteIcon />}
                                    >
                                        Delete
                                    </Button>
                                </div>
                                </CardActions>
                            </CardActionArea>
                        </Hidden>
                        <Hidden mdUp>
                            <CardActionArea disableRipple>
                                <CardContent>
                                    <Typography gutterBottom variant='h6' id={1}>
                                        Ticket<span style={{color: 'tomato'}}> #1</span>
                                    </Typography>
                                    <Typography variant='body2' style={{color: '#6f7c87'}} component='p'>
                                        Description
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                <div style={{marginRight: '2rem'}}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        startIcon={<EditIcon />}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className={classes.button}
                                        startIcon={<DeleteIcon />}
                                    >
                                        Delete
                                    </Button>
                                </div>
                                </CardActions>
                            </CardActionArea>
                        </Hidden>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Tickets;
