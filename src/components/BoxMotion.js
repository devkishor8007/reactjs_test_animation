import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

export default function BoxMotion() {
  return (
    <Flex w="full" justifyItems="start" display="column">
      <motion.div
        animate={{ x: 1000, opacity: 1 }}
        initial={{
          opacity: 0.5,
        }}
      >
        <Box m="10px" bg="red" h="190px" w="250px"></Box>
      </motion.div>
    </Flex>
  );
}
