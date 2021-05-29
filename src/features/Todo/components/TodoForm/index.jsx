import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/Form-Control/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup.string().required('Please Enter Title!').min(5, 'Title is too short!'),
  });

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });
  const handleFormSubmit = (values) => {
    const { onSubmit } = props;
    console.log('values in TodoForm:', values);
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };
  return (
    <form onSubmit={form.handleSubmit(handleFormSubmit)}>
      <InputField form={form} name="title" label="InputField" />
    </form>
  );
}

export default TodoForm;
