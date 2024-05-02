import { Box, Text } from "@chakra-ui/react";
import { Mycolor } from "../theme";
import { ReactIcon } from "@chakra-ui/icons";

export const Footer = () => {
  return (
    <>
      <Box
        marginTop={"30px"}
        padding={"20px 0"}
        width={"100%"}
        position={"sticky"}
        bottom={0}
        display={"flex"}
        flexDirection={"column"}
        bg={Mycolor.ContentWrap}
        zIndex={3}
        alignItems={"center"}
      >
        <Text color={Mycolor.Point} textTransform={"uppercase"} fontSize={"24"}>
          matzip
        </Text>
        <Text color={"gray"} opacity={0.7} fontSize={"12px"} fontWeight={"300"}>
          Made By Jung Myung gyu
        </Text>
        <Text color={"gray"} opacity={0.7} fontSize={"12px"} fontWeight={"300"}>
          Powered By <ReactIcon /> , Data.go.kr
        </Text>
      </Box>
    </>
  );
};
