import React from "react";
import useTrips from "./useTrips";
import scopeFilter from "../utils/filters";
import TripsCards from "./TripsCards";
import { Flex } from "@chakra-ui/react";

const TripsGrid = () => {
  const { data, isLoading, error } = useTrips();
  const arr = scopeFilter();

  if (error) return null;
  if (isLoading) return <div>Loading....</div>;
  if (arr?.length === 0)
    return <div>Sorry we don't have any trips with selected criteria</div>;

  return (
    <>
      <Flex>
        <TripsCards />
      </Flex>
    </>
  );
};

export default TripsGrid;
