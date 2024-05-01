import {
  Box,
  Container,
  HStack,
  Icon,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { HelmetTitle } from "../../components/HelmetTitle";
import { Mycolor } from "../../theme";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { CircleFlag } from "react-circle-flags";
import { useState } from "react";
import { Code, SearchKey, ServiceArea, ServiceName } from "../../api";
import { useQuery } from "@tanstack/react-query";
const Menu = [
  { index: 0, title: "한식", keyword: "한", countryCode: "kr" },
  { index: 1, title: "중식", keyword: "반점", countryCode: "cn" },
  { index: 2, title: "일식", keyword: "스시", countryCode: "jp" },
  { index: 3, title: "양식", keyword: "한", countryCode: "us" },
];
export const Home = () => {
  const [currentMenu, SetMenu] = useState("한");
  const [currentIndex, SetIndex] = useState(1);

  const { data: mdata, isLoading: misLoading } = useQuery({
    queryKey: [
      ServiceArea.Korea,
      ServiceName.Search,
      currentMenu,
      1,
      Code.AreaCode,
    ],
    queryFn: SearchKey,
    enable: !!currentMenu,
  });
  console.log(mdata);
  return (
    <>
      <HelmetTitle title={"Home"} />
      <Container
        padding={"0 20px"}
        bg={Mycolor.ContentWrap}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Header />
        <Box
          marginTop={50}
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          textAlign={"left"}
          alignItems={"center"}
        >
          <Text width={"100%"} fontSize={24} fontWeight={600}>
            오늘은 어디로 가볼까요?
          </Text>
          <HStack spacing={"40px"} marginTop={10}>
            {Menu.map((data) => (
              <VStack
                key={data.index}
                cursor={"pointer"}
                onClick={() => {
                  SetMenu(data.keyword);
                  SetIndex(data.index);
                }}
              >
                <CircleFlag
                  countryCode={data.countryCode}
                  width={"60px"}
                  height={"60px"}
                  style={{
                    border:
                      currentIndex === data.index ? "2px solid white" : "none",
                    borderRadius: "50%",
                  }}
                />
                <Text>{data.title}</Text>
              </VStack>
            ))}
          </HStack>
          {misLoading ? (
            <Box
              width={"100%"}
              height={"400px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Spinner
                thickness="4px"
                speed="0.6s"
                emptyColor={Mycolor.body}
                color={Mycolor.Point}
                size="xl"
              ></Spinner>
            </Box>
          ) : (
            <></>
          )}
        </Box>
      </Container>
    </>
  );
};
