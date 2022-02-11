import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function TextMotion() {
  return (
    <Box m="auto" maxW="750px">
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: "-100vw" }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
      >
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odio
          perspiciatis minus corporis illo magnam quae, quia fugiat ducimus
          vero! Ab cum quam, culpa recusandae tempore numquam velit possimus ex.
        </Text>
      </motion.div>
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: "-100vw" }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
      >
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odio
          perspiciatis minus corporis illo magnam quae, quia fugiat ducimus
          vero! Ab cum quam, culpa recusandae tempore numquam velit possimus ex.
        </Text>
      </motion.div>
      <motion.button animate={{ margin: "20px", rotate: 10, scale: 2 }}>
        <Button margin={5}>CLICK ME</Button>
      </motion.button>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
        <Text>Testing animation with Framer Motion </Text>
      </motion.div>
    </Box>
  );
}
