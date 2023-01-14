import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { EmptyState, ListingCard, Loader, Typography } from 'components';
import { useParams } from 'react-router-dom';
import { useListings } from 'hooks/queries/useListings';

function Listings() {
  const { locationType } = useParams();
  const { data, isLoading, isError } = useListings('', locationType);

  if (isLoading) {
    return <Loader height="600px" />;
  }
  if (isError) {
    return <EmptyState heading={`Ooops an error occured!`} bg="white" />;
  }
  return (
    <Box pt="62px" pb="160px" px={{ base: '20px', md: '44px' }}>
      {/* Heading */}
      <Typography textStyle="8" fontWeight={700} mb="44px">
        {getHeadingByLocationType(locationType)}
      </Typography>

      {data?.length === 0 ? (
        <EmptyState
          bg="white"
          maxWidth="100%"
          heading={`No Data!`}
          message={`There are no ${locationType} listings available at the moment`}
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
                locationType={locationType}
                id={listing.Id}
                isApproved={listing.IsApproved}
              />
            ))}
        </SimpleGrid>
      )}
    </Box>
  );
}
export default Listings;

const getHeadingByLocationType = (locationType) => {
  return locationType === 'restaurant'
    ? 'Restaurants to explore'
    : locationType === 'bar'
    ? 'Bars to explore'
    : locationType === 'club'
    ? 'Clubs to explore'
    : locationType === 'park'
    ? 'Parks to explore'
    : '';
};
