import { ArrowDownIcon, ArrowUpIcon, ChatIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  IconButton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";

const CardPost = ({ post }) => {
  return (
    <Card>
      <CardHeader>
        <Text fontSize="xs">Enviador por {post.creator.creatorName}</Text>
      </CardHeader>
      <CardBody>
        <Text>{post.content}</Text>
      </CardBody>
      <CardFooter>
        <HStack>
          <Box>
            <IconButton aria-label="Likes" size="sm" icon={<ArrowUpIcon />} />
            {post.likes}
          </Box>
          <Spacer />
          <Box>
            <IconButton aria-label="Likes" size="sm" icon={<ArrowDownIcon />} />
            {post.dislikes}
          </Box>
          <Spacer />
          <Box>
            <IconButton aria-label="Comment" size="sm" icon={<ChatIcon />} />
          </Box>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default CardPost;
