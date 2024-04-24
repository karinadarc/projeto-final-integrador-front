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
import BackendService from "../../services/backend";
import { useToast } from "@chakra-ui/react";

const CardPost = ({ post, updatePostsCallback }) => {
  const toast = useToast();

  const showError = (message) => {
    toast({
      title: "Ops",
      description: message,
      status: "warning",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  const handleLike = async () => {
    try {
      await BackendService.like(post.id);
      updatePostsCallback();
    } catch (error) {
      showError(error);
    }
  };

  const handleDislike = async () => {
    try {
      await BackendService.dislike(post.id);
      updatePostsCallback();
    } catch (error) {
      showError(error);
    }
  };

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
            <IconButton
              aria-label="Likes"
              size="sm"
              icon={<ArrowUpIcon />}
              onClick={handleLike}
            />
            {post.likes}
          </Box>
          <Spacer />
          <Box>
            <IconButton
              aria-label="Likes"
              size="sm"
              icon={<ArrowDownIcon />}
              onClick={handleDislike}
            />
            {post.dislikes}
          </Box>
          <Spacer />
          <Box>
            <IconButton aria-label="Comment" size="sm" icon={<ChatIcon />} />
            {post.comments}
          </Box>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default CardPost;
