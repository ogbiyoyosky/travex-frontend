import React from 'react';
import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import { Button, EmptyState, ListingCard, Loader, Typography } from 'components';
import { useUserListings } from 'hooks/queries/useListings';
import { useNavigate } from 'react-router-dom';
import { useProfile } from 'hooks/queries/useProfile';

function MyListings() {
  const { data, isLoading, isError } = useUserListings();
  const { data: user, isLoading: isLoadingUser } = useProfile();
  const navigate = useNavigate();

  if (isLoading || isLoadingUser) {
    return <Loader height="600px" />;
  }
  if (isError) {
    return <EmptyState heading={`Ooops an error occured!`} bg="white" />;
  }
  if (user?.Role !== 'admin') {
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
        <Typography textStyle="9" color="white" textAlign="center" fontWeight={400} mb="20px">
          Did you know you can create more than one listing?
        </Typography>
        <Button
          mode="accent"
          variant="solid"
          size="lg"
          width={user?.Locations?.length > 0 ? '220px' : 'auto'}
          onClick={() => navigate('/create-listing')}
        >
          {user?.Locations?.length > 0 ? 'Create another listing' : 'Create listing'}
        </Button>
      </Flex>

      <Box pt="62px" pb="160px" px={{ base: '20px', md: '44px' }}>
        {data?.length === 0 ? (
          <EmptyState
            bg="white"
            heading={`No Data!`}
            message={`You have no listings available at the moment`}
            btn={
              user?.Role === 'admin' && (
                <Button
                  mode="secondary"
                  variant="solid"
                  size="lg"
                  onClick={() => navigate('/create-listing')}
                >
                  Create listing
                </Button>
              )
            }
          />
        ) : (
          <SimpleGrid columns={[1, 1, 2, 3]} spacing="60px">
            {data
              ?.sort((a, b) => new Date(b.Created_at) - new Date(a.Created_at))
              .map((listing) => (
                <ListingCard
                  key={listing.Id}
                  title={listing.Name}
                  location={listing.Address}
                  reviews={`${listing.Reviews?.length} Review(s)`}
                  imgUrl={listing.Image}
                  imgAlt={listing.Name}
                  locationType={listing.LocationType.Name}
                  id={listing.Id}
                  isApproved={listing.IsApproved}
                  showTag
                />
              ))}
          </SimpleGrid>
        )}
      </Box>
    </Box>
  );
}
export default MyListings;
