import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";

import scopeFilter from "../utils/filters";

const TripsCards = () => {
  const arr = scopeFilter();

  return (
    <>
      {arr?.map((el) => (
        <Card
          key={el.TripId}
          marginX={6}
          marginY={10}
          width="350px"
          height="600px"
          _hover={{ transform: "scale(1.1)" }}
        >
          <CardHeader textAlign="center">
            <Heading>{el.Country}</Heading>
          </CardHeader>

          <CardBody textAlign="center">
            <Text fontSize="xl">Members: {el.Details.NumOfMembers}</Text>
            <Text fontSize="xl">
              Price: {el.Details.Price} {el.Details.Currency}
            </Text>
          </CardBody>
          <Divider orientation="horizontal" />
          <CardFooter justify="center">
            <Button colorScheme="green" variant="outline" width="60%">
              See details
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default TripsCards;
