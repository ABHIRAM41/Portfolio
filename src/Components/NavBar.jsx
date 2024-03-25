import React, { useEffect, useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-scroll";
import {
  Box,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [menu, setMenu] = useState(false);

  // const handleClickScrollContact = () => {
  //   const element = document.getElementById("contact");
  //   if (element) {
  //     setMenu((prev) => (prev = false));
  //     // 👇 Will scroll smoothly to the top of the next section
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  // const handleClickScrolltop = () => {
  //   const element = document.getElementById("top");
  //   if (element) {
  //     setMenu((prev) => (prev = false));
  //     // 👇 Will scroll smoothly to the top of the next section
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  // const handleClickScrollProjects = () => {
  //   const element = document.getElementById("Projects");
  //   if (element) {
  //     setMenu((prev) => (prev = false));
  //     // 👇 Will scroll smoothly to the top of the next section
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  // const handleClickScrollLiveProjects = () => {
  //   const element = document.getElementById("LProjects");
  //   if (element) {
  //     setMenu((prev) => (prev = false));
  //     // 👇 Will scroll smoothly to the top of the next section
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  // const handleClickScrollAchievements = () => {
  //   const element = document.getElementById("achievements");
  //   if (element) {
  //     setMenu((prev) => (prev = false));
  //     // 👇 Will scroll smoothly to the top of the next section
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const handleBar = () => {
    setTimeout(() => setMenu((prev) => (prev = false)), 1500);
    // setMenu((prev) => (prev = false));
  };
  // useEffect(()=>{
  //   handleBar
  // },[menu])

  return (
    <Box
      position={"sticky"}
      top={0}
      display={"flex"}
      flexDirection={"column"}
      zIndex={1}
    >
      <Box
        minHeight={"60px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems="center"
        fontSize={{ base: "17px", lg: "20px" }}
        bg="rgb(20, 24, 33)"
      >
        <Link activeClass="active" smooth spy to="top" onClick={handleBar}>
          <Box
            ml={"20px"}
            cursor={"pointer"}
            fontWeight={600}
            fontSize={"20px"}
          >
            Abhi's Portfolio
          </Box>
        </Link>
        <Box display={{ base: "none", md: "inline" }}>
          <Box display={"flex"} gap={"20px"} mr={"20px"} alignItems="center">
            <Link activeClass="active" smooth spy to="Projects">
              <Text cursor={"pointer"}>Projects</Text>
            </Link>
            <Text cursor={"pointer"}>
              <Link activeClass="active" smooth spy to="LProjects">
                Live Projects
              </Link>
            </Text>
            <Text cursor={"pointer"}>
              <Link activeClass="active" smooth spy to="achievements">
                Achievements
              </Link>
            </Text>
            <Text cursor={"pointer"}>
              <Link activeClass="active" smooth spy to="contact">
                Contact
              </Link>
            </Text>
            <Button onClick={onOpen} mr={"-10px"}>
              Resume
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Resume</ModalHeader>
                <ModalCloseButton />
                <ModalBody width={{ base: "400px", md: "600px" }}>
                  <embed
                    src="J Abhiram Reddy Resume.pdf"
                    width={"800px"}
                    height={"1000px"}
                  />
                </ModalBody>

                <ModalFooter>
                  <a
                    href="J Abhiram Reddy Resume.pdf"
                    download={"J Abhiram Reddy Resume.pdf"}
                  >
                    <Button onClick={onClose}>
                      <IoMdDownload fontSize={"20px"} />
                    </Button>
                  </a>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <a
              href="J Abhiram Reddy Resume.pdf"
              download={"J Abhiram Reddy Resume.pdf"}
            >
              <Button>
                <IoMdDownload fontSize={"20px"} />
              </Button>
            </a>
          </Box>
        </Box>
        <Box display={{ base: "inline", md: "none" }} mr={"10px"}>
          <Button onClick={() => setMenu((prev) => !prev)}>
            <IoMenu size="30px" />
          </Button>
        </Box>
      </Box>
      <Box
        bg="rgb(20, 24, 33)"
        display={menu ? { base: "flex", md: "none" } : "none"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"10px"}
      >
        <Link activeClass="active" smooth spy to="Projects" onClick={handleBar}>
          <Text cursor={"pointer"}>Projects</Text>
        </Link>
        <Link
          activeClass="active"
          smooth
          spy
          to="LProjects"
          onClick={handleBar}
        >
          <Text cursor={"pointer"}>Live Projects</Text>
        </Link>
        <Link
          activeClass="active"
          smooth
          spy
          to="achievements"
          onClick={handleBar}
        >
          <Text cursor={"pointer"}>Achievements</Text>
        </Link>
        <Link activeClass="active" smooth spy to="contact" onClick={handleBar}>
          <Text cursor={"pointer"}>Contact</Text>
        </Link>
        <a
          href="J Abhiram Reddy Resume.pdf"
          download={"J Abhiram Reddy Resume.pdf"}
        >
          <Button onClick={onClose}>
            <Text mr={"10px"}>Resume</Text>
            <IoMdDownload fontSize={"20px"} />
          </Button>
        </a>
      </Box>
    </Box>
  );
};

export default NavBar;
{
  /* <embed src="J Abhiram Reddy Resume.pdf" /> */
}
