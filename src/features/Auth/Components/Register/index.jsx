import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
import {register} from "../../userSlice"
import { unwrapResult } from '@reduxjs/toolkit';
Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
   try {
     console.log('Form submit:', values);
      values.username = values.email
     const action = register(values);
     console.log('action:',action);
     const resultAction = await dispatch(action)
     console.log('resultAction:',resultAction);
    const user = unwrapResult(resultAction)
    console.log('user:',user);
   } catch (error) {
     console.log('Fail to register:',error);
   }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
