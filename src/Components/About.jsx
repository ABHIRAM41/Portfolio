import React from "react";
import { Box, Grid, GridItem, Text, Button, Center } from "@chakra-ui/react";
import profile from "../assets/laptop.png";
import Typewriter from "typewriter-effect";
import { SiLeetcode, SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";

const About = ({ id }) => {
  const handleClickScrollContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box>
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
        justifyItems={"center"}
        alignItems={"center"}
        height={"100vh"}
        position={"relative"}
        top={"-60px"}
        id={id}
      >
        <GridItem ml={{ base: "", md: 8 }}>
          <Box
            fontWeight={"900"}
            fontSize={{ base: "2.5rem", md: "3.5rem" }}
            textAlign={{ base: "center", md: "left" }}
          >
            Hi! <Text mt={"-10px"}>I'm J Abhiram Reddy 👋</Text>
          </Box>
          <Box
            fontSize={{ base: "15px", md: "25px" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Typewriter
              options={{
                strings: [
                  "Ethusiastic Dev ",
                  "Competitive programmer",
                  "Full Stack Developer",
                  "Problem solver",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </Box>
          <Box
            display={"flex"}
            fontSize={{ base: "15px", md: "25px" }}
            justifyContent={{ base: "center", md: "left" }}
            mt={"20px"}
          >
            <Box mr={"20px"}>
              <Button borderRadius={"20px"} onClick={handleClickScrollContact}>
                Contact Me
              </Button>
            </Box>
            <Box display={{ base: "flex" }} gap={3}>
              <Box width={"25px"}>
                <a href="https://leetcode.com/J_Abhiram_reddy/" target="_blank">
                  <SiLeetcode size={"100%"} />
                </a>
              </Box>
              <Box width={"25px"}>
                <a href="https://github.com/ABHIRAM41/" target="_blank">
                  <SiGithub size={"100%"} />
                </a>
              </Box>
              <Box width={"25px"}>
                <a
                  href="https://www.linkedin.com/in/j-abhiram-reddy/"
                  target="_blank"
                >
                  <SiLinkedin size={"100%"} />
                </a>
              </Box>
              <Box width={"25px"}>
                <a href="https://twitter.com/jabhiramrrun3" target="_blank">
                  <SiTwitter size={"100%"} />
                </a>
              </Box>
            </Box>
          </Box>
        </GridItem>
        <GridItem
          display={{ base: "none", md: "flex" }}
          justifyContent={"center"}
        >
          <img src={profile} width="50%" height="50%" />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default About;
