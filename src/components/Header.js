import { Avatar, Box, HStack, Input } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { Mycolor } from "../theme";
import { MdLocalDining } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { routes } from "../routes";
import { useForm } from "react-hook-form";
import { ErrText } from "./ErrText";

export const Header = () => {
  const onSubmit = (data) => {
    nav(`/Search/${data.Keyword}`);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isclick, SetClick] = useState(false);
  const current = useLocation();
  const nav = useNavigate();
  return (
    <>
      <Box
        backdropFilter={"auto"}
        backdropBlur="8px"
        maxW={"500px"}
        padding={"40px 20px"}
        width={"100%"}
        position={"fixed"}
        top={0}
        display={"flex"}
        flexDirection={"column"}
        bg={Mycolor.HeaderBg}
        zIndex={1}
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
            onClick={() => nav(routes.Intro)}
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

        <Box
          as="form"
          margin={"20px 0"}
          display={isclick ? "block" : "none"}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            placeholder="음식점 이름을 검색하세요"
            {...register("Keyword", { required: "키워드를 입력하세요" })}
          />
          <ErrText Texts={errors?.Keyword?.message}></ErrText>
        </Box>
      </Box>
    </>
  );
};
