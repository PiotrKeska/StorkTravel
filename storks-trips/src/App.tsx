import { Box, Flex } from "@chakra-ui/react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import NavBar from "./Navigate/NavBar";
import Trips from "./TripsBox/Trips";

function App() {
  return (
    <>
      <Header />
      <NavBar />

      <Flex justifyContent="center">
        <Trips />
      </Flex>
      <Footer />
    </>
  );
}

export default App;
