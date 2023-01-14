import React from 'react';
import { Flex, VStack } from '@chakra-ui/react';
import { Button, Input, Link, Typography } from 'components';
import useLogin from 'hooks/mutations/useLogin';
import { useFormik } from 'formik';
import LoginSchema from 'schema/login.schema';
import { useNavigate } from 'react-router-dom';
import { getPreviousRoute, removePreviousRoute } from 'utils/auth';

function Login() {
  const navigate = useNavigate();
  const { login, loginState } = useLogin();
  const previousRoute = getPreviousRoute();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (payload) => {
      login(payload, (data) => {
        if (previousRoute) {
          navigate(previousRoute);
          removePreviousRoute();
        } else {
          if (data.data.user.Role === 'master_admin') {
            navigate('/dashboard');
          } else if (data.data.user.Role === 'admin') {
            navigate('/my-listings');
          } else {
            navigate('/');
          }
        }
      });
    },
  });

  return (
    <Flex
      height="100%"
      width="100%"
      alignItems="center"
      justifyContent="center"
      bg="gray.200"
      p="20px"
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bg="white"
        py="60px"
        px={{ base: '30px', sm: '40px', md: '60px' }}
        borderRadius="24px"
        maxWidth="600px"
        width="100%"
      >
        <Typography textStyle="7" fontWeight={700} mb={{ base: '30px', sm: '40px', md: '60px' }}>
          Log In
        </Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit(e);
          }}
          id="login"
          style={{ width: '100%' }}
        >
          <VStack spacing={'20px'} width="100%">
            <Input
              id="email"
              variant="outline"
              placeholder="Email Address"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.email && Boolean(formik.errors.email)}
              errorMsg={formik.errors.email}
            />
            <Input
              id="password"
              variant="outline"
              placeholder="Your Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.password && Boolean(formik.errors.password)}
              errorMsg={formik.errors.password}
            />
            <Button
              width="100%"
              variant="solid"
              mode="secondary"
              type="submit"
              isDisabled={loginState.isLoading || Object.keys(formik.errors).length !== 0}
              isLoading={loginState.isLoading}
            >
              Login
            </Button>
            <Link fontWeight={500} href="/register">
              Not A member? Create Account
            </Link>
          </VStack>
        </form>
      </Flex>
    </Flex>
  );
}
export default Login;
