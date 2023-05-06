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
        <Card key={el.TripId} maxW="sm" margin={3}>
          <CardHeader>
            <Heading>{el.Country}</Heading>
          </CardHeader>
          <Divider orientation="horizontal" />

          <CardBody>
            <Text fontSize="xl">Members: {el.Details.NumOfMembers}</Text>
            <Text fontSize="xl">
              Price: {el.Details.Price} {el.Details.Currency}
            </Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="green" variant="outline">
              See details
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default TripsCards;
