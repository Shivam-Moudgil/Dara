import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Input,
    Spinner,
    Stack,
    useToast
  } from "@chakra-ui/react";
  import axios from "axios";

  import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
  const obj = {
    email: "",
      password: ""
  };
  const Logging = () => {
    const PORT = 'http://localhost:4400';
    const toast = useToast();
    const [load, setLoad] = useState(false);
    const [text, setText] = useState(obj);
  const router =useNavigate()
    const handleChange = (e) => {
        const { type, checked, value, name } = e.target;
        // const inputValue = type === "checkbox" ? checked : value;
      setText({...text, [name]: value});
    };
  
    const {email, password} = text;
    
      
    const handleSubmit = async() => {
      if (email !== "" && password !== "") {
        setLoad(true);
      await axios.post(`${PORT}/api/auth/login`,{email:email,password:password})
          .then((res) => {
            console.log(res)
          localStorage.setItem("token",JSON.stringify(res.data?.token));
            setLoad(false);
            toast({
              title: "Logged in",
              position: "top-right",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
            router('/booked')
          })
          .catch((err) => {
            setLoad(false);
            console.log(err);
            toast({
              title: "Invalid credentials",
              position: "top-right",
              status: "error",
              duration: 2000,
              isClosable: true,
            });
          });
  
        setText(obj);
      } else {
        toast({
          title: "Input fields first",
          position: "top-right",
          status: "warning",
          duration: 2000,
          isClosable: true,
        });
      }
    };
  
    return (
      <Stack direction={{base: "column", md: "row"}}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}>Sign in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                onChange={handleChange}
                value={email}
                name="email"
                type="email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                onChange={handleChange}
                value={password}
                type="password"
              />
            </FormControl>
            <Stack spacing={6}>
              <Button
                onClick={handleSubmit}
                colorScheme={"blue"}
                variant={"solid"}
              >
                {load ? <Spinner /> : "Sign in"}
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            loading="lazy"
            objectFit={"cover"}
            borderRadius={"2rem"}
            w={"90%"}
            m="auto"
            mt={3}
            src={
              "https://media.istockphoto.com/id/1312423123/vector/online-registration-and-sign-up-concept-flat-vector-illustration.jpg?s=612x612&w=0&k=20&c=0q20WWwJg9fvmKuGBn4IC68zzd4J65X88B9XnC-37h0="
            }
          />
        </Flex>
      </Stack>
    );
  };
  export default Logging;