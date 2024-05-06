import { Container } from "@chakra-ui/react";
import { HelmetTitle } from "../../components/HelmetTitle";
import { Mycolor } from "../../theme";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { LogMenu } from "../../components/LogMenu";

export const Register = () => {
  return (
    <>
      <HelmetTitle title={"Register"} />
      <HelmetTitle title={"Login"} />
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
        <LogMenu isShow={false}></LogMenu>
        <Header />
        <Footer />
      </Container>
    </>
  );
};
