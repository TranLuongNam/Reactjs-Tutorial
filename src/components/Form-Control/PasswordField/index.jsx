import { FormHelperText } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function PasswordField(props) {
  const [showPassword, setShowPassword] = useState(false);
  const { name, form, label, disabled } = props;
  const { formState: { errors } } = form;
  // const { errors } = formState;
  const hasError = errors[name];
  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };
  // console.log(errors, formState.touchedFields[name]);
  return (
    <FormControl error={!!hasError} fullWidth margin="normal" variant="outlined">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Controller
        id={name}
        name={name}
        control={form.control}
        type={showPassword ? 'text' : 'password'}
        label={label}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={toggleShowPassword} edge="end">
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
          <OutlinedInput
            margin="normal"
            variant="outlined"
            fullWidth
            label={label}
            error={invalid}
            helperText={error?.message}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            value={value}
            disabled={disabled}
          />
        )}
      />
      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}

export default PasswordField;
