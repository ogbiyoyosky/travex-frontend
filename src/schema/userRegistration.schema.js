import * as Yup from 'yup';

const RegistrationSchema = Yup.object().shape({
  firstName: Yup.string()
    .label('Firstname')
    .required('Firstname should not be empty')
    .min(2, 'Must have at least 2 characters'),
  lastName: Yup.string()
    .label('Lastname')
    .required('Lastname should not be empty')
    .min(2, 'Must have at least 2 characters'),
  email: Yup.string('Enter your email').required('Email is required').email('Email is invalid'),
  password: Yup.string()
    .label('Password')
    .required('Password should not be empty')
    .min(8, ({ min }) => ` ${min} Characters or longer`),
  confirmPassword: Yup.string()
    .label('Confirm Password')
    .required('Confirm your password')
    .oneOf([Yup.ref('password')], 'Passwords does not match'),
});

export default RegistrationSchema;
