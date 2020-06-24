import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../../Store/actions/index'


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" >
        e-BUY
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



const SignIn=(props)=> {
  const classes = useStyles();
  const data={
    email:props.email,
    password:props.password
  }
  let disabling=true
  if(props.email===null || props.password ===null){
    disabling=true
  }else if(props.email===''||props.password===''){
    disabling=true
  }
  else{
    disabling=false
  }
  //console.log(disabling)
  //console.log(props.email,props.password)
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
  {props.error!=null?<h3>{props.error}</h3>:null}

        <form className={classes.form} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(event)=>{props.onEmailchanged(event.target.value)}}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event)=>{props.onPasswordchanged(event.target.value)}}

          />
       
          {disabling===true?
          <Button
            type="submit"
            fullWidth
            disabled
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(event)=>props.onLogin(event,data)}
          >
            Sign In
          </Button>  :
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(event)=>props.onLogin(event,data)}
          >
            Sign In
          </Button>}


          <Grid container>
            
            <Grid item>
              <Link onClick={props.changed} style={{color:"blue" ,cursor:"pointer"}} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
const mapStatetoProps = state =>{
  return{
      token:state.auth.token,
      email:state.auth.email,
      password:state.auth.password,
      userdata:state.auth.userdata,
      error:state.auth.error

  }
}
const mapDispatchToPRops = dispatch =>{
  return{
      onLogin:(event,data)=>dispatch(actions.loginuser(event,data)),
      onEmailchanged:(data)=>dispatch(actions.emailchange(data)),
      onPasswordchanged:(data)=>dispatch(actions.passwordchange(data))
}
}
export default connect(mapStatetoProps,mapDispatchToPRops)(SignIn)