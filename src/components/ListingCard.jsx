import React from 'react';
import { HStack, Image, Icon, Tag } from '@chakra-ui/react';
import Card from './Card';
import Typography from './Typography';
import { FiMapPin } from 'react-icons/fi';
import { BsChat } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function ListingCard({
  title,
  location,
  imgUrl,
  imgAlt,
  reviews,
  locationType,
  isApproved,
  id,
  showTag,
}) {
  const navigate = useNavigate();

  return (
    <Card
      cursor="pointer"
      bg="gray.100"
      px="20px"
      py="20px"
      borderRadius="8px"
      border="none"
      alignItems="flex-start"
      onClick={() => navigate(`/listings/${locationType}/${id}`)}
    >
      <Image
        src={imgUrl}
        alt={imgAlt}
        height="253px"
        width="100%"
        bg="gray.200"
        borderRadius="8px"
        mb="22px"
        objectFit="cover"
      />
      {/* title */}
      <HStack my="10px">
        <Typography textStyle="12" color="gray.400" fontWeight={500}>
          {title}
        </Typography>
        {showTag && (
          <Tag
            size={'sm'}
            variant="subtle"
            as="sup"
            colorScheme={isApproved ? 'success' : 'warning'}
          >
            {isApproved ? 'published' : 'unpublished'}
          </Tag>
        )}
      </HStack>

      {/* location */}
      <HStack mb="6px" spacing="6px">
        <Icon as={FiMapPin} color="gray.300" fontSize="14px" />
        <Typography textStyle="14" color="gray.300" fontWeight={400} my="10px">
          {location}
        </Typography>
      </HStack>

      {/* reviews */}
      <HStack mb="6px" spacing="6px">
        <Icon as={BsChat} color="gray.300" fontSize="14px" />
        <Typography textStyle="14" color="gray.300" fontWeight={400} my="10px">
          {reviews}
        </Typography>
      </HStack>
    </Card>
  );
}
