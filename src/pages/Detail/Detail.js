import { Box, Container, Image, Text, VStack } from "@chakra-ui/react";
import { HelmetTitle } from "../../components/HelmetTitle";
import { Header } from "../../components/Header";
import { Mycolor } from "../../theme";
import { useQuery } from "@tanstack/react-query";
import { ServiceArea, ServiceName, ShowDetail } from "../../api";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Loading } from "../../components/Loading";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
export const Detail = () => {
  const { t, i18n } = useTranslation();
  const [kdata, SetData] = useState();
  const { id, Category } = useParams();
  console.log(id);
  const { data: sdata, isLoading: sLoading } = useQuery({
    queryKey: [ServiceArea.Korea, ServiceName.Detail, id],
    queryFn: ShowDetail,
    enabled: !!id,
  });
  useEffect(() => {
    SetData(sdata?.response?.body?.items?.item[0]);
    console.log(kdata);
  }, [sdata]);
  console.log(Category);
  return (
    <>
      <HelmetTitle title={"Detail"} />
      <Container
        maxW={"500px"}
        padding={"90px 20px 50px 20px"}
        bg={Mycolor.ContentWrap}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        {sLoading ? (
          <Box
            width={"100%"}
            height={"400px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Loading t={t} Mycolor={Mycolor}></Loading>
          </Box>
        ) : (
          kdata && (
            <>
              <Box
                width={"100%"}
                h={"200px"}
                marginTop={"30px"}
                borderRadius={"15px"}
                overflow={"hidden"}
              >
                <Image src={kdata?.firstimage} objectFit={"cover"}></Image>
              </Box>
              <VStack marginTop={"30px"} w={"100%"}>
                <Text fontSize={"24px"} fontWeight={600}>
                  {kdata?.title}
                </Text>
              </VStack>
            </>
          )
        )}
        <Header />

        <Footer />
      </Container>
    </>
  );
};
