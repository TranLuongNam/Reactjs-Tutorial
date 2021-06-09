import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/Form-Control/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Button, makeStyles, Typography, LinearProgress } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PasswordField from 'components/Form-Control/PasswordField';
import { useSnackbar } from '../../../../../node_modules/notistack/dist/index';

const useStyles = makeStyles((theme) => ({
  root: {
    position:'relative'
    // paddingTop: theme.spacing(1),
  },
  progress: {
    position: 'absolute',
    top: theme.spacing(1),
    left: 0,
    right:0
  },
  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    paddingTop: theme.spacing(1),
    textAlign: 'center',
  },
  submitBtn: {
    margin: theme.spacing(1, 0, 1, 0),
  },
}));
RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('Please Enter Your FullName!')
      .test('Should Has Ai Least Two Word!', 'Please Enter FullName At Least Two Word!', (value) => {
        return value.split(' ').length >= 2;
      })
      .trim(),
    email: yup.string().required('Please Enter Your Email!').email('Please Enter A Email  Valid!'),
    password: yup.string().required('Pleasr Enter Your Password!').min(6, 'Please Enter Least At 6 Character!'),
    retypePassword: yup
      .string()
      .required('Please Enter Retype Your Password!')
      .oneOf([yup.ref('password')], 'Password Does Not Match!'),
  });

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });
  const handleFormSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
     await onSubmit(values);
    }
  };
  const {isSubmitting} = form.formState
  return (
   <>
      { isSubmitting && <LinearProgress className={classes.progress} />}
      <div className={classes.root}>
        <Avatar className={classes.avatar}>
          <LockOutlined></LockOutlined>
        </Avatar>
        <Typography className={classes.title}>Create An Account !</Typography>

        <form onSubmit={form.handleSubmit(handleFormSubmit)}>
          <InputField form={form} name="fullName" label="FullName" />
          <InputField form={form} name="email" label="Email" />
          <PasswordField form={form} name="password" label="Password" />
          <PasswordField form={form} name="retypePassword" label="RetypePassword" />

          <Button type="submit" className={classes.submitBtn} fullWidth variant="contained" color="primary">
            Sign Up
        </Button>
        </form>
      </div>
      </>
  );
}

export default RegisterForm;
