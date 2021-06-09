import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
import { register } from "../../userSlice"
import { unwrapResult } from '@reduxjs/toolkit';
import { SnackbarProvider, useSnackbar } from 'notistack';
Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {
    try {
      // console.log('Form submit:', values);
      values.username = values.email
      const action = register(values);

      const resultAction = await dispatch(action)
      unwrapResult(resultAction)
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog()
      }
      enqueueSnackbar('Register Success', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' })
      console.log('Fail to register:', error);
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
