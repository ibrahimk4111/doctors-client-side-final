import React from 'react';
import logInImg from '../../assets/images/login.png';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';

import './Register.css';
import auth from '../../firebase/firebase.init';

//mui materials
import {Container, Typography, Button, Grid, Divider, Chip} from '@mui/material';
//react hook form
import {useForm} from 'react-hook-form'
//Google Sing up
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

export default function Register (){
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [CreateUserWithEmailAndPassword, eUser, eLoading, eError] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, upError] = useUpdateProfile(auth);
       
    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const Navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if(eUser || gUser){
        Navigate(from, {replace: true});
    }

    let signUpError;
    if(eError || gError || upError){
        signUpError = eError?.message || gError?.message || upError?.message
    }

    if(eLoading || gLoading){
        return <p>Loading ... </p>
    }

    const onSubmit = async (data) => {
            console.log(data)
            await CreateUserWithEmailAndPassword(data.email, data.password);
            await updateProfile({ displayName: data.name });
            // Navigate("/appointment")
        };

    return(
        <Container>
            <Grid container spacing={2} sx={{my:5, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Grid item xs={6} sm={6} md={6}>
                    <Typography variant='h5' sx={{fontWeight: '700', my: 3, textAlign: 'center'}}> Register </Typography>
                    
                    {/* react hook form  */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>
                            <span>name</span>
                        </label>
                        <input 
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                },
                              })} 
                        />
                        <label className='helperText'>
                            {errors.name?.type === 'required' && <p>{errors.name.message}</p>}
                        </label>

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
                            <span>Contact Number</span>
                        </label>
                        <input 
                            {...register("contact", {
                                required: {
                                    value: true,
                                    message: 'Contact Number is required'
                                },
                                // pattern: {
                                //     value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                //     message: 'Provide a valid Email'
                                // }
                              })} 
                        />
                        <label className='helperText'>
                            {errors.contact?.type === 'required' && <p>{errors.contact.message}</p>}
                        </label >

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
                        </label >

                        <Typography variant='p' sx={{color: 'red'}}> {signUpError} </Typography>                                              
                        
                        <input type="submit" />
                        
                        <Divider>
                            <Chip label="Or" />
                        </Divider>
                        <Button onClick={()=> signInWithGoogle()} variant="contained" sx={{backgroundColor: '#45344', my: 3 }}>Google</Button>                    
                    </form>
                        
                    <NavLink to='/login' style={{textDecoration: 'none'}}> 
                        <Typography variant='h6' sx={{color: 'black', my:3, textAlign: 'center'}}> Already have an account? <span style={{color: '#00bed9'}}>Log In</span> </Typography>
                    </NavLink>
                </Grid>
                <Grid item xs={5} sm={5} md={5}>
                    <img alt='login' src={logInImg} width='550px' height='auto' />
                </Grid>
            </Grid>
        </Container>
   )
}