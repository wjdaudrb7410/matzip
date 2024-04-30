import axios from "axios";

const ServiceName = {
  Search: "searchKeyword1",
  GetFoodKr: "getFoodKr",
  GetFoodEn: "getFoodEn",
};
const ServiceKey =
  "rttG9a1Dj2klKr79AV6w8N0hvz4BqTmbcw6NLbhRDJLCmOfQjIMRQ0NOaz2cc6D/Z0fl3rfx7qeufIHgca4qjA==";
const json = "json";
const s_instance = axios.create({
  baseURL: "https://apis.data.go.kr/B551011/KorService1/",
  params: {
    MobileApp: "matzip",
    MobileOS: "AND",
    _type: json,
    serviceKey: ServiceKey,
  },
});
const se_instance = axios.create({
  baseURL: "https://apis.data.go.kr/B551011/EngService1/",
  params: {
    MobileApp: "matzip",
    MobileOS: "AND",
    _type: json,
    serviceKey: ServiceKey,
  },
});
const mat_instance = axios.create({
  baseURL: "https://apis.data.go.kr/6260000/FoodService/",
  params: {
    serviceKey: ServiceKey,
    resultType: json,
  },
});
//국문키워드 서치
export const SearchKey = ({ queryKey }) => {
  const [Service, Keyword, pages] = queryKey;

  return s_instance
    .get(`${Service}?keyword=${Keyword}&pageNo=${pages}`)
    .then((res) => res.data);
};
//영문키워드 서치
export const E_SearchKey = ({ queryKey }) => {
  const [Service, Keyword, pages] = queryKey;

  return se_instance
    .get(`${Service}?keyword=${Keyword}&pageNo=${pages}`)
    .then((res) => res.data);
};

export const MatData = ({ queryKey }) => {
  const [Service, pageNo, numOfRows] = queryKey;
  return mat_instance
    .get(`${Service}?pageNo=${pageNo}&numOfRows=${numOfRows}`)
    .then((res) => res.data);
};
