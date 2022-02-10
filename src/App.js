import { VStack } from "@chakra-ui/react";
import React from "react";

import FlipText from "./components/FlipText";
import RotateText from "./components/RotateText";
import RollImages from "./components/RollImages";

function App() {
  return (
    <VStack className="App">
      <FlipText />
      <RotateText />
      <RollImages />
    </VStack>
  );
}

export default App;
