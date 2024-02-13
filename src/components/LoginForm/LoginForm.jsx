import {
  StyledForm,
  StyledInput,
  StyledLabel,
  Title,
  WrapForm,
} from 'components/RegisterForm/RegisterForm.styled';
import { StyledButton } from 'components/UserMenu/UserMenu.styled';
import { Notify } from 'notiflix';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/authSlice';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(loginThunk(data))
      .unwrap()
      .then(
        ({ user }) => Notify.success(`Welcome to your PhoneBook ${user.name}`),
        reset()
      )
      .catch(err => {
        Notify.failure('Please write the correct Email or Password');
      });
  };

  return (
    <>
    <WrapForm>    
      <Title>Welcome back</Title>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel>
          <p>Email:</p>
          <StyledInput
            {...register('email', { required: true })}
            type="email"
            placeholder="email"
          />
          {errors.email && onSubmit && Notify.failure('This field is required')}
        </StyledLabel>
        <StyledLabel>
          <p>Password:</p>
          <StyledInput
            {...register('password', { required: true, minLength: 7 })}
            type="password"
            placeholder="password"
          />
          {errors.password &&
            onSubmit &&
            Notify.failure('This field is required with minimum 7 characters')}
        </StyledLabel>

        <StyledButton type="submit">Log in</StyledButton>
      </StyledForm>
      </WrapForm>
    </>
  );
};

export default LoginForm;