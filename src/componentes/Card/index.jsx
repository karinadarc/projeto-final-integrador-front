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

const CardPost = ({
  content,
  likes,
  dislikes,
  comments,
  creatorName,
  handleLike,
  handleDislike,
  handleComment,
}) => {
  return (
    <Card>
      <CardHeader>
        <Text fontSize="xs">Enviador por {creatorName}</Text>
      </CardHeader>
      <CardBody>
        <Text>{content}</Text>
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
            {likes}
          </Box>
          <Spacer />
          <Box>
            <IconButton
              aria-label="Likes"
              size="sm"
              icon={<ArrowDownIcon />}
              onClick={handleDislike}
            />
            {dislikes}
          </Box>
          <Spacer />
          {handleComment && (
            <Box>
              <IconButton
                aria-label="Comment"
                size="sm"
                icon={<ChatIcon />}
                onClick={handleComment}
              />
              {comments}
            </Box>
          )}
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default CardPost;
