import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

export default function Inputs() {

  const validationScheme = Yup.object({
    firstName : Yup.string().required(),
    lastName : Yup.string().required(),
    email : Yup.string().required().email(),
    password: Yup.string().required().min(6)
  })

  const {register, handleSubmit, formState} = useForm({
    resolver : yupResolver(validationScheme)

  });
  
  const onSubmit = async (data) => {
    console.log(data);
  }

  return (
  <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        type='text'
        placeholder='First Name' 
        {...register('firstName')}
      />
      <p>{formState.errors.firstName && formState.errors.firstName.message}</p>
      <input 
        type='text'
        placeholder='Last Name'
        {...register('lastName')}
      />
      <input 
        type='text'
        placeholder='Email'
        {...register('email')}
      />
      <input 
        type='password'
        placeholder='Password'
        {...register('password')}
      />
      <button type='submit' className='claim-btn'>CLAIM YOUR FREE TRIAL</button>
    </form>
   
  </>
  )
}
