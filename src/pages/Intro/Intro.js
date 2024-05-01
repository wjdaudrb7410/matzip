import { Box, Button, Container, Text } from "@chakra-ui/react";
import { MdLocalDining } from "react-icons/md";
import { Mycolor } from "../../theme";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";

export const Intro = () => {
  window.localStorage.setItem("Language", "Kor");
  const nav = useNavigate();
  return (
    <>
      <Container
        h={"100vh"}
        padding={"0 20px"}
        bg={Mycolor.ContentWrap}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        textAlign={"center"}
      >
        <MdLocalDining color={Mycolor.Point} size={100} />
        <Box fontSize={"40px"} textTransform={"uppercase"} fontWeight={900}>
          MatZip
        </Box>
        <Text color={Mycolor.Text} fontSize={"16px"} fontWeight={300}>
          부산에 있는 맛집들로 떠나보세요
        </Text>
        <Button
          w={"100%"}
          marginTop={"60px"}
          bg={Mycolor.Point}
          _hover={{ bg: Mycolor.ButtonHover }}
          onClick={() => {
            nav(routes.home);
          }}
        >
          시작하기
        </Button>
      </Container>
    </>
  );
};
