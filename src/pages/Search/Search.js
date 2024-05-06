import {
  Box,
  Container,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Mycolor, NO_IMG } from "../../theme";
import { useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import { HelmetTitle } from "../../components/HelmetTitle";
import { ErrText } from "../../components/ErrText";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import { Footer } from "../../components/Footer";
import { Code, SearchKey, ServiceArea, ServiceName } from "../../api";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../components/Loading";
import { SearchIcon } from "@chakra-ui/icons";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const Img_data =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMs1S8IvcNs5b5X81aFE3TBZJjvkLK5N1KA&s";
export const Search = () => {
  const nav = useNavigate();
  const [isLike, SetLike] = useState();
  const { t, i18n } = useTranslation();
  const { keyword } = useParams();
  const [words, SetWord] = useState(keyword);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    SetWord(data.Keyword);
  };
  const { data: kdata, isLoading: kLoading } = useQuery({
    queryKey: [ServiceArea.Korea, ServiceName.Search, words, 1, Code.AreaCode],
    queryFn: SearchKey,
    enable: !!words,
  });
  useEffect(() => {
    const data = kdata?.response?.body?.items?.item;
    console.log(data);
    if (data) {
      SetLike(
        data.map((rsl) => ({
          id: rsl.contentid,
          trues: false,
        }))
      );
    } else {
      return;
    }
  }, [kdata]);
  useEffect(() => {
    SetWord(keyword);
  }, [keyword]);
  const ChangeHeart = (id) => {
    SetLike(
      isLike.map((data) =>
        data.id === id ? { ...data, trues: !data.trues } : data
      )
    );
    console.log(isLike);
  };
  return (
    <>
      <HelmetTitle title={"Search"} />
      <Container
        maxW={"500px"}
        padding={"90px 20px 50px 20px"}
        bg={Mycolor.ContentWrap}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Header></Header>
        <Box
          as="form"
          w={"100%"}
          margin={"30px 0"}
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputGroup>
            <InputLeftElement>
              <SearchIcon color={"#718096"} />
            </InputLeftElement>
            <Input
              placeholder={t("Search.PlaceHolds")}
              {...register("Keyword", { required: t("Errors.KeyWord") })}
            />
          </InputGroup>

          <ErrText Texts={errors?.Keyword?.message}></ErrText>
        </Box>
        <Text alignSelf={"start"} fontWeight={600} fontSize={"24px"}>
          <Trans i18nKey={"Search.Title"} /> "{words}"
        </Text>
        {kLoading ? (
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
          <>
            {kdata?.response?.body?.items ? (
              <>
                <VStack marginTop={"20px"} w={"100%"} spacing={3}>
                  {kdata?.response?.body?.items?.item.map((rsl) => (
                    <Box
                      key={rsl.contentid}
                      w={"100%"}
                      h={"120px"}
                      p={"5px 10px"}
                      bg={Mycolor.DataCover}
                      borderRadius={"15px"}
                    >
                      <HStack
                        h={"100%"}
                        spacing={5}
                        justifyContent={"space-between"}
                      >
                        {rsl.firstimage2 ? (
                          <Box>
                            <Link to={`/detail/${rsl.contentid}/${words}`}>
                              <Image
                                w={"60px"}
                                h={"60px"}
                                src={rsl.firstimage2}
                                borderRadius={"50%"}
                              />
                            </Link>
                          </Box>
                        ) : (
                          <Box>
                            <Link to={`/detail/${rsl.contentid}/${words}`}>
                              <Image
                                w={"60px"}
                                h={"60px"}
                                src={NO_IMG}
                                borderRadius={"50%"}
                              />
                            </Link>
                          </Box>
                        )}
                        <VStack
                          spacing={0}
                          w={"240px"}
                          display={"flex"}
                          alignItems={"flex-start"}
                          marginRight={"60px"}
                        >
                          <Text fontSize={"18px"}>{rsl.title}</Text>
                          <HStack fontSize={"14px"} spacing={1}>
                            <FaLocationDot color={Mycolor.Text} opacity={0.7} />
                            <Text opacity={0.7}>{rsl.addr1}</Text>
                          </HStack>
                        </VStack>
                        {isLike && (
                          <>
                            {isLike.filter((data) => data.id === rsl.contentid)
                              .trues ? (
                              <>
                                <Box
                                  cursor={"pointer"}
                                  justifySelf={"flex-end"}
                                  w={"24px"}
                                  h={"24px"}
                                  onClick={() => {
                                    ChangeHeart(rsl.contentid);
                                  }}
                                >
                                  <FaHeart
                                    color={Mycolor.HeartFill}
                                    size={"24px"}
                                  ></FaHeart>
                                </Box>
                              </>
                            ) : (
                              <>
                                <Box
                                  cursor={"pointer"}
                                  w={"24px"}
                                  h={"24px"}
                                  onClick={() => {
                                    ChangeHeart(rsl.contentid);
                                  }}
                                >
                                  <FaRegHeart
                                    color={Mycolor.Text}
                                    size={"24px"}
                                  ></FaRegHeart>
                                </Box>
                              </>
                            )}
                          </>
                        )}
                      </HStack>
                    </Box>
                  ))}
                </VStack>
              </>
            ) : (
              <Box
                width={"100%"}
                height={"400px"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Text fontSize={"24px"} opacity={0.7}>
                  <Trans i18nKey={"Search.IsData"}></Trans>
                </Text>
              </Box>
            )}
          </>
        )}
        <Footer />
      </Container>
    </>
  );
};
