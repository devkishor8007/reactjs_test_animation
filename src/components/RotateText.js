import React from "react";
import { Text, Box } from "@chakra-ui/react";

class RotateText extends React.Component {
  render() {
    return (
      <div data-aos="flip-down">
        <Box w="450px">
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
            maxime error adipisci illo, ea dicta vitae, molestias a delectus
            aspernatur minima itaque sint laudantium voluptate quaerat? Quisquam
            aliquam doloremque tempora! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ex atque omnis obcaecati minus asperiores illum,
            alias quaerat quo cupiditate odio, quasi quam sint inventore unde
            voluptas eligendi ea soluta et?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque
            omnis obcaecati minus asperiores illum, alias quaerat quo cupiditate
            odio, quasi quam sint inventore unde voluptas eligendi ea soluta et?
          </Text>
        </Box>
      </div>
    );
  }
}

export default RotateText;
