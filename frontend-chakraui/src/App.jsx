import { Box, Heading, Button } from "@chakra-ui/react";

function App() {
  return (
    <Box textAlign="center" p={10}>
      <Heading>Hello, Chakra UI!</Heading>
      <Button colorScheme="teal" mt={4}>
        Click Me
      </Button>
    </Box>
  );
}

export default App;
