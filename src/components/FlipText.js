import React from "react";

import { Box, Text, Image } from "@chakra-ui/react";

class FlipText extends React.Component {
  render() {
    return (
      <div data-aos="flip-left">
      <Box textAlign="center" bg="red" maxW="950px" m="auto">
        <Text>AOS</Text>
        <Box m="auto" textAlign="center" boxSize="sm">
          <Image
            align="center"
            objectFit={"cover"}
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </Box>
      </Box>
      </div>
    );
  }
}

export default FlipText;
