import React from 'react';
import { Flex, SimpleGrid, VStack } from '@chakra-ui/react';
import { Button, Input, Link, Typography } from 'components';
import { useFormik } from 'formik';
import RegistrationSchema from 'schema/userRegistration.schema';
import useCreateUser from 'hooks/mutations/useCreateUser';
import { useNavigate } from 'react-router-dom';
import { getPreviousRoute, removePreviousRoute } from 'utils/auth';

function Register() {
  const navigate = useNavigate();
  const { createUser, createUserState } = useCreateUser();
  const previousRoute = getPreviousRoute();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: RegistrationSchema,
    onSubmit: (payload) => {
      createUser(payload, (data) => {
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
        maxWidth="600px"
        width="100%"
        borderRadius="24px"
      >
        <Typography textStyle="7" fontWeight={700} mb={{ base: '30px', sm: '40px', md: '60px' }}>
          Create an Account
        </Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit(e);
          }}
          id="user-registration-form"
          style={{ width: '100%' }}
        >
          <VStack spacing={'20px'} width="100%">
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={'20px'}>
              <Input
                id="firstName"
                name="firstName"
                variant="outline"
                placeholder="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.firstName && Boolean(formik.errors.firstName)}
                errorMsg={formik.errors.firstName}
              />
              <Input
                id="lastName"
                name="lastName"
                variant="outline"
                placeholder="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.lastName && Boolean(formik.errors.lastName)}
                errorMsg={formik.errors.lastName}
              />
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={'20px'}>
              <Input
                id="email"
                name="email"
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
                name="password"
                variant="outline"
                placeholder="Your Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.password && Boolean(formik.errors.password)}
                errorMsg={formik.errors.password}
              />
            </SimpleGrid>

            <Input
              id="confirmPassword"
              name="confirmPassword"
              variant="outline"
              placeholder="Confirm Password"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
              errorMsg={formik.errors.confirmPassword}
            />
            <Button
              width="100%"
              variant="solid"
              mode="secondary"
              type="submit"
              isDisabled={createUserState.isLoading || Object.keys(formik.errors).length !== 0}
              isLoading={createUserState.isLoading}
            >
              Create Account
            </Button>
            <Link fontWeight={500} href="/login">
              Already A member? Login
            </Link>
          </VStack>
        </form>
      </Flex>
    </Flex>
  );
}
export default Register;
