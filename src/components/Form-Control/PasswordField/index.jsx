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
  // const { formState: { errors } } = form;
  // const { form, name, label } = props;
  const { control } = form;
  // const { errors } = formState;
  // const hasError = errors[name];
  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };
  // console.log(errors, formState.touchedFields[name]);
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, isTouched, error } }) => (
          <>
            <FormControl error={isTouched && invalid} fullWidth margin="normal" variant="outlined">
              <InputLabel htmlFor={name}>{label}</InputLabel>
              <OutlinedInput
                id={name}
                error={invalid}
                type={showPassword ? 'text' : 'password'}
                label={label}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={toggleShowPassword} edge="end">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                helperText={error?.message}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                disabled={disabled}
              />
            </FormControl>
            <FormHelperText error={invalid}>{error?.message}</FormHelperText>
          </>
        )}
      />

    </div>
  );
}

export default PasswordField;
