import { SimpleGrid, Box, Image } from "@chakra-ui/react";
import React from "react";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

export default function RollImages() {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
      <Flip>
        <Box bg="tomato">
          <Image
            height="250px"
            w="250px"
            objectFit="cover"
            src="https://images.unsplash.com/photo-1567446218653-627b092e52c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="sjaz"
          />
        </Box>
      </Flip>
      <Zoom left>
        <Box bg="tomato">
          <Image
            height="250px"
            w="250px"
            objectFit="cover"
            alt="sks"
            src="https://images.unsplash.com/photo-1567516364473-233c4b6fcfbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          />
        </Box>
      </Zoom>
      <Bounce top>
        <Box bg="tomato">
          <Image
            w="250px"
            objectFit="cover"
            height="250px"
            alt="sk"
            src="https://images.unsplash.com/photo-1535546125792-dd417e0f8f87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
        </Box>
      </Bounce>
      <Fade bottom>
        <Box bg="tomato">
          <Image
            w="250px"
            objectFit="cover"
            height="250px"
            alt="sk"
            src="https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c21pbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
        </Box>
      </Fade>
      <Bounce right>
        <Box bg="tomato" height="250px">
          <Image
            w="250px"
            objectFit="cover"
            height="250px"
            alt="sk"
            src="https://images.unsplash.com/photo-1535546125792-dd417e0f8f87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
        </Box>
      </Bounce>
    </SimpleGrid>
  );
}
