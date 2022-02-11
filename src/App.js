import { VStack } from "@chakra-ui/react";
import React from "react";
import BoxMotion from "./components/BoxMotion";
import GridMotion from "./components/GridMotion";

import TextMotion from "./components/TextMotion";

function App() {
  return (
    <VStack className="App">
      <TextMotion />
      <GridMotion />
      <BoxMotion />
    </VStack>
  );
}

export default App;
