import {
  Avatar,
  Box,
  Divider,
  HStack,
  Input,
  Text,
  VStack,
  flattenTokens,
} from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mycolor } from "../theme";
import { MdLocalDining } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { routes } from "../routes";

export const Header = () => {
  const [isclick, SetClick] = useState(false);
  const current = useLocation();
  const nav = useNavigate();
  return (
    <>
      <Box
        width={"100%"}
        h={"80px"}
        position={"sticky"}
        top={0}
        color={Mycolor.Text}
        display={"flex"}
        flexDirection={"column"}
        bg={Mycolor.ContentWrap}
      >
        <Box
          display={"flex"}
          width={"100%"}
          h={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <MdLocalDining
            color={Mycolor.Point}
            size={40}
            cursor={"pointer"}
            onClick={() => nav(routes.home)}
          />
          <HStack spacing={10} style={{}}>
            <Box sx={{ "svg:hover": { fill: Mycolor.HeaderButtonHover } }}>
              <FaSearch
                color={Mycolor.HeaderButton}
                size={"24px"}
                cursor={"pointer"}
                onClick={() => SetClick(!isclick)}
              />
            </Box>
            <Avatar size={"xs"} cursor={"pointer"} />
          </HStack>
        </Box>

        <Box as="form" marginTop={"20px"} display={isclick ? "block" : "none"}>
          <Input placeholder="음식점 이름을 검색하세요" />
        </Box>
      </Box>
    </>
  );
};
