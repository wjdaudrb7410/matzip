import { Box, Button, Container, Text, keyframes } from "@chakra-ui/react";
import { MdLocalDining } from "react-icons/md";
import { Mycolor } from "../../theme";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import { Trans, useTranslation } from "react-i18next";
import { ChngLng } from "../../components/ChngLng";

const spin = keyframes`  
   0% {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }
`;
export const Intro = () => {
  const { t, i18n } = useTranslation();
  const spinAnimation = `${spin}  1s linear`;
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
        <Box animation={spinAnimation}>
          <MdLocalDining color={Mycolor.Point} size={100} />
        </Box>

        <Text
          animation={spinAnimation}
          fontSize={"40px"}
          textTransform={"uppercase"}
          fontWeight={900}
          color={Mycolor.Point}
        >
          MatZip
        </Text>
        <Text
          color={Mycolor.Text}
          fontSize={"16px"}
          fontWeight={300}
          animation={spinAnimation}
        >
          <Trans i18nKey={"Intro.Title"} />
        </Text>
        <Button
          w={"100%"}
          marginTop={"60px"}
          color={Mycolor.Text}
          bg={Mycolor.Point}
          _hover={{ bg: Mycolor.ButtonHover }}
          onClick={() => {
            nav(routes.Intro);
          }}
        >
          <Trans i18nKey={"Intro.PlaceHolder"}></Trans>
        </Button>
        <ChngLng></ChngLng>
      </Container>
    </>
  );
};
