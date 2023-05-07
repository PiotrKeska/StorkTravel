import { Box, Flex } from "@chakra-ui/react";
import scopeFilter from "../utils/filters";
import TripsCards from "./TripsCards";
import useTrips from "./useTrips";

const TripsGrid = () => {
  const { isLoading, error } = useTrips();
  const arr = scopeFilter();

  if (error) return null;
  if (isLoading) return <div>Loading....</div>;
  if (arr?.length === 0)
    return (
      <Box marginY={10} marginX={5}>
        We are sorry but we don't have any trips with selected criteria
      </Box>
    );

  return (
    <>
      <Flex width="1200px" flexDirection="row" flexWrap="wrap">
        <TripsCards />
      </Flex>
    </>
  );
};

export default TripsGrid;
