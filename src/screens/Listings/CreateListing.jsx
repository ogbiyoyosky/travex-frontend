import React, { useState } from 'react';
import { Box, Center, Flex, HStack, useRadioGroup, VStack } from '@chakra-ui/react';
import { Button, EmptyState, Input, Loader, Textarea, Typography } from 'components';
import RadioCard from 'components/Forms/RadioCard';
import colors from 'config/colors';
import { useProfile } from 'hooks/queries/useProfile';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useFormik } from 'formik';
import createListingSchema from 'schema/createListing.schema';
import useCreateListing from 'hooks/mutations/useCreateListing';

const options = ['bar', 'club', 'park', 'restaurant'];

export default function CreateListing() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { data, isLoading } = useProfile();
  const { createListing, createListingState } = useCreateListing(data?.Role);

  const [state, setState] = useState({
    locationType: 'bar',
    image: null,
  });

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'locationType',
    defaultValue: 'bar',
    onChange: (val) => setState((state) => ({ ...state, locationType: val })),
  });
  const group = getRootProps();

  const uploadImage = ({ target }) => {
    const fileToUpload = target.files[0];

    setState((state) => ({ ...state, image: fileToUpload }));
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      description: '',
    },
    validationSchema: createListingSchema,
    onSubmit: (payload) => {
      const listingPayload = {
        ...payload,
        ...state,
        userId: searchParams.get('userId'),
      };
      const formData = new FormData();
      formData.append('listingPayload', listingPayload);

      createListing(listingPayload, () => navigate('/my-listings'));
    },
  });

  if (isLoading) {
    return <Loader height="80vh" />;
  }
  if (data?.Role === 'customer') {
    return (
      <EmptyState
        bg="white"
        height="400px"
        heading="You do not have enough permission to access this screen. Click the button below to go back"
        btn={
          <Button mode="secondary" variant="solid" size="lg" onClick={() => navigate(-1)}>
            Go Back
          </Button>
        }
      />
    );
  }
  return (
    <Box>
      {/* Hero */}
      <Hero user={data} />
      {/* Form */}
      <Center>
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          width="80%"
          position="absolute"
          top={{ base: '290px', md: '320px' }}
          bg="white"
          borderRadius="10px"
          border={`1px solid ${colors.gray[200]}`}
          py={{ base: '20px', md: '60px' }}
          px={{ base: '24px', md: '80px', lg: '120px' }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit(e);
            }}
            id="createListing"
            style={{ width: '100%' }}
          >
            <VStack spacing="24px" width="100%">
              <Input
                label="Name"
                id="name"
                variant="outline"
                placeholder="Enter the title of your listing here..."
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.name && Boolean(formik.errors.name)}
                errorMsg={formik.errors.name}
              />
              <Input
                label="Address"
                id="address"
                variant="outline"
                placeholder="Enter the listing address here..."
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.address && Boolean(formik.errors.address)}
                errorMsg={formik.errors.address}
              />
              <Textarea
                label="Description"
                id="description"
                placeholder="Explain what your listing does, the more easy it is to comprehend the higher conversion you will get."
                minH="150px"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.description && Boolean(formik.errors.description)}
                errorMsg={formik.errors.description}
              />

              <Box width="100%">
                <Typography textStyle="13" color="gray.400" mb="8px">
                  Listing Category
                </Typography>
                <Typography textStyle="14" color="gray.300" mb="22px">
                  Place your listing in the appropriate category to speed up ease of location and to
                  make life easier for your potential customers.
                </Typography>
                <HStack flexWrap="wrap" spacing={{ base: '4px', sm: '10px' }} {...group}>
                  {options.map((value) => {
                    const radio = getRadioProps({ value });
                    return (
                      <RadioCard key={value} {...radio}>
                        {value}
                      </RadioCard>
                    );
                  })}
                </HStack>
              </Box>

              <Box width="100%">
                <Typography textStyle="13" color="gray.400" mb="8px">
                  Upload Cover Photo
                </Typography>
                <Typography textStyle="14" color="gray.300" mb="22px">
                  Add an image for easy identification, make sure the image is high quality and very
                  visible. This makes your listing more attractive.
                </Typography>

                <Input id="coverPhoto" type="file" accept={['image/*']} onChange={uploadImage} />
              </Box>
            </VStack>
            <Center>
              <Button
                mode="secondary"
                variant="solid"
                size="lg"
                width="180px"
                mt="60px"
                type="submit"
                rightIcon={<IoIosArrowRoundForward fontSize="24px" />}
                isDisabled={
                  createListingState.isLoading ||
                  Object.keys(formik.errors).length !== 0 ||
                  !state.image
                }
                isLoading={createListingState.isLoading}
              >
                Add Listing
              </Button>
            </Center>
          </form>
        </Flex>
      </Center>
    </Box>
  );
}

const Hero = ({ user }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      py="60px"
      px="40px"
      bg="gray.400"
    >
      <Typography textStyle="6" color="white" textAlign="center" fontWeight={700} mb="16px">
        {user?.Locations?.length > 0 ? 'Welcome Back' : 'Hi'}, {user ? user?.First_name : ''}
      </Typography>
      <Typography textStyle="9" color="white" textAlign="center" fontWeight={400}>
        Get started by creating a listing
      </Typography>
    </Flex>
  );
};
