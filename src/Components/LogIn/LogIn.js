import React from 'react';
import logInImg from '../../assets/images/login.png'
import {NavLink, useNavigate, useLocation} from 'react-router-dom'
import './Register.css'

import auth from '../../firebase/firebase.init' //firebase auth imported

//mui materials
import {Container, Typography, Button, Grid, Divider, Chip, LoadingButton} from '@mui/material';

//react hook form
import {useForm} from 'react-hook-form'

//Google Sing up
import { useSignInWithGoogle, useSignInWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

 export default function LogIn (){
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth); //log in by Google
    const [updateProfile] = useUpdateProfile(auth);
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth); // log in by Email & Password

    //React Form Hook handling
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        await signInWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
    };

    const Navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if(user || gUser){
        Navigate(from, {replace: true});
    }
 
    let signInError;
    if(error || gError){
        signInError = error?.message || gError?.message
    }

    if(loading || gLoading){
        return <p>Loading ... </p>
    }

    return(
        <Container>
            <Grid container spacing={2} sx={{my:5, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Grid item xs={6} sm={6} md={6}>
                    <Typography variant='h5' sx={{fontWeight: '700', my: 3, textAlign: 'center'}}> LogIn Please </Typography>
                    
                    {/* react hook form  */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>
                            <span>Email</span>
                        </label>
                        <input 
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: 'Provide a valid Email'
                                }
                              })} 
                        />
                        <label className='helperText'>
                            {errors.email?.type === 'required' && <p>{errors.email.message}</p>}
                            {errors.email?.type === 'pattern' && <p>{errors.email.message}</p>}
                        </label>
                        
                        <label>
                            <span>Password</span>
                        </label>
                        <input 
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                              })} 
                        />
                        <label className='helperText'>
                            {errors.password?.type === 'required' && <p>{errors.password.message}</p>}
                            {errors.password?.type === 'minLength' && <p>{errors.password.message}</p>}
                        </label>
                        
                        
                        <Typography variant='p' sx={{color: 'red'}}> {signInError} </Typography> 
                        <input type="submit" />
                        <Divider>
                            <Chip label="Or" />
                        </Divider>
                        <Button onClick={()=> signInWithGoogle()} variant="contained" sx={{backgroundColor: '#45344', my: 3 }}>Google Login</Button>
                    </form>
                    
                    <NavLink to='/register' style={{textDecoration: 'none'}}> 
                        <Typography variant='h6' sx={{color: 'black', my:3, textAlign: 'center'}}> Haven't any account? click here to <span style={{color: '#00bed9'}}>Register</span> </Typography>
                    </NavLink>
                </Grid>
                <Grid item xs={5} sm={5} md={5}>
                    <img alt='login' src={logInImg} width='550px' height='auto' />
                </Grid>
            </Grid>
        </Container>
    )
 }