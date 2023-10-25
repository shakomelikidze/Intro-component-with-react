import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


export default function Inputs() {

  const validationScheme = Yup.object({
    firstName : Yup.string().required('First Name cannot be empty'),
    lastName : Yup.string().required('Last Name cannot be empty'),
    email : Yup.string().required('Email cannot be empty').email('Looks like this is not an email'),
    password: Yup.string().required('Password cannot be empty')
  })

  const {register, handleSubmit, formState} = useForm({
    resolver : yupResolver(validationScheme)
  });
  
  const onSubmit = async (data) => {
    // console.log(data);
  }

  return (
  <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        type='text'
        placeholder='First Name' 
        {...register('firstName')}
      />
      {formState.errors.firstName && (
          <>
            <p className="error-text">{formState.errors.firstName.message}</p>
            <svg className='error-image' width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>
          </>
      )}
      <input 
        type='text'
        placeholder='Last Name'
        {...register('lastName')}
      />
      <p className='error-text'>{formState.errors.lastName && formState.errors.lastName.message}</p>
      <input 
        type='text'
        placeholder='Email'
        {...register('email')}
      />
      <p className='error-text'>{formState.errors.email && formState.errors.email.message}</p>
      <input 
        type='password'
        placeholder='Password'
        {...register('password')}
      />
      <p className='error-text'>{formState.errors.password && formState.errors.password.message}</p>
      <button type='submit' className='claim-btn'>CLAIM YOUR FREE TRIAL</button>
    </form>
   
  </>
  )
}
