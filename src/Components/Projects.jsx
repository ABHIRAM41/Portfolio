import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { liveWebsite } from "./data";
import { IoIosLink } from "react-icons/io";
const Projects = ({ id }) => {
  return (
    <Box
      id={id}
      height={"100vh"}
      display={"flex"}
      flexDirection="column"
      justifyContent={"center"}
    >
      <Text
        fontSize={{ base: "2rem", md: "3rem" }}
        fontWeight={"semiBold"}
        ml={{ base: "", md: "5%" }}
        my={{ base: "30px", xl: "" }}
        textAlign={{ base: "center", md: "left" }}
      >
        Live Projects
      </Text>

      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        height={"70vh"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          gap={"20px"}
          width={"90%"}
          flexWrap={"wrap"}
        >
          {liveWebsite.map((l) => (
            <Box
              maxWidth={{
                base: "250px",
                sm: "300px",
                md: "350px",
                xl: "500px",
              }}
              minWidth={"50px"}
              mb="15px"
            >
              <a href={l.Link} target="_blank">
                <div class="container">
                  <Image src={l.img} alt={l.name} />
                  <div class="overlay">
                    <Text className="text" fontSize={"15px"}>
                      🔗{l.Link}
                    </Text>
                  </div>
                </div>
              </a>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
