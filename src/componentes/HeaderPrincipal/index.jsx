import { Box, Flex, Spacer } from "@chakra-ui/react";
import headerLogo from "../../assets/header-logo.svg";
import React from "react";
import { Link } from "react-router-dom"


const HeaderPrincipal = ({
  exibirX,
  rotaTexto,
  texto,
}) => {
  return (
    <Box>
      <Flex bg="#EDEDED">
        <Box w="33.33%" h="10">
          {exibirX ? ("X") : ""}
        </Box>
        <Spacer />
        <Flex w="33.33%" h="10" justifyContent="center">
          <img src={headerLogo} alt="Labeddit logo" />
        </Flex>
        <Spacer />
        <Flex w="33.33%" h="10" justifyContent="right" alignItems="center" marginRight="2%">
         <Link to={rotaTexto}>{texto}</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeaderPrincipal;
