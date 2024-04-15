import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Text,
} from "@chakra-ui/react";
import React from "react";

const CardPost = ({post}) => {
  return (
    <>
      <Card>
        <CardHeader>
          <Text fontSize="xs">Enviador por {post.creator.creatorName}</Text>
        </CardHeader>
        <CardBody>
          <Text>{post.content}</Text>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
      <Divider />
    </>
  );
};

export default CardPost;
