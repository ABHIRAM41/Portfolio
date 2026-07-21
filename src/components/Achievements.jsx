import { Box, Button, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Achievementscards from "./Cards/Achievementscards";
import { achv } from "./data.js";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Achievements = ({ id }) => {
  const [i, setI] = useState(0);

  const [index, setIndex] = useState(0);

  const handleAchvLeft = () => {
    setI(i - 1);
    setIndex((prev) => (prev = Math.abs(i) % achv.length));
  };
  const handleAchvRight = () => {
    setI(i + 1);
    setIndex((prev) => (prev = Math.abs(i) % achv.length));
  };
  // useEffect(async() => {
  //    setTimeout( await () => {
  //     setI(i + 1);
  //     setIndex((prev) => (prev = Math.abs(i) % achv.length));
  //   }, 5000);
  // }, [i]);
  return (
    <Box height={"100vh"} id={id} display={"flex"} alignItems={"center"}>
      <Box width={"100%"}>
        <Text
          fontSize={{ base: "2rem", md: "3rem" }}
          ml={{ base: "", md: "100px" }}
          textAlign={{ base: "center", md: "left" }}
          mt={"60px"}
        >
          Achievements
        </Text>
        <Box display="flex" justifyContent={"center"} width={"100%"}>
          <Box
            display="flex"
            width={"75%"}
            mt={8}
            background={"white"}
            color={"black"}
            justifyContent={"center"}
            flexDirection={"column"}
            borderRadius={"md"}
          >
            <Box display="flex" justifyContent={"center"}>
              <Box
                width={{ md: "15%", lg: "20%" }}
                display={{ base: "none", md: "flex" }}
                flexDirection={"column"}
                justifyContent={"space-around"}
                my={2}
                mr={2}
              >
                {achv.map((a) => (
                  <Text
                    key={a.id}
                    fontSize={{ base: "1.1rem", md: "0.9rem", lg: "1.3rem" }}
                    cursor={"pointer"}
                    onClick={() => setIndex((prev) => (prev = a.id))}
                  >
                    {a.name}
                  </Text>
                ))}
              </Box>
              <Box
                width={{ base: "90%", md: "80%", lg: "60%" }}
                height={{ base: "300px", md: "330px", lg: "430px" }}
                background={achv[index].col}
                borderRadius={"md"}
                my={{ md: 3 }}
                mt={{ base: 3, md: "" }}
                display={"flex"}
                justifyContent={"center"}
                gap={"15px"}
              >
                <Achievementscards
                  img={achv[index].img}
                  description={achv[index].description}
                  link={achv[index].link}
                />
              </Box>
            </Box>
            <Box
              display={{ base: "flex", md: "none" }}
              justifyContent={"center"}
            >
              <Box display={"flex"} alignItems={"center"}>
                <Text onClick={handleAchvLeft} cursor={"pointer"}>
                  <MdKeyboardArrowLeft />
                </Text>
                <Text mx={"3px"}>{index + 1}</Text>
                <Text onClick={handleAchvRight} cursor={"pointer"}>
                  <MdKeyboardArrowRight />
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Achievements;
