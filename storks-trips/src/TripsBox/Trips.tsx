import { Box, Flex, HStack, Heading } from "@chakra-ui/react";
import TripsGrid from "./TripsGrid";
import TripsSelector from "./TripsSelector";

const Trips = () => {
  return (
    <>
      <Flex flexDirection="column" width="1200px">
        <Box>
          <Heading marginBottom={8} marginX={5}>
            Trips
          </Heading>
        </Box>
        <HStack marginLeft={5} spacing={5}>
          <TripsSelector />
        </HStack>

        <TripsGrid />
      </Flex>
    </>
  );
};

export default Trips;
