import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string('Enter your email')
    .required('Email is required')
    .email('Enter a valid email address'),
  password: Yup.string('Enter your password')
    .required('Password is required')
    .min(3, 'Password must be at least 3 characters')
    .max(256, 'Password must not exceed 256 characters'),
});

export default LoginSchema;
