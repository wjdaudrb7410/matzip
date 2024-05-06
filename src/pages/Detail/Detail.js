import {
  Badge,
  Box,
  Container,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { HelmetTitle } from "../../components/HelmetTitle";
import { Header } from "../../components/Header";
import { Mycolor, NO_IMG } from "../../theme";
import { useQuery } from "@tanstack/react-query";
import { ServiceArea, ServiceName, ShowDetail } from "../../api";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Loading } from "../../components/Loading";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import useKakaoLoader from "../../components/UsekakaoLoader";
import {
  Map,
  MapMarker,
  MapTypeControl,
  ZoomControl,
} from "react-kakao-maps-sdk";
export const Detail = () => {
  useKakaoLoader();
  const parser = new DOMParser();
  const { t, i18n } = useTranslation();
  const [kdata, SetData] = useState();
  const [currentMenu, SetMenu] = useState();
  const { id, Category } = useParams();

  const { data: sdata, isLoading: sLoading } = useQuery({
    queryKey: [ServiceArea.Korea, ServiceName.Detail, id],
    queryFn: ShowDetail,
    enabled: !!id,
  });
  useEffect(() => {
    SetData(sdata?.response?.body?.items?.item[0]);
  }, [sdata]);

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
        <Header />
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
                {kdata?.firstimage ? (
                  <Image
                    src={kdata?.firstimage}
                    objectFit={"cover"}
                    w={"100%"}
                    h={"200px"}
                  ></Image>
                ) : (
                  <Image
                    src={NO_IMG}
                    w={"100%"}
                    h={"200px"}
                    objectFit={"cover"}
                  ></Image>
                )}
              </Box>
              <VStack marginTop={"30px"} w={"100%"} spacing={4}>
                <Text fontSize={"24px"} fontWeight={600}>
                  {kdata?.title}
                </Text>
                <Badge colorScheme="orange">{Category}</Badge>
              </VStack>
              <HStack spacing={1} marginTop={"20px"}>
                <FaLocationDot color={Mycolor.Text} />
                <Text fontSize={"16px"} display={"flex"} alignItems={"center"}>
                  {kdata.addr1}
                </Text>
              </HStack>
              <Map
                id="map"
                center={{
                  // 지도의 중심좌표
                  lat: kdata?.mapy,
                  lng: kdata?.mapx,
                }}
                style={{
                  // 지도의 크기

                  borderRadius: "15px",
                  margin: "50px 0",
                  width: "100%",
                  height: "300px",
                }}
                level={3}
              >
                <MapMarker
                  position={{
                    lat: kdata?.mapy,
                    lng: kdata?.mapx,
                  }}
                />
                <MapTypeControl position={"TOPRIGHT"} />
                <ZoomControl position={"RIGHT"} />
              </Map>
              <Text padding={"0 30px"} opacity={0.7}>
                {kdata.overview.replace(/(<br>|<br\/>|<br \/>)/g, "\n")}
              </Text>
            </>
          )
        )}

        <Footer />
      </Container>
    </>
  );
};
