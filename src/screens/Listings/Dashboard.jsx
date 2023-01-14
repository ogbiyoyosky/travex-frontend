import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Icon,
  Flex,
  // Center,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  useDisclosure,
  HStack,
} from '@chakra-ui/react';
import { Button, EmptyState, Loader, Tag, Typography } from 'components';
import colors from 'config/colors';
import { useProfile, useUsers } from 'hooks/queries/useProfile';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useListings } from 'hooks/queries/useListings';

export default function Dashboard() {
  const navigate = useNavigate();
  const { data, isLoading } = useProfile();
  const { onToggle } = useDisclosure();

  const {
    data: users,
    isLoading: isLoadingUsers,
    isError,
  } = useUsers({ enabled: data?.Role === 'master_admin' ? true : false });

  const {
    data: listings,
    isLoading: isLoadingListings,
    isError: isErrorLoadingListings,
  } = useListings('', '', data?.Role, { enabled: users ? true : false });

  if (isLoading || (data?.Role === 'master_admin' && isLoadingUsers) || isLoadingListings) {
    return <Loader height="600px" />;
  }
  if (isError || isErrorLoadingListings) {
    return <EmptyState heading={`Ooops an error occured!`} bg="white" />;
  }
  if (data?.Role !== 'master_admin') {
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
    <Box py={{ base: '20px', md: '60px' }} px={{ base: '24px', md: '80px', lg: '120px' }}>
      <HStack spacing="16px" mb="40px">
        <Flex
          bg="gray.300"
          borderRadius="16px"
          py="20px"
          px="30px"
          width="200px"
          justify="center"
          flexDirection="column"
        >
          <Typography textStyle="11" color="white" fontWeight={500} textAlign="left" mb="10px">
            Users
          </Typography>
          <Typography textStyle="10" color="gray.50" textAlign="left">
            {users?.length}
          </Typography>
        </Flex>
        <Flex
          bg="gray.300"
          borderRadius="16px"
          py="20px"
          px="30px"
          width="200px"
          justify="center"
          flexDirection="column"
        >
          <Typography textStyle="11" color="white" fontWeight={500} textAlign="left" mb="10px">
            Listings
          </Typography>
          <Typography textStyle="10" color="gray.50" textAlign="left">
            {listings?.length}
          </Typography>
        </Flex>
      </HStack>
      <Accordion allowMultiple defaultIndex={[0, 1]}>
        {/* Users */}
        <AccordionItem borderTop="0px">
          <h2>
            <AccordionButton _hover={{ bg: 'white' }}>
              <Typography textStyle="10" fontWeight={500} flex="1" textAlign="left">
                Users
              </Typography>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={10}>
            <TableContainer border={`1px solid ${colors.gray[100]}`} borderRadius="16px">
              {users?.length <= 0 ? (
                <EmptyState bg="white" height="300px" heading="No data!" />
              ) : (
                <Table variant="striped" colorScheme="dark">
                  <Thead>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Email</Th>
                      <Th>Created At</Th>
                      <Th>Role</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {users?.map((user) => (
                      <Tr key={user.Id}>
                        <Td>
                          <Typography textStyle="12">{`${user.First_name} ${user.Last_name}`}</Typography>
                        </Td>
                        <Td>
                          <Typography textStyle="12">{user.Email}</Typography>
                        </Td>
                        <Td>
                          <Typography textStyle="12">
                            {new Date(user.Created_at).toDateString()}
                          </Typography>
                        </Td>
                        <Td>
                          <Flex align="center" justify="space-between" minW="160px">
                            <Typography textStyle="12">{user.Role}</Typography>
                            <Popover placement="bottom-end">
                              <PopoverTrigger>
                                <Button
                                  size="sm"
                                  width="20px"
                                  height="20px"
                                  variant="unstyled"
                                  boxShadow="none"
                                  mode="secondary"
                                  onClick={onToggle}
                                  isDisabled={user.Role !== 'admin'}
                                >
                                  <Icon as={BsThreeDotsVertical} />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent
                                maxWidth="180px"
                                _focusVisible={{ boxShadow: 'none', outline: 'none' }}
                              >
                                <PopoverBody px={0}>
                                  <VStack width="100%" spacing="4px">
                                    <Flex
                                      width="100%"
                                      height="30px"
                                      align="center"
                                      px="14px"
                                      cursor="pointer"
                                      _hover={{ bg: 'gray.50' }}
                                      onClick={() => navigate(`/create-listing?userId=${user.Id}`)}
                                    >
                                      <Typography textStyle="12">Create Listing</Typography>
                                    </Flex>
                                  </VStack>
                                </PopoverBody>
                              </PopoverContent>
                            </Popover>
                          </Flex>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              )}
            </TableContainer>
          </AccordionPanel>
        </AccordionItem>

        {/* Listings */}
        <AccordionItem borderBottom="0px">
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton _hover={{ bg: 'white' }} pt={isExpanded ? '30px' : '0px'}>
                  <Typography textStyle="10" fontWeight={500} flex="1" textAlign="left">
                    Listings
                  </Typography>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={10}>
                <TableContainer border={`1px solid ${colors.gray[100]}`} borderRadius="16px">
                  {listings?.length <= 0 ? (
                    <EmptyState bg="white" height="300px" heading="No data!" />
                  ) : (
                    <Table variant="striped" colorScheme="dark">
                      <Thead>
                        <Tr>
                          <Th>Name</Th>
                          <Th>Description</Th>
                          <Th>Type</Th>
                          <Th>Created At</Th>
                          <Th>Author</Th>
                          <Th>Status</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {listings?.map((listing) => (
                          <Tr
                            key={listing.Id}
                            cursor="pointer"
                            onClick={() =>
                              navigate(`/listings/${listing.LocationType.Name}/${listing.Id}`)
                            }
                          >
                            <Td>
                              <Typography textStyle="12">{listing.Name}</Typography>
                            </Td>
                            <Td>
                              <Typography textStyle="12" noOfLines={1} maxWidth="270px">
                                {listing.Description}
                              </Typography>
                            </Td>
                            <Td>
                              <Typography textStyle="12" noOfLines={1}>
                                {listing.LocationType.Name}
                              </Typography>
                            </Td>
                            <Td>
                              <Typography textStyle="12">
                                {new Date(listing.Created_at).toDateString()}
                              </Typography>
                            </Td>
                            <Td>
                              <Typography textStyle="12">
                                {`${listing.User.First_name} ${listing.User.Last_name}`}
                              </Typography>
                            </Td>
                            <Td>
                              <Flex align="center" justify="space-between">
                                <Tag
                                  size={'sm'}
                                  variant="subtle"
                                  colorScheme={listing.IsApproved ? 'success' : 'warning'}
                                >
                                  {listing.IsApproved ? 'published' : 'unpublished'}
                                </Tag>
                              </Flex>
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  )}
                </TableContainer>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
