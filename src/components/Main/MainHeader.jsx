import React, { useState, useCallback, useEffect } from 'react'
import { Link } from 'gatsby'
import { Button, Grid, Container, Typography, TextField, OutlinedInput, InputAdornment, Avatar, IconButton, InputBase, Drawer, Divider, Box } from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles';
import { useSpring, animated, interpolate } from 'react-spring';
import { Search, ChevronLeft, ChevronRight, Menu, Palette, ChevronLeftOutlined, GitHub } from '@material-ui/icons';
import '../../styles/css/Mainheader.css'
import MainMenu from './MainMenu'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

    headers: {
        fontWeight: 700,
    },
    search: {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        width: "22px"

    },
    searchbox: {
        willChange: "width"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,


    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "rgba(0,0,0,0.8)",
        border: "0px"
    },
    content: {
        flexGrow: 1,
        /*         padding: theme.spacing(3), */
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
        height: "100%"
    },




}));

const MainHeader = () => {
    const classes = useStyles();

    const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }))





    const [checked, setchecked] = useState(false);
    const [state, toggle] = useState(true)
    const [open, setopen] = useState(false);
    const [progress, setProgress] = React.useState(10);

    const [menuvisible, setmenuvisible] = useState(true);

    const style = useSpring({
        width: state ? "22px" : "100%",
    });


    const OpenProfile = () => {
        window.open("https://github.com/poompal");
    }



    const CollapIn = () => {
        toggle(!state)
    }

    return (
        <>
            <div>
                <div >

                    <Drawer open={open} variant="persistent" anchor="left" classes={{
                        paper: classes.drawerPaper
                    }} style={{
                        backgroundColor: "black"
                    }}>
                        <div>
                            <IconButton onClick={() => setopen(!open)} style={{
                                float: "right"
                            }}>
                                <ChevronLeftOutlined style={{
                                    color: 'white'
                                }}></ChevronLeftOutlined>
                            </IconButton>
                        </div>
                        <MainMenu></MainMenu>
                    </Drawer>

                </div>
                <header>

                    <Box style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}>
                        <Grid container spacing={3}>
                            <Grid container item xs={2} alignItems="center">
                                <Box display="flex " alignItems="center">
                                    <IconButton onClick={() => setopen(!open)} style={{

                                    }}>
                                        <Menu ></Menu>
                                    </IconButton>
                                    <div style={{

                                    }}>
                                        <div className={classes.search}>

                                            <animated.div className={classes.searchbox} style={style}>
                                                <InputBase placeholder="Search" startAdornment={
                                                    <InputAdornment>
                                                        <Search>

                                                        </Search>
                                                    </InputAdornment>
                                                } onClick={CollapIn}>

                                                </InputBase>

                                            </animated.div>


                                        </div>

                                    </div>
                                </Box>
                            </Grid>
                            <Grid container item xs={8}>


                                <Grid item xs={4} >

                                    <div className="HeaderMenu">
                                        <Grid container spacing={6} alignItems="center" >
                                            <Grid item xs={4} >
                                                <Link to="/app/About">About</Link>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Link to="/app/Code">Code</Link>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Link to="/app/Study">Study</Link>
                                            </Grid>

                                        </Grid>

                                    </div>


                                </Grid>
                                <Grid item xs={4}>


                                    <div className="logo_inside anim-typewriter">Rude_Field</div>



                                </Grid>
                                <Grid item xs={4}>
                                    {/*                                                     <div className={classes.gas2}>

                        <img src={mainimg_sub} style={{
                            transform: "rotate(90deg)",
                            objectPosition: "-160px 0px"
                        }}></img>
                    </div> */}

                                    <div className="HeaderMenu">
                                        <Grid item container spacing={6} >
                                            <Grid item xs={4}>
                                                <Link to="/app/Game">Game</Link>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Link to="/app/Music">Music</Link>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Link to="/app/Freefire">Freefire</Link>
                                            </Grid>
                                        </Grid>

                                    </div>
                                </Grid>



                            </Grid>
                            <Grid item xs={2}>
                                <Box position="relative">
                                    <GitHub onClick={OpenProfile} style={{
                                        marginTop: "10px",
                                        float: "right",
                                        marginRight: "20px"
                                    }}></GitHub>
                                </Box>
                            </Grid>
                        </Grid>
                        {/*                                     <div id="icondiv">
        <img src={mainimg} height="130px" ></img>
    </div> */}


                    </Box>


                    <Box display="flex" alignItems="center">
                        {/*                         <Box>
<IconButton onClick={() => setopen(!open)}>
<Menu></Menu>
</IconButton>
</Box> */}
                        <Box alignSelf="center" width="100%">
                            <Typography component={'span'}>
                                {/*  <Card style={{
    paddingTop: "10px"
}}>
    <CardContent>
        <Box display="flex" alignItems="center">
            <Box width="100%" >
                <LinearProgress variant="determinate" value={progress} />
            </Box>
            <Box minWidth={35} textAlign="center">
                <Typography component={'span'} variant="body2" color="textSecondary">
                    {progress}%
                </Typography>

            </Box>

        </Box>


    </CardContent>
</Card> */}
                            </Typography>
                        </Box>


                    </Box>
                    <Divider style={{
                        margin: "20px"
                    }}></Divider>
                </header>
                {/*                 header
                <div>
                    <Link to='/app/About/'>About</Link>
                    <Link to='/app/Code/'>Code</Link>
                </div> */}
            </div>

        </>
    );
}

export default MainHeader;