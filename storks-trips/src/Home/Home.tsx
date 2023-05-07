import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import scopeFilter from "../utils/filters";

const Home = () => {
  const arr = scopeFilter();
  // const selectedTripToCard = arr?.filter((el) => el.TripId === 0); co z tym?

  return (
    <Flex justifyContent="center" alignItems="center" height="800px">
      <Flex
        width="60%"
        height="60%"
        flexDirection="row"
        justifyContent="space-around"
      >
        <Card width="40%">
          <CardHeader textAlign="center">
            <Heading>Hot Offer</Heading>
          </CardHeader>

          <CardBody textAlign="center">
            <Text fontSize="xl">Members:</Text>
            <Text fontSize="xl">Price:</Text>
          </CardBody>
          <Divider orientation="horizontal" />
          <CardFooter justify="center">
            <Button colorScheme="green" variant="outline" width="60%">
              See details
            </Button>
          </CardFooter>
        </Card>
        <Card height="100%" width="40%">
          <CardBody>
            <Heading textAlign="center">Stork Trips</Heading>
            <Text textAlign="inherit">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              exercitationem fugit velit ipsa, similique totam eligendi sint
              eveniet magni perspiciatis, ex deleniti animi rem sapiente unde
              deserunt, autem suscipit aliquid!
            </Text>
          </CardBody>
          <Divider orientation="horizontal" />
          <CardFooter justifyContent="center">
            <Button colorScheme="green" variant="outline" width="60%">
              <NavLink to="/trips">See more</NavLink>
            </Button>
          </CardFooter>
        </Card>
      </Flex>
    </Flex>
  );
};

export default Home;
