import { Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";



const Roadmap: FC = () => {
  return (
    <Flex
      id="roadmap"
      minH="100vh"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      pb={24}
    >
      <Text mb={8} fontWeight="bold" fontSize="4xl">
        Roadmap
      </Text>
      <Image src="images/roadmap.png"></Image>
    </Flex>
  );
};

export default Roadmap;
