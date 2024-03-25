// twitter,linkedin,email,github etc
import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { SiLeetcode, SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";

function Contact({ id }) {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Content, setContent] = useState("");
  const toast = useToast();
  const onSubmit = async (event) => {
    event.preventDefault();
    //const formData = new FormData(event.target);
    if (!Name || !Email || !Content) {
      toast({
        title: "Enter All the details",
        status: "warning",
        duration: 3000,
        position: "bottom",
        isClosable: true,
      });
    } else {
      const mailData = {
        name: Name,
        email: Email,
        message: Content,
        access_key: import.meta.env.VITE_EMAIL_KEY,
      };
      //console.log("Form submitted: ", Object.fromEntries(formData));
      //formData.append("access_key", "5a6f7102-1f7c-4b8d-bc86-5a5acbe335e6");

      //const object = Object.fromEntries(formData);
      const json = JSON.stringify(mailData);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        setContent("");
        setEmail("");
        setName("");
        toast({
          title: "Message Received",
          description: "I've Received your Message",
          status: "success",
          duration: 3000,
          position: "top-right",
          isClosable: true,
        });
      }
    }
  };

  return (
    // <Box height={"91vh"}>
    <Grid
      templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
      height={"91vh"}
      alignItems={"center"}
      justifyItems={"center"}
      id={id}
    >
      <GridItem display={{ base: "none", md: "flex" }}>
        <Box display={"flex"} flexDirection="column">
          <Text fontSize="3rem" fontWeight={550}>
            Lets Connect
          </Text>
          <Box display={"flex"} gap={3}>
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
      <GridItem minWidth={"100%"}>
        <Box display={"flex"} flexDirection={"column"} gap={10}>
          <Text display={"flex"} justifyContent={"center"} fontSize={"2.5rem"}>
            Get in Touch
          </Text>
          <Box display={"flex"} flexDirection={"column"} gap={4}>
            <Box display={"flex"} justifyContent={"center"}>
              <Box width={"70%"}>
                <Text mb="8px">Name</Text>
                <Input
                  type="text"
                  focusBorderColor="white"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  width={{ base: "100%", md: "90%" }}
                />
              </Box>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
              <Box width={"70%"}>
                <Text mb="8px">Email</Text>
                <Input
                  type="text"
                  focusBorderColor="white"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  width={{ base: "100%", md: "90%" }}
                />
              </Box>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
              <Box width={"70%"}>
                <Text mb="8px">Message</Text>
                <Textarea
                  value={Content}
                  borderRadius={"lg"}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="write your message here......"
                  size="sm"
                  width={{ base: "100%", md: "90%" }}
                />
              </Box>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
              <Box width={"70%"}>
                <Button type="submit" onClick={onSubmit}>
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </GridItem>
      <Box display={{ base: "flex", md: "none" }} gap={3}>
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
    </Grid>
    // </Box>
  );
}

export default Contact;

// {
//   /* <form onSubmit={onSubmit}>
//       <input type="text" name="name" />
//       <input type="email" name="email" />
//       <textarea name="message"></textarea>
//       <button type="submit">Submit Form</button>
//     </form> */
// }
