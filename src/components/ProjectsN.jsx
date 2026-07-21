import { Box, Image, Text, flexbox } from "@chakra-ui/react";
import React, { useState } from "react";
import { Aprojects } from "./data";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const ProjectN = ({ id }) => {
  const [i, setI] = useState(0);

  const [index, setIndex] = useState(0);

  const handleAchvLeft = () => {
    setI(i - 1);
    setIndex((prev) => (prev = Math.abs(i) % Aprojects.length));
  };
  const handleAchvRight = () => {
    setI(i + 1);
    setIndex((prev) => (prev = Math.abs(i) % Aprojects.length));
  };
  return (
    <Box height={"100vh"} id={id}>
      <Box
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Text
          fontSize={{ base: "2rem", md: "3rem" }}
          ml={{ base: "", md: "5%" }}
          textAlign={{ base: "center", md: "left" }}
          my={"30px"}
        >
          Projects
        </Text>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Box
            background={"white"}
            color={"black"}
            borderRadius={"10px"}
            width={{ base: "75%" }}
          >
            <Box
              display={"flex"}
              className="containerP"
              flexDirection={{ base: "column", md: "row" }}
              justifyContent={"center"}
              alignItems={"center"}
              height={{ base: "550px", md: "400px" }}
            >
              <Box
                width={{ base: "100%", md: "50%" }}
                height={{ base: "50%", md: "100%" }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box width={"90%"} m={"10px"} height={"90%"}>
                  <Image
                    src={Aprojects[index].img}
                    objectFit={"contain"}
                    width={"100%"}
                    height={"100%"}
                  />
                </Box>
              </Box>
              <Box
                width={{ base: "100%", md: "50%" }}
                display={"flex"}
                justifyContent={"center"}
              >
                <Box width={"100%"} m={"10px"}>
                  <Box>
                    <Text fontWeight={600} fontSize={"1.3rem"} mb={"5px"}>
                      Title:{" "}
                    </Text>
                    <Text
                      ml={"50px"}
                      fontSize={{ base: ".8rem", md: "0.9rem", lg: "1.1rem" }}
                    >
                      {" "}
                      {Aprojects[index].name}{" "}
                    </Text>
                  </Box>
                  <Box my={"20px"}>
                    <Text fontWeight={600} fontSize={"1.3rem"} mb={"5px"}>
                      Technologies used:
                    </Text>
                    <Text
                      ml={"50px"}
                      fontSize={{ base: ".7rem", md: "0.8rem", lg: "1rem" }}
                    >
                      {" "}
                      {Aprojects[index].skills}
                    </Text>
                  </Box>
                  <Box>
                    <Text fontWeight={600} fontSize={"1.3rem"} mb={"5px"}>
                      Description
                    </Text>
                    <Text
                      ml={"50px"}
                      fontSize={{ base: ".7rem", md: "0.8rem", lg: "1rem" }}
                    >
                      {" "}
                      {Aprojects[index].description}
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box
                position={"absolute"}
                className="overlayP"
                cursor={"pointer"}
                left={"0px"}
                height={"100%"}
                width={"10%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                fontWeight={100}
                onClick={handleAchvLeft}
              >
                <MdKeyboardArrowLeft size={"50px"} color="gray" />
              </Box>
              <Box
                position={"absolute"}
                className="overlayP"
                cursor={"pointer"}
                right={"0px"}
                height={"100%"}
                width={"10%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                onClick={handleAchvRight}
              >
                <MdKeyboardArrowRight size={"50px"} color="gray" />
              </Box>
            </Box>
          </Box>
          <Box my={"20px"} display={"flex"} gap="10px" alignItems={"center"}>
            <Box
              width={index == 0 ? "15px" : "10px"}
              height={index == 0 ? "15px" : "10px"}
              background={"white"}
              borderRadius={index == 0 ? "10px" : "10px"}
              onClick={() => setIndex(0)}
            ></Box>
            <Box
              width={index == 1 ? "15px" : "10px"}
              height={index == 1 ? "15px" : "10px"}
              background={"white"}
              borderRadius={index == 1 ? "10px" : "10px"}
              onClick={() => setIndex(1)}
            ></Box>
            <Box
              width={index == 2 ? "15px" : "10px"}
              height={index == 2 ? "15px" : "10px"}
              background={"white"}
              borderRadius={index == 2 ? "10px" : "10px"}
              onClick={() => setIndex(2)}
            ></Box>
            <Box
              width={index == 3 ? "15px" : "10px"}
              height={index == 3 ? "15px" : "10px"}
              background={"white"}
              borderRadius={index == 3 ? "10px" : "10px"}
              onClick={() => setIndex(3)}
            ></Box>
            <Box
              width={index == 4 ? "15px" : "10px"}
              height={index == 4 ? "15px" : "10px"}
              background={"white"}
              borderRadius={index == 4 ? "10px" : "10px"}
              onClick={() => setIndex(4)}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ProjectN;
