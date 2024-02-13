import { Notify } from 'notiflix';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/authSlice';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  Title,
  WrapForm,
} from './RegisterForm.styled';
import { StyledButton } from 'components/UserMenu/UserMenu.styled';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(registerThunk(data));
    reset();
  };

  return (
    <>
     <WrapForm>
      <Title>Create your account</Title>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel>
          <span>Name:</span>
          <StyledInput
            {...register('name', { required: true })}
            type="text"
            placeholder="name or/and surname"
          />
          {errors.name && onSubmit && Notify.failure('This field is required')}
        </StyledLabel>
        <StyledLabel>
          <span>Email:</span>
          <StyledInput
            {...register('email', { required: true })}
            type="email"
            placeholder="example@mail.com"
          />
          {errors.email && onSubmit && Notify.failure('This field is required')}
        </StyledLabel>
        <StyledLabel>
          <span>Password:</span>
          <StyledInput
            {...register('password', { required: true, minLength: 7 })}
            type="password"
            placeholder="password"
          />
          {errors.password &&
            onSubmit &&
            Notify.failure('Password is required with 7 characters')}
        </StyledLabel>

        <StyledButton type="submit">Continue</StyledButton>
      </StyledForm>
     </WrapForm>
    </>
  );
};

export default RegisterForm;