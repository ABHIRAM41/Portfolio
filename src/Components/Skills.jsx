import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5 } from "react-icons/io5";
import { FaReact, FaNode, FaCss3Alt } from "react-icons/fa";
import {
  SiExpress,
  SiChakraui,
  SiPostgresql,
  SiVisualstudiocode,
  SiPostman,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import ProjectN from "./ProjectsN";
// import Projects from "./Projects";
const Skills = () => {
  return (
    <Box height={"50vh"}>
      <Box mb={"50px"}>
        <Text
          fontSize={{ base: "2rem", md: "3rem" }}
          fontWeight={"semiBold"}
          ml={{ base: "", md: "20px" }}
          mb={"30px"}
          textAlign={{ base: "center", md: "left" }}
        >
          Skills
        </Text>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          gap={"20px"}
          justifyContent={"space-around"}
        >
          <Box width={{ base: "40px", md: "80px" }}>
            <FaJava size={"100%"} />
          </Box>
          <Box width={{ base: "40px", md: "80px" }}>
            <IoLogoHtml5 size={"100%"} />
          </Box>
          <Box width={{ base: "40px", md: "80px" }}>
            <IoLogoCss3 size={"100%"} />
          </Box>
          <Box width={{ base: "40px", md: "80px" }}>
            <IoLogoJavascript size={"100%"} />
          </Box>
          <Box width={{ base: "40px", md: "80px" }}>
            <FaReact size={"100%"} />
          </Box>
          <Box width={{ base: "40px", md: "80px" }}>
            <FaNode size={"100%"} />
          </Box>
          <Box width={{ base: "40px", md: "80px" }}>
            <SiExpress size={"100%"} />
          </Box>
          <Box width={{ base: "40px", md: "80px" }}>
            <SiChakraui size={"100%"} />
          </Box>
          <Box width={{ base: "40px", md: "80px" }}>
            <FaGithub size={"100%"} />
          </Box>
          <Box width={{ base: "40px", md: "80px" }}>
            <SiVisualstudiocode size={"100%"} />
          </Box>
          <Box width={{ base: "40px", md: "80px" }}>
            <SiPostman size={"100%"} />
          </Box>
          <Box width={{ base: "40px", md: "80px" }}>
            <SiPostgresql size={"100%"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
