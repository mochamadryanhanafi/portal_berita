import { useState } from "react";
import { 
  Box, Flex, IconButton, useColorMode, useColorModeValue, 
  Button, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, 
  DrawerBody, DrawerCloseButton, useDisclosure, VStack, HStack 
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = useState("left");

  return (
    <Box>
      {/* Navbar */}
      <Flex 
        as="nav" 
        p={4} 
        justify="space-between" 
        align="center" 
        bg={useColorModeValue("gray.100", "gray.900")}
        boxShadow="md"
      >
        <IconButton 
          icon={<HamburgerIcon />} 
          aria-label="Open Menu" 
          onClick={onOpen} 
          display={{ base: "block", md: "none" }} 
        />

        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Contact</Button>
        </HStack>

        <IconButton 
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} 
          aria-label="Toggle Theme" 
          onClick={toggleColorMode} 
        />
      </Flex>

      {/* Sidebar untuk Mobile */}
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="start">
              <Button variant="ghost" onClick={onClose}>Home</Button>
              <Button variant="ghost" onClick={onClose}>About</Button>
              <Button variant="ghost" onClick={onClose}>Contact</Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default App;
