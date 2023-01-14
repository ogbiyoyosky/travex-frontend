import React from 'react';
import { Box, Center, Flex, HStack, Image } from '@chakra-ui/react';
import { Button, Card, EmptyState, Loader, Textarea, Typography } from 'components';
import { useListings } from 'hooks/queries/useListings';
import { useParams } from 'react-router-dom';
import colors from 'config/colors';
import StarRating from 'components/StarRatings';
import { useProfile } from 'hooks/queries/useProfile';
import { useAddReview, useApproveReview } from 'hooks/mutations/useReview';
import { useFormik } from 'formik';
import { useApproveReply, useAddReply } from 'hooks/mutations/useReply';
import useApproveListing from 'hooks/mutations/useApproveListing';

export default function ListingDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useListings(id);
  const { data: user, isLoading: isLoadingUser } = useProfile();

  if (isLoading || isLoadingUser) {
    return <Loader height="600px" />;
  }
  if (isError) {
    return <EmptyState heading={`Ooops an error occured!`} bg="white" />;
  }
  return (
    <Box>
      {/* Hero */}
      <Hero data={data} />
      {/* Details */}
      <Center>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="80%"
          position="absolute"
          top={{ base: '380px', md: '480px' }}
          bg="white"
          borderRadius="10px"
          border={`1px solid ${colors.gray[200]}`}
          py={{ base: '20px', md: '60px' }}
        >
          {/* About Listing */}

          <AboutListing locationId={id} user={user} data={data} />
          {/* Customer Reviews */}
          <CustomerReview locationId={id} user={user} data={data} />
        </Flex>
      </Center>
    </Box>
  );
}

const Hero = ({ data }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-end"
      width="100%"
      position="relative"
    >
      <Image
        bg="gray.400"
        src={data?.Image}
        alt={data?.Name}
        width="100%"
        height={{ base: '300px', md: '400px' }}
        objectFit="cover"
      />
      <Box
        bg={'rgba(0,0,0,0.4)'}
        position="absolute"
        top={0}
        width="100%"
        height={{ base: '300px', md: '400px' }}
      />
    </Flex>
  );
};

const AboutListing = ({ locationId, data, user }) => {
  const { approveListing, approveListingState } = useApproveListing(locationId);

  const handleApproveListing = () => {
    approveListing({
      isApproved: data.IsApproved ? 0 : 1,
    });
  };

  return (
    <Card
      border={`1px solid ${colors.gray[100]}`}
      width="86%"
      p={{ base: '20px 24px', md: '40px 48px' }}
      bg="white"
      borderRadius="10px"
      alignItems="flex-start"
    >
      <Flex direction="row" justify="space-between" width="100%" pb="8px">
        <Box>
          <Typography textStyle="10" fontWeight={700} color="gray.400" pb="4px">
            {data?.Name}
          </Typography>
          {user.Role === 'master_admin' && (
            <>
              <Typography textStyle="14" fontWeight={500} color="gray.400" pb="4px">
                Type: {data?.LocationType.Name}
              </Typography>
              <Typography textStyle="14" fontWeight={500} color="gray.400" pb="18px">
                Author: {data?.User.First_name} {data?.User.Last_name}
              </Typography>
            </>
          )}
        </Box>
        {user.Role === 'master_admin' && (
          <Button
            mode={data.IsApproved ? 'secondary' : 'primary'}
            bg={data.IsApproved ? 'warning.500' : 'success.500'}
            _hover={{
              bg: data.IsApproved ? 'warning.600' : 'success.600',
            }}
            _focus={{
              bg: data.IsApproved ? 'warning.600' : 'success.600',
            }}
            size="md"
            type="btn"
            isDisabled={approveListingState.isLoading}
            isLoading={approveListingState.isLoading}
            onClick={handleApproveListing}
          >
            {data.IsApproved ? 'Unpublish' : 'Publish'}
          </Button>
        )}
      </Flex>
      <Typography textStyle="12" color="gray.300">
        {data?.Description}
      </Typography>
    </Card>
  );
};

const CustomerReview = ({ locationId, user, data }) => {
  const { addReview, addReviewState } = useAddReview(locationId);
  const { approveReview, approveReviewState } = useApproveReview(locationId);
  const { addReply, addReplyState } = useAddReply(locationId);
  const { approveReply, approveReplyState } = useApproveReply(locationId);

  const reviewFormik = useFormik({
    initialValues: {
      rating: 0,
      comment: '',
    },
    onSubmit: (payload) => {
      addReview(payload);
    },
  });

  const replyFormik = useFormik({
    initialValues: {
      text: '',
      reviewId: '',
    },
    onSubmit: (payload) => {
      addReply(payload, () => {
        replyFormik.resetForm({
          text: '',
          reviewId: '',
        });
      });
    },
  });

  return (
    <>
      {/* Customer Reviews */}
      <>
        <Typography
          textStyle="10"
          fontWeight={700}
          textAlign="left"
          color="gray.400"
          width="86%"
          p={{ base: '20px 24px', md: '40px 48px' }}
        >
          Customer Reviews ({data?.Reviews?.length})
        </Typography>
        {data?.Reviews?.length <= 0 ? (
          <Box width="86%">
            <EmptyState
              height="200px"
              maxWidth="100%"
              heading={`No Data!`}
              message={
                user.Role === 'admin'
                  ? `You currently have no reviews for this listing`
                  : `There are no reviews available for this listing at the moment`
              }
            />
          </Box>
        ) : (
          data?.Reviews.map((review) => (
            <Card
              border={`1px solid ${colors.gray[100]}`}
              width="86%"
              p={{ base: '20px 24px', md: '40px 48px' }}
              bg="white"
              borderRadius="10px"
              alignItems="flex-start"
              mb={{ base: '20px', md: '40px' }}
              key={review.Id}
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  replyFormik.handleSubmit(e);
                }}
                id="reply"
                style={{ width: '100%' }}
              >
                <HStack spacing="8px" align="flex-start">
                  <Box>
                    <Typography textStyle="11" fontWeight={700} color="gray.400">
                      {`${review.Author.First_name} ${review.Author.Last_name}`}
                    </Typography>
                    <StarRating value={Number(review.Rating * 5)} />
                  </Box>
                  <HStack as="sup">
                    {user.Role === 'admin' && (
                      <Button
                        variant="unstyled"
                        boxShadow="none"
                        fontSize="12px"
                        type="button"
                        size="sm"
                        width="auto"
                        color={review.IsApproved ? 'error.400' : 'success.500'}
                        onClick={() =>
                          approveReview({
                            reviewId: review.Id,
                            isApproved: review.IsApproved ? 0 : 1,
                          })
                        }
                        isDisabled={approveReviewState.isLoading}
                      >
                        {review.IsApproved ? 'Unapprove this comment' : 'Approve this comment'}
                      </Button>
                    )}
                    {review.IsApproved && (
                      <Button
                        mode="secondary"
                        variant="unstyled"
                        boxShadow="none"
                        fontSize="12px"
                        type="button"
                        size="sm"
                        width="auto"
                        onClick={() => {
                          if (replyFormik.values.reviewId === '') {
                            replyFormik.setValues({
                              text: replyFormik.values.text,
                              reviewId: review.Id,
                            });
                          } else {
                            replyFormik.setValues({
                              text: '',
                              reviewId: '',
                            });
                          }
                        }}
                      >
                        {replyFormik.values.reviewId === '' ? 'Reply' : 'Cancel'}
                      </Button>
                    )}
                  </HStack>
                </HStack>

                <Typography textStyle="12" color="gray.300">
                  {review.Text}
                </Typography>
                {review?.Comments.map((comment) => (
                  <HStack key={comment.Id} spacing="8px" align="flex-start">
                    <Box ml="20px" mt="10px">
                      <Typography textStyle="12" fontWeight={700} color="gray.400">
                        {`${comment.Author.First_name} ${comment.Author.Last_name}`}
                      </Typography>
                      <Typography textStyle="12" color="gray.300">
                        {comment.Text}
                      </Typography>
                    </Box>

                    {user.Role === 'admin' && (
                      <Box as="sup">
                        <Button
                          variant="unstyled"
                          boxShadow="none"
                          fontSize="12px"
                          type="button"
                          size="sm"
                          width="auto"
                          color={comment.IsApproved ? 'error.400' : 'success.500'}
                          onClick={() =>
                            approveReply({
                              commentId: comment.Id,
                              isApproved: comment.IsApproved ? 0 : 1,
                            })
                          }
                          isDisabled={approveReplyState.isLoading}
                        >
                          {comment.IsApproved ? 'Unapprove this comment' : 'Approve this comment'}
                        </Button>
                      </Box>
                    )}
                  </HStack>
                ))}

                {review.IsApproved && replyFormik.values.reviewId === review.Id && (
                  <>
                    <Textarea
                      mt="10px"
                      id="text"
                      placeholder="Add your reply here"
                      minH="150px"
                      onChange={replyFormik.handleChange}
                      onBlur={replyFormik.handleBlur}
                      value={replyFormik.values.text}
                    />
                    <Flex justifyContent="flex-end">
                      <Button
                        mode="secondary"
                        variant="solid"
                        size="md"
                        mt={35}
                        type="submit"
                        isDisabled={replyFormik.isLoading || replyFormik.values.text?.length <= 0}
                        isLoading={addReplyState.isLoading}
                      >
                        Add Reply
                      </Button>
                    </Flex>
                  </>
                )}
              </form>
            </Card>
          ))
        )}
      </>
      {/* Add Review */}
      {data?.Reviews.find((review) => review.Author_id === user.Id) ||
      user.Role === 'admin' ||
      user.Role === 'master_admin' ||
      data?.User.Id === user.Id ? null : (
        <Card
          border={`1px solid ${colors.gray[100]}`}
          width="86%"
          p={{ base: '20px 24px', md: '40px 48px' }}
          bg="white"
          borderRadius="10px"
          alignItems="flex-start"
          mt={{ base: '20px', md: '40px' }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              reviewFormik.handleSubmit(e);
            }}
            id="add-review"
            style={{ width: '100%' }}
          >
            <Typography textStyle="11" fontWeight={700} color="gray.400" mb={'12px'}>
              Add Review
            </Typography>

            <StarRating
              id="rating"
              onChangeRating={(rating) => reviewFormik.setFieldValue('rating', rating * 2)}
              onBlur={reviewFormik.handleBlur}
            />
            <Textarea
              mt="10px"
              id="comment"
              placeholder="Add your review or experience here"
              minH="150px"
              onChange={reviewFormik.handleChange}
              onBlur={reviewFormik.handleBlur}
              value={reviewFormik.values.comment}
            />
            <Flex justifyContent="flex-end">
              <Button
                mode="secondary"
                variant="solid"
                size="md"
                mt={35}
                type="submit"
                isDisabled={addReviewState.isLoading || reviewFormik.values.rating <= 0}
                isLoading={addReviewState.isLoading}
              >
                Add
              </Button>
            </Flex>
          </form>
        </Card>
      )}
    </>
  );
};
