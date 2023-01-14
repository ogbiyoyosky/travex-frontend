import React, { useState } from 'react';
import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  MenuButton,
  MenuItem,
  MenuList,
  Menu,
  SimpleGrid,
} from '@chakra-ui/react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button, Input, Link, Loader, Typography, ListingCard, EmptyState } from 'components';
import { HiOutlineMenu, HiUser } from 'react-icons/hi';
import { IoIosArrowDown, IoMdArrowRoundForward } from 'react-icons/io';
import { getAuthToken, removeAuthToken } from 'utils/auth';
import { ReactComponent as Logo } from 'assets/travex.svg';
import colors from 'config/colors';
import { useListings } from 'hooks/queries/useListings';
import { useProfile } from 'hooks/queries/useProfile';

function Home() {
  const token = getAuthToken();
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { data: user, isLoading: isLoadingUser } = useProfile({ enabled: !token ? false : true });
  const { data, isLoading, isError } = useListings('', search ? searchQuery : '');

  if (token && isLoadingUser) {
    return <Loader />;
  }
  if (isError) {
    return <EmptyState heading={`Ooops an error occured!`} bg="white" />;
  }
  return (
    <Box h="100%">
      <Container maxWidth={'1440px'} minHeight="100vh" p="0px">
        {/* navbar */}
        <Header user={user} />
        {/* main */}
        <Box minHeight="90vh">
          {location.pathname === '/' ? (
            <>
              <Hero
                onChangeSearch={(e) => {
                  setSearch(false);
                  setSearchQuery(e.target.value);
                }}
                onSearch={() => setSearch(true)}
              />
              {isLoading ? (
                <Loader height="300px" />
              ) : data?.length === 0 && search ? (
                <EmptyState heading="No results found!" />
              ) : data?.length === 0 && !search ? (
                <EmptyState
                  bg="white"
                  heading="No listings available at the moment"
                  btn={
                    user?.Role === 'admin' &&
                    token && (
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
                <Listings data={data} />
              )}
            </>
          ) : (
            <Outlet />
          )}
        </Box>
      </Container>
    </Box>
  );
}
export default Home;

const Header = ({ user }) => {
  const navigate = useNavigate();
  const token = getAuthToken();

  return (
    <Box w="100%" height="96px">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        bg="gray.100"
        w="100%"
        height="96px"
        px={{ base: '20px', md: '44px' }}
        maxWidth={'1440px'}
        position={'fixed'}
        zIndex={1000}
        backdropFilter="auto"
        backdropBlur="10px"
        transition="all .3s ease"
      >
        <a href="/">
          <Logo />
        </a>

        {/* navlinks */}
        <HStack spacing="10px" display={{ base: 'none', sm: 'flex' }}>
          <Link href="/" textStyle="12" isNav>
            Home
          </Link>
          <Link
            href="/my-listings"
            textStyle="12"
            isNav
            display={token && user?.Role === 'admin' ? 'block' : 'none'}
          >
            My Listings
          </Link>
          <Link
            href="/dashboard"
            textStyle="12"
            isNav
            display={token && user?.Role === 'master_admin' ? 'block' : 'none'}
          >
            Dashboard
          </Link>

          <Link
            href="/register?role=creator"
            textStyle="12"
            isNav
            display={!token ? 'block' : 'none'}
          >
            Become a creator
          </Link>
        </HStack>

        {/* login/signup */}
        {!token && (
          <HStack spacing="10px" display={{ base: 'none', sm: 'flex' }}>
            <Button mode="secondary" variant="outline" size="md" onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button mode="secondary" size="md" onClick={() => navigate('/register')}>
              Signup
            </Button>
          </HStack>
        )}

        {/* dropdown */}
        <Menu>
          {({ isOpen }) => {
            const btnStyle = {
              bg: { base: 'inherit', sm: 'white' },
            };
            return (
              <>
                <MenuButton
                  bg={{ base: 'inherit', sm: 'white' }}
                  boxShadow="none"
                  isActive={isOpen}
                  as={Button}
                  width="auto"
                  size="md"
                  color="gray.300"
                  _hover={btnStyle}
                  _focus={btnStyle}
                  _active={btnStyle}
                  display={{ base: 'flex', sm: token ? 'flex' : 'none' }}
                >
                  <HStack spacing="10px" display={{ base: 'none', sm: 'flex' }}>
                    <Icon as={HiUser} fontSize="20px" />
                    <Typography textStyle="12" color="gray.300" fontWeight={500}>
                      My Account
                    </Typography>
                    <Icon as={IoIosArrowDown} strokeWidth={20} />
                  </HStack>
                  <Icon
                    as={HiOutlineMenu}
                    fontSize="2rem"
                    display={{ base: 'block', sm: 'none' }}
                  />
                </MenuButton>

                <MenuList>
                  {token && (
                    <MenuItem
                      cursor="default"
                      _hover={{ bg: 'white' }}
                      _active={{ bg: 'white' }}
                      _focus={{ bg: 'white' }}
                      closeOnSelect={false}
                    >
                      <Box>
                        <Typography textStyle="12" color="gray.400" pt="10px">
                          Name: {`${user?.First_name} ${user?.Last_name}`}
                        </Typography>
                        <Typography textStyle="12" color="gray.400">
                          Email: {user?.Email}
                        </Typography>
                      </Box>
                    </MenuItem>
                  )}

                  <MenuItem display={{ base: 'block', sm: 'none' }} onClick={() => navigate('/')}>
                    Home
                  </MenuItem>
                  <MenuItem
                    display={{
                      base: token && user?.Role === 'admin' ? 'block' : 'none',
                      sm: 'none',
                    }}
                    onClick={() => navigate('/my-listings')}
                  >
                    My Listings
                  </MenuItem>
                  <MenuItem
                    display={{
                      base: token && user?.Role === 'master_admin' ? 'block' : 'none',
                      sm: 'none',
                    }}
                    onClick={() => navigate('/dashboard')}
                  >
                    Dashboard
                  </MenuItem>

                  <MenuItem
                    display={{ base: !token ? 'block' : 'none', sm: 'none' }}
                    onClick={() => navigate('/register?role=creator')}
                  >
                    Become a creator
                  </MenuItem>
                  <MenuItem
                    display={{ base: token ? 'none' : 'flex', sm: 'none' }}
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </MenuItem>
                  <MenuItem
                    display={{ base: token ? 'none' : 'flex', sm: 'none' }}
                    onClick={() => navigate('/register')}
                  >
                    Signup
                  </MenuItem>
                  <MenuItem
                    color="error.600"
                    display={token ? 'flex' : 'none'}
                    _hover={{ bg: 'red.50' }}
                    onClick={() => {
                      removeAuthToken();
                      navigate('/login');
                    }}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </>
            );
          }}
        </Menu>
      </Flex>
    </Box>
  );
};

const Hero = ({ onChangeSearch = () => {}, onSearch = () => {} }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      py="60px"
      px="40px"
      bg="gray.400"
    >
      <Typography textStyle="4" color="white" textAlign="center" fontWeight={700} mb="16px">
        Locating fun experiences
      </Typography>
      <Typography textStyle="8" color="white" textAlign="center" fontWeight={400} mb="70px">
        made super simple
      </Typography>
      <Box
        p={{ base: '8px', md: '16px' }}
        bg="gray.100"
        borderRadius="8px"
        width="100%"
        maxWidth={{ base: '400px', sm: '500px', md: '700px' }}
      >
        <Input
          variant="filled"
          bg="white"
          _hover={{ bg: 'white' }}
          _focus={{ bg: 'white', border: `1px solid ${colors.secondary[500]}` }}
          width="100%"
          placeholder="Search for Location or Event"
          rightAdddonProps={{
            bg: 'gray.400',
            cursor: 'pointer',
            onClick: onSearch,
          }}
          rightAddon={
            <Typography textStyle="12" color="white" fontWeight={500}>
              Search
            </Typography>
          }
          onChange={onChangeSearch}
        />
      </Box>
    </Flex>
  );
};

const Listings = ({ data }) => {
  const navigate = useNavigate();

  const SectionHeader = ({ heading, count, onViewAll }) => (
    <Flex alignItems="center" justifyContent="space-between" w="100%" mb="44px" mt="62px">
      <Typography textStyle="10" color="gray.400" fontWeight={700} mr="20px">
        {heading}
      </Typography>
      {count > 3 && (
        <Button
          size="md"
          mode="accent"
          p={{ base: '8px 55px', md: '8px 60px' }}
          rightIcon={<Icon as={IoMdArrowRoundForward} />}
          onClick={onViewAll}
        >
          View All
        </Button>
      )}
    </Flex>
  );

  return (
    <Box pb="160px" px={{ base: '20px', md: '44px' }}>
      {/* Restaurants to explore */}
      {data?.filter((listing) => listing.LocationType.Name === 'restaurant')?.length > 0 ? (
        <>
          <SectionHeader
            heading="Restaurants to explore"
            count={data?.filter((listing) => listing.LocationType.Name === 'restaurant')?.length}
            onViewAll={() => navigate('/listings/restaurant')}
          />

          <SimpleGrid columns={[1, 1, 2, 3]} spacing="60px">
            {data
              ?.sort((a, b) => new Date(b.Created_at) - new Date(a.Created_at))
              .filter((listing) => listing.LocationType.Name === 'restaurant')
              .slice(0, 3)
              .map((listing) => (
                <ListingCard
                  key={listing.Id}
                  title={listing.Name}
                  location={listing.Address}
                  reviews={`${listing.Reviews?.length} Review(s)`}
                  imgUrl={listing.Image}
                  imgAlt={listing.Name}
                  locationType={'restaurant'}
                  id={listing.Id}
                  isApproved={listing.IsApproved}
                />
              ))}
          </SimpleGrid>
        </>
      ) : null}

      {/* Bars to explore */}
      {data?.filter((listing) => listing.LocationType.Name === 'bar')?.length > 0 ? (
        <>
          <SectionHeader
            heading="Bars to explore"
            count={data?.filter((listing) => listing.LocationType.Name === 'bar')?.length}
            onViewAll={() => navigate('/listings/bar')}
          />

          <SimpleGrid columns={[1, 1, 2, 3]} spacing="60px">
            {data
              ?.sort((a, b) => new Date(b.Created_at) - new Date(a.Created_at))
              .filter((listing) => listing.LocationType.Name === 'bar')
              .slice(0, 3)
              .map((listing) => (
                <ListingCard
                  key={listing.Id}
                  title={listing.Name}
                  location={listing.Address}
                  reviews={`${listing.Reviews?.length} Review(s)`}
                  imgUrl={listing.Image}
                  imgAlt={listing.Name}
                  locationType={'bar'}
                  id={listing.Id}
                  isApproved={listing.IsApproved}
                />
              ))}
          </SimpleGrid>
        </>
      ) : null}

      {/* Clubs to explore */}
      {data?.filter((listing) => listing.LocationType.Name === 'club')?.length > 0 ? (
        <>
          <SectionHeader
            heading="Clubs to explore"
            count={data?.filter((listing) => listing.LocationType.Name === 'club')?.length}
            onViewAll={() => navigate('/listings/club')}
          />

          <SimpleGrid columns={[1, 1, 2, 3]} spacing="60px">
            {data
              ?.sort((a, b) => new Date(b.Created_at) - new Date(a.Created_at))
              .filter((listing) => listing.LocationType.Name === 'club')
              .slice(0, 3)
              .map((listing) => (
                <ListingCard
                  key={listing.Id}
                  title={listing.Name}
                  location={listing.Address}
                  reviews={`${listing.Reviews?.length} Review(s)`}
                  imgUrl={listing.Image}
                  imgAlt={listing.Name}
                  locationType={'club'}
                  id={listing.Id}
                  isApproved={listing.IsApproved}
                />
              ))}
          </SimpleGrid>
        </>
      ) : null}

      {/* Parks to explore */}
      {data?.filter((listing) => listing.LocationType.Name === 'park')?.length > 0 ? (
        <>
          <SectionHeader
            heading="Parks to explore"
            count={data?.filter((listing) => listing.LocationType.Name === 'park')?.length}
            onViewAll={() => navigate('/listings/park')}
          />

          <SimpleGrid columns={[1, 1, 2, 3]} spacing="60px">
            {data
              ?.sort((a, b) => new Date(b.Created_at) - new Date(a.Created_at))
              .filter((listing) => listing.LocationType.Name === 'park')
              .slice(0, 3)
              .map((listing) => (
                <ListingCard
                  key={listing.Id}
                  title={listing.Name}
                  location={listing.Address}
                  reviews={`${listing.Reviews?.length} Review(s)`}
                  imgUrl={listing.Image}
                  imgAlt={listing.Name}
                  locationType={'park'}
                  id={listing.Id}
                  isApproved={listing.IsApproved}
                />
              ))}
          </SimpleGrid>
        </>
      ) : null}
    </Box>
  );
};
