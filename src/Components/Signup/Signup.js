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
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp=(props)=> {
  const classes = useStyles();
  const data={
    email:props.email,
    password:props.password,
    name:props.name,
    age:props.age,
    gender:props.gender,
    street:props.street,
    state:props.state,
    city:props.city,
    zip:props.zip
  }
  let disabling=true
  if(props.email===null || props.password ===null|| props.name ===null|| props.age ===null|| props.gender ===null|| props.street ===null|| props.state ===null|| props.city ===null|| props.zip ===null){
    disabling=true
  }else   if(props.email===''|| props.password ===''|| props.name ===''|| props.age ===''|| props.gender ===''|| props.street ===''|| props.state ===''|| props.city ===''|| props.zip ===''){

    disabling=true
  }
  else{
    disabling=false
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
  {props.error!=null?<h3>{props.error}</h3>:null}

        <form className={classes.form} >
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Name"
                autoFocus
            onChange={(event)=>{props.onNamechanged(event.target.value)}}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
            onChange={(event)=>{props.onEmailchanged(event.target.value)}}
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            onChange={(event)=>{props.onPasswordchanged(event.target.value)}}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="age"
                label="Age"
                type="number"
                InputProps={{ inputProps: { min: 1, max: 100} }}
                id="age"
                autoComplete="current-password"
            onChange={(event)=>{props.onAgechanged(event.target.value)}}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="gender"
                label="Gender"
                type="text"
                list="filter"
                id="gender"
                autoComplete="current-gender"
            onChange={(event)=>{props.onGenderchanged(event.target.value)}}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="street"
                label="Street"
                type="text"
                list="filter"
                id="streer"
                autoComplete="current-street"
            onChange={(event)=>{props.onStreetchanged(event.target.value)}}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="city"
                label="City"
                type="text"
                list="filter"
                id="city"
                autoComplete="current-city"
            onChange={(event)=>{props.onCitychanged(event.target.value)}}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="state"
                label="State"
                type="text"
                list="filter"
                id="state"
                autoComplete="current-state"
            onChange={(event)=>{props.onStatechanged(event.target.value)}}

              />
               </Grid>
               <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="zip"
                label="Zip Code"
                type="number"
                InputProps={{ inputProps: { min: 100000, max: 999999} }}
                list="filter"
                id="zip"
                autoComplete="current-zip"
            onChange={(event)=>{props.onZipchanged(event.target.value)}}

              />
            </Grid>
    
          </Grid>

          {disabling===true?
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled
            color="primary"
            className={classes.submit}
            onClick={(event)=>props.onSignin(event,data)}

          >
            Sign Up
          </Button>:
          <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={(event)=>props.onSignin(event,data)}

        >
          Sign Up
        </Button>}


          <Grid container justify="flex-end">
            <Grid item>
              <Link variant="body2" onClick={props.changed}style={{color:"blue" ,cursor:"pointer"}}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
const mapStatetoProps = state =>{
  return{
      token:state.auth.token,
      name:state.auth.name,
      email:state.auth.email,
        state:state.auth.state,
        zip:state.auth.zip,
        street:state.auth.street,
       city:state.auth.city,
    
      password:state.auth.password,
      age:state.auth.age,
      gender:state.auth.gender,
            userdata:state.auth.userdata,
      error:state.auth.error

  }
}
const mapDispatchToPRops = dispatch =>{
  return{
    onSignin:(event,data)=>dispatch(actions.signinuser(event,data)),

      onEmailchanged:(data)=>dispatch(actions.emailchange(data)),
      onPasswordchanged:(data)=>dispatch(actions.passwordchange(data)),
      onNamechanged:(data)=>dispatch(actions.namechange(data)),
      onAgechanged:(data)=>dispatch(actions.agechange(data)),
      onGenderchanged:(data)=>dispatch(actions.genderchange(data)),
      onCitychanged:(data)=>dispatch(actions.citychange(data)),
      onStatechanged:(data)=>dispatch(actions.statechange(data)),
      onStreetchanged:(data)=>dispatch(actions.streetchange(data)),
      onZipchanged:(data)=>dispatch(actions.zipchange(data)),

      

}
}
export default connect(mapStatetoProps,mapDispatchToPRops)(SignUp)