import React from 'react'
import { Avatar,Button,Paper,Grid,Typography,Container, TextField } from '@material-ui/core';
import LockOutLinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
const Auth = () => {
  const classes=useStyles();
    const state=null;
    const isSignup=false;
    const handleSubmit=()=>{

    }
    const handleChange=()=>{

    }
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar classname={classes.avatar}>
          <LockOutLinedIcon/>
        </Avatar>
        <Typography variant='h5' >{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                <TextField name='firstName' label="First Name" handleChange={handleChange} autoFocus xs={6}></TextField>
                <TextField name='firstName' label="First Name" handleChange={handleChange} autoFocus xs={6}></TextField>
                <TextField name='firstName' label="First Name" handleChange={handleChange} autoFocus xs={6}></TextField>
                </>
              )
            }
          </Grid>
        </form>
      </Paper>

    </Container>
  )
}

export default Auth
