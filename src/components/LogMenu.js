import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { MdEmail } from "react-icons/md";
import { Mycolor } from "../theme";
import { FaLock, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ErrText } from "./ErrText";
import { routes } from "../routes";

export const LogMenu = ({ isShow }) => {
  const nav = useNavigate();
  const { t, i18n } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    nav(routes.Intro, {
      state: {
        ...data,
      },
    });
  };
  return (
    <>
      <Box
        as="form"
        w={"100%"}
        marginTop={isShow === true ? "140px" : "200px"}
        textAlign={"left"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Text fontSize={"28px"} fontWeight={"600"}>
          {isShow ? t("Signin.Title1") : t("Signin.Title2")}
        </Text>
        <VStack marginTop={"20px"}>
          {isShow ? (
            <>
              <InputGroup>
                <InputLeftElement>
                  <FaUser color={Mycolor.HeaderButton} />
                </InputLeftElement>
                <Input
                  placeholder={t("Signin.UserName")}
                  {...register("Username", {
                    required: t("Errors.Username"),
                    minLength: {
                      value: 2,
                      message: t("Errors.MinLen"),
                    },
                  })}
                />
              </InputGroup>
              <ErrText Texts={errors?.Username?.message} />
              <InputGroup>
                <InputLeftElement>
                  <FaLock color={Mycolor.HeaderButton} />
                </InputLeftElement>
                <Input
                  {...register("Password", {
                    required: t("Errors.Password"),
                    minLength: {
                      value: 2,
                      message: t("Errors.MinLen"),
                    },
                  })}
                  placeholder={t("Signin.PassWord")}
                  type="password"
                />
              </InputGroup>
              <ErrText Texts={errors?.Password?.message} />
            </>
          ) : (
            <>
              <InputGroup>
                <InputLeftElement>
                  <MdEmail color={Mycolor.HeaderButton} />
                </InputLeftElement>
                <Input
                  placeholder={t("Signin.Email")}
                  {...register("Email", {
                    required: t("Errors.Email"),
                    minLength: {
                      value: 2,
                      message: t("Errors.MinLen"),
                    },
                  })}
                />
              </InputGroup>
              <ErrText Texts={errors?.Email?.message} />

              <InputGroup>
                <InputLeftElement>
                  <FaUser color={Mycolor.HeaderButton} />
                </InputLeftElement>
                <Input
                  placeholder={t("Signin.UserName")}
                  {...register("Username", {
                    required: t("Errors.Username"),
                    minLength: {
                      value: 2,
                      message: t("Errors.MinLen"),
                    },
                  })}
                />
              </InputGroup>
              <ErrText Texts={errors?.Username?.message} />
              <InputGroup>
                <InputLeftElement>
                  <FaLock color={Mycolor.HeaderButton} />
                </InputLeftElement>
                <Input
                  {...register("Password", {
                    required: t("Errors.Password"),
                    minLength: {
                      value: 2,
                      message: t("Errors.MinLen"),
                    },
                  })}
                  placeholder={t("Signin.PassWord")}
                  type="password"
                />
              </InputGroup>
              <ErrText Texts={errors?.Password?.message} />
            </>
          )}

          <Button
            w={"100%"}
            marginTop={"10px"}
            color={Mycolor.Text}
            bg={Mycolor.Point}
            _hover={{ bg: Mycolor.ButtonHover }}
            type="submit"
          >
            {isShow ? t("Signin.Title1") : t("Signin.Title2")}
          </Button>
        </VStack>
        <Box w={"100%"} marginTop={"20px"} position={"relative"}>
          <Divider />
          <AbsoluteCenter bg={Mycolor.ContentWrap}>
            <Text fontSize={"14px"} opacity={0.7} padding={"0 5px"}>
              or
            </Text>
          </AbsoluteCenter>
        </Box>
        <HStack
          justifyContent={"center"}
          w={"100%"}
          alignItems={"center"}
          marginTop={"20px"}
        >
          {isShow ? (
            <>
              <Text fontSize={"14px"}>{t("Signin.SubTitle1")}</Text>
              <Box>
                <Text textDecoration={"underline"} fontSize={"14px"}>
                  <Link to={routes.Signup}>{t("Signin.Title2")}</Link>
                </Text>
              </Box>
            </>
          ) : (
            <>
              <Text fontSize={"14px"}>{t("Signin.SubTitle2")}</Text>
              <Box>
                <Text textDecoration={"underline"} fontSize={"14px"}>
                  <Link to={routes.Signin}>{t("Signin.Title1")}</Link>
                </Text>
              </Box>
            </>
          )}
        </HStack>
      </Box>
    </>
  );
};
