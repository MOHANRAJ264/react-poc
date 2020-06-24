import React from 'react';
import clsx from 'clsx';
import {connect} from 'react-redux'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HouseIcon from '@material-ui/icons/House';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import StorefrontIcon from '@material-ui/icons/Storefront';
import classes from './Sidedrawer.css'
import {NavLink} from 'react-router-dom'
import Backdrop from '../Backdrop/Backdrop'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const PersistentDrawerLeft=(props)=> {
  const classesstyle = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [drop, setDrop] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setDrop(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setDrop(false);
  };

  return (
    <div className={classes.Sidedrawer}>
    <div className={classesstyle.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classesstyle.appBar, {
          [classesstyle.appBarShift]: open,
        })}
      >
        <Toolbar style={{backgroundColor:'#6D6D6D '}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classesstyle.menuButton, open && classesstyle.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <StorefrontIcon style={{marginRight:"25px" }}/>
            e-BUY
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classesstyle.drawer}
        variant="persistent"
        onClick={handleDrawerClose}
        anchor="left"
        open={open}
        classesstyle={{
          paper: classesstyle.drawerPaper,
        }}
      >
        <div className={classesstyle.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
         
          {props.token!=null ?
          <div>
         <ListItem button ><NavLink to="/" exact > <ListItemIcon><HouseIcon/><ListItemText primary={"HOME"}/></ListItemIcon></NavLink></ListItem>
         <ListItem button ><NavLink to="/cart" exact > <ListItemIcon><LocalGroceryStoreIcon/><ListItemText primary={"CART"}/></ListItemIcon></NavLink></ListItem>
         <ListItem button ><NavLink to="/orders" exact > <ListItemIcon><LocalShippingIcon/><ListItemText primary={"ORDERS"}/></ListItemIcon></NavLink></ListItem>
         <ListItem button ><NavLink to="/logout" exact > <ListItemIcon><LockOpenIcon/><ListItemText primary={"LOGOUT"}/></ListItemIcon></NavLink></ListItem>
         </div>
         :
         <div>
         <ListItem button ><NavLink to="/" exact > <ListItemIcon><HouseIcon/><ListItemText primary={"HOME"}/></ListItemIcon></NavLink></ListItem>
         <ListItem button ><NavLink to="/auth" exact > <ListItemIcon><LockOpenIcon/><ListItemText primary={"LOGIN"}/></ListItemIcon></NavLink></ListItem>
         </div>}
          
        </List>
      </Drawer>
         </div>
         <Backdrop show={drop} clicked={handleDrawerClose}/>
    </div>
  );
}
const mapStateToProps=state=>{
  return{
    token:state.auth.token
  }
}
export default connect(mapStateToProps,null)(PersistentDrawerLeft)