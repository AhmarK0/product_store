import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useColorMode } from "./color-mode";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"100wh"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"to-r"}
          gradientFrom={"cyan.400"}
          gradientTo={"blue.500"}
          bgClip={"text"}
        >
          <Link to="/">Product Store</Link>
        </Text>

        <HStack spacing={3} alignItems="center" mt={{ base: 2, sm: 0 }}>
          <Link to="/create">
            <Button>
              <FaPlus />
            </Button>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? "🌙" : "🌞"}
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
