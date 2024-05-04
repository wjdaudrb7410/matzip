import {
  Box,
  Container,
  HStack,
  Icon,
  Image,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../components/SlickStyle.css";
import { Header } from "../../components/Header";
import { HelmetTitle } from "../../components/HelmetTitle";
import { Mycolor, NO_IMG } from "../../theme";

import { CircleFlag } from "react-circle-flags";
import { useCallback, useEffect, useState } from "react";
import { Code, SearchKey, ServiceArea, ServiceName } from "../../api";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { Footer } from "../../components/Footer";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import { Loading } from "../../components/Loading";

const RandomMenu = ["국수", "치킨", "낙지"];
const Menu = [
  { index: 0, title: "한식", keyword: "한", countryCode: "kr" },
  { index: 1, title: "중식", keyword: "반점", countryCode: "cn" },
  { index: 2, title: "일식", keyword: "스시", countryCode: "jp" },
  { index: 3, title: "양식", keyword: "한", countryCode: "us" },
];
const Recommend = [
  { title: "국밥", index: 101 },
  { title: "고기", index: 102 },
  { title: "회", index: 103 },
];
export const Home = () => {
  const nav = useNavigate();
  const { t, i18n } = useTranslation();
  const [dragging, setDragging] = useState(false);
  const [currentLng, SetLng] = useState(
    i18n.resolvedLanguage === "ko" ? ServiceArea.Korea : ServiceArea.English
  );
  const [currentMenu, SetMenu] = useState("한");
  const [currentIndex, SetIndex] = useState(0);
  const [currentCount, SetCount] = useState("한식");
  const [recmData, SetRData] = useState();
  const [MenuData, SetData] = useState();
  //UseQuery
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
  const { data: r1data, isLoading: r1Loading } = useQuery({
    queryKey: [
      ServiceArea.Korea,
      ServiceName.Search,
      Recommend[0].title,
      1,
      Code.AreaCode,
    ],
    queryFn: SearchKey,
  });
  const { data: r2data, isLoading: r2Loading } = useQuery({
    queryKey: [
      ServiceArea.Korea,
      ServiceName.Search,
      Recommend[1].title,
      1,
      Code.AreaCode,
    ],
    queryFn: SearchKey,
  });
  const { data: r3data, isLoading: r3Loading } = useQuery({
    queryKey: [
      ServiceArea.Korea,
      ServiceName.Search,
      Recommend[2].title,
      1,
      Code.AreaCode,
    ],
    queryFn: SearchKey,
  });
  //UseEffect
  useEffect(() => {
    SetData(mdata?.response?.body);
  }, [mdata]);
  useEffect(() => {
    SetRData([
      { ...r1data?.response?.body, ...Recommend[0] },
      { ...r2data?.response?.body, ...Recommend[1] },
      { ...r3data?.response?.body, ...Recommend[2] },
    ]);
  }, [r1data, r2data, r3data]);
  //Function
  const Random = () => {
    const randomIndex = Math.floor(Math.random() * RandomMenu.length);
    SetMenu(RandomMenu[randomIndex]);
    SetCount(RandomMenu[randomIndex]);
  };
  const handleBeforeChange = useCallback(() => {
    setDragging(true);
  }, [setDragging]);

  const handleAfterChange = useCallback(() => {
    setDragging(false);
  }, [setDragging]);
  //Setting
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
  };
  return (
    <>
      <HelmetTitle title={"Home"} />
      <Container
        maxW={"500px"}
        padding={"90px 20px 50px 20px"}
        bg={Mycolor.ContentWrap}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Header />
        {/*컨텐츠영역 */}
        <Box
          marginTop={30}
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
                  SetCount(data.title);
                }}
              >
                <CircleFlag
                  countryCode={data.countryCode}
                  width={"60px"}
                  height={"60px"}
                  style={{
                    border:
                      currentIndex === data.index
                        ? `2px solid ${Mycolor.Point}`
                        : "none",
                    borderRadius: "50%",
                  }}
                />
                <Text>{data.title}</Text>
              </VStack>
            ))}
            <VStack cursor={"pointer"}>
              <Box
                w={{ base: "45px", sm: "60px" }}
                h={{ base: "45px", sm: "60px" }}
              >
                <Icon
                  w={"100%"}
                  h={"100%"}
                  as={QuestionOutlineIcon}
                  color={Mycolor.Text}
                  style={{
                    border:
                      currentIndex === 5
                        ? `2px solid ${Mycolor.Point}`
                        : "none",
                    borderRadius: "50%",
                  }}
                  onClick={() => {
                    SetIndex(5);
                    Random();
                  }}
                />
              </Box>

              <Text>랜덤</Text>
            </VStack>
          </HStack>

          {misLoading ? (
            <Box
              width={"100%"}
              height={"400px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Loading t={t} Mycolor={Mycolor} />
            </Box>
          ) : (
            MenuData && (
              <>
                <Box width={"100%"} marginTop={"20px"}>
                  <Text fontSize={20}>{currentCount} 잘하는 맛집</Text>

                  <VStack spacing={"30px"} marginTop={"20px"}>
                    {MenuData?.items?.item.map((data) => (
                      <Box
                        w={"100%"}
                        h={"300px"}
                        key={data.contentid}
                        bg={Mycolor.DataCover}
                        borderRadius={12}
                        overflow={"hidden"}
                      >
                        <Link to={`/detail/${data.contentid}/${currentCount}`}>
                          {data?.firstimage ? (
                            <Image
                              w={"100%"}
                              h={"180px"}
                              src={data.firstimage}
                              alt={data.title}
                              objectFit={"cover"}
                            />
                          ) : (
                            <Image
                              w={"100%"}
                              h={"180px"}
                              src={NO_IMG}
                              alt={data.title}
                              objectFit={"cover"}
                            />
                          )}
                          <VStack
                            spacing={3}
                            padding={"0 10px"}
                            alignItems={"start"}
                            h={"120px"}
                            justifyContent={"center"}
                            fontSize={"14px"}
                          >
                            <Text fontSize={"16px"}>{data.title}</Text>
                            <Text opacity={0.7}>{data.addr1}</Text>
                          </VStack>
                        </Link>
                      </Box>
                    ))}
                  </VStack>
                </Box>
                {recmData && (
                  <>
                    <Box marginTop={50} w={"100%"} overflow={"hidden"}>
                      <Text>당신을 위한 추천</Text>
                      {recmData?.map((data) => (
                        <VStack
                          key={data.index}
                          alignItems={"flex-start"}
                          marginTop={"30px"}
                        >
                          <Text>{data.title}</Text>
                          <Box
                            w={"100%"}
                            h={"200px"}
                            marginTop={"20px"}
                            className="slider-container"
                          >
                            <Slider {...settings}>
                              {data?.items?.item.map((data) => (
                                <Box
                                  cursor={"pointer"}
                                  w={"150px"}
                                  h={"200px"}
                                  key={data.contentid}
                                  borderRadius={"15px"}
                                  overflow={"hidden"}
                                  bg={Mycolor.DataCover}
                                  fontSize={"16px"}
                                  fontWeight={300}
                                  onClick={(e) => {
                                    if (dragging) {
                                      e.stopPropagation();
                                      return;
                                    } else {
                                      nav(
                                        `/Detail/${data.contentid}/${currentCount}`
                                      );
                                    }
                                  }}
                                >
                                  {data?.firstimage ? (
                                    <>
                                      <Image
                                        src={data.firstimage}
                                        width={"100%"}
                                        h={"120px"}
                                        objectFit={"cover"}
                                      ></Image>
                                    </>
                                  ) : (
                                    <>
                                      <Image
                                        src={NO_IMG}
                                        width={"100%"}
                                        h={"120px"}
                                        objectFit={"cover"}
                                      ></Image>
                                    </>
                                  )}
                                  <VStack
                                    spacing={1}
                                    padding={"0 10px"}
                                    alignItems={"start"}
                                    h={"80px"}
                                    justifyContent={"center"}
                                  >
                                    <Text>{data.title}</Text>
                                  </VStack>
                                </Box>
                              ))}
                            </Slider>
                          </Box>
                        </VStack>
                      ))}
                    </Box>
                  </>
                )}
              </>
            )
          )}
        </Box>
        {/*컨텐츠영역 */}
        <Footer></Footer>
      </Container>
    </>
  );
};
