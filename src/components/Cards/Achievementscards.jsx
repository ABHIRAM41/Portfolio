import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";

const Achievementscards = ({ img, description, link }) => {
  return (
    <Box
      width={{ base: "65%", md: "60%", lg: "55%" }}
      background={"white"}
      borderRadius={"10px"}
      m={"1%"}
    >
      <Box display={"flex"} justifyContent={"center"} m={"3%"} height={"40%"}>
        <Image src={img} alt="codekaze" objectFit={"contain"} />
      </Box>
      <Box>
        <Box m={"7%"}>
          <Box>
            <Text fontSize={{ base: "0.9rem", md: "1.1rem", lg: "1.2rem" }}>
              Description:
            </Text>
            <Text
              ml={"10%"}
              fontSize={{ base: ".55rem", md: ".8rem", lg: ".85rem" }}
              mb={"3px"}
            >
              {description}
            </Text>
          </Box>
          {link && (
            <Box>
              <Text fontSize={{ base: ".9rem", md: "1.1rem", lg: "1.2rem" }}>
                Related Link:
              </Text>
              <Text
                ml={"10%"}
                fontSize={{ base: ".55rem", md: ".8rem", lg: ".85rem" }}
                mb={"3px"}
              >
                <a href={link} target="_blank">
                  🔗{link}
                </a>
              </Text>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Achievementscards;
