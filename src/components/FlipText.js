import React from "react";
import Flip from "react-reveal/Flip";
import { Box, Text, Image } from "@chakra-ui/react";

class FlipText extends React.Component {
  render() {
    return (
      <Box textAlign="center" bg="red" maxW="950px" m="auto">
        <Flip left>
          <Text>React Reveal</Text>
          <Box m="auto" textAlign="center" boxSize="sm">
            <Image
              align="center"
              objectFit={"cover"}
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </Box>
        </Flip>
      </Box>
    );
  }
}

export default FlipText;
