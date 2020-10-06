import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUpAlt';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from "@material-ui/core/InputAdornment";
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

import SignIn from '../FirebaseUI/SignIn';
import VideoList from '../VideoList/VideoList';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: 'white',
    color: 'grey',
    height: '64px',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  brand: {
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   height: '64px',
   cursor: 'pointer'
  },
  logo: {
      maxWidth: '45px',
      marginRight: '5px'
  },
  logoText: {
    fontSize: '22px'
  },
  toolbarItems: {
    display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   width: '100%'
  },
  searchBox: {
    width: '60%',
  }
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const history = useHistory();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function pushFirstBlockRoute (index) {
    switch(index){
      case 0:
        history.push('/');
        break;
      case 1:
        history.push('/trending');
        break;
      case 2:
        history.push('/subscriptions');
        break;
      default:
        history.push('/');
    }
  };

  function pushSecondBlockRoute (index) {
    switch(index){
      case 0:
        history.push('library');
        break;
      case 1:
        history.push('/history');
        break;
      case 2:
        history.push('/yourvideos');
        break;
      case 3:
        history.push('/watchlater');
        break;
      case 4:
        history.push('/likedvideos');
        break;
      default:
        history.push('/');
    }
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} >
        <div className={classes.brand} onClick={() => history.push('/')}>
            <img src="../assets/youtube.svg.png" alt="logo" className={classes.logo} />
            <div className={classes.logoText}>YouTube</div>
        </div>
      </div>
      <Divider />
      <List>
        {['Home', 'Trending', 'Subscriptions'].map((text, index) => (
          <ListItem button key={text} onClick={() => pushFirstBlockRoute(index)}>
            <ListItemIcon>
            {index === 0 && <HomeIcon /> }
            {index === 1 && <WhatshotIcon />}
            {index === 2 && <SubscriptionsIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Library', 'History', 'Your videos', 'Watch later', 'Liked videos'].map((text, index) => (
          <ListItem button key={text} onClick={() => pushSecondBlockRoute(index)} >
            <ListItemIcon>
                {index === 0 && <VideoLibraryIcon />}
                {index === 1 && <HistoryIcon />}
                {index === 2 && <OndemandVideoIcon />}
                {index === 3 && <WatchLaterIcon />}
                {index === 4 && <ThumbUpIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.toolbarItems}>
            <TextField 
            placeholder="Search" 
            variant="outlined" 
            margin="dense" 
            className={classes.searchBox} 
            InputProps={{
                endAdornment: (
                <InputAdornment>
                    <IconButton>
                    <SearchIcon />
                    </IconButton>
                </InputAdornment>
                )
             }}
            />
            <SignIn />
            {/* <Button 
            variant="outlined" 
            color="primary"
            onClick={() => history.push('/signin')}
            >
            Sign in</Button> */}
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.innerContainer}>
          {/* <VideoList /> */}
          <Switch>
            <Route exact path="/">
              <VideoList />
            </Route>
            <Route exact path="/trending">
              <h1>Trending Component goes here...</h1>
            </Route>
            <Route exact path="/subscriptions">
              <h1>Subscriptions Component goes here...</h1>
            </Route>
            <Route exact path="/library">
              <h1>Library Component goes here...</h1>
            </Route>
            <Route exact path="/history">
              <h1>History Component goes here...</h1>
            </Route>
            <Route exact path="/yourvideos">
              <h1>Your Videos Component goes here...</h1>
            </Route>
            <Route exact path="/watchlater">
              <h1>Watch Later Component goes here...</h1>
            </Route>
            <Route exact path="/likedvideos">
              <h1>Liked Videos Component goes here...</h1>
            </Route>
            <Route path="">
              <h1>Eror 404! Component not found</h1>
            </Route>
          </Switch>
        </div>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;