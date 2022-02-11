import React from "react";
import { SimpleGrid, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const grid = [
  {
    id: 1,
    title: "One time",
    desc: "no desc",
    color: "green",
  },
  {
    id: 2,
    title: "One time",
    desc: "no desc",
    color: "red",
  },
  {
    id: 3,
    title: "One time",
    desc: "no desc",
    color: "blue",
  },
  {
    id: 4,
    title: "One time",
    desc: "no desc",
    color: "grey",
  },
  {
    id: 5,
    title: "One time",
    desc: "no desc",
    color: "pink",
  },
  {
    id: 6,
    title: "One time",
    desc: "no desc",
    color: "black",
  },
  {
    id: 7,
    title: "One time",
    desc: "no desc",
    color: "orange",
  },
];

export default function GridMotion() {

  return (

    <SimpleGrid
      w={{ base: "250px", md: "650px" }}
      columns={{ sm: 2, md: 3 }}
      spacing={10}
    >
      {grid.map((e, i) => {
        return (
          <motion.div
            key={e.id}
         
            initial={{
              opacity: 0,
              translateX: i % 2 === 0 ? -50 : 50,
              translateY: -50,
            }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 0.3, delay: i + 0.2 }}
          >
            <Box height="80px" bg={e.color}>
              <Text textAlign="center" color="whiteAlpha.700">
                {e.title}
              </Text>
              <Text textAlign="center" color="whiteAlpha.500">
                {e.desc}
              </Text>
            </Box>
          </motion.div>
        );
      })}
    </SimpleGrid>

  );
}
