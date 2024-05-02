import axios from "axios";

export const Code = {
  AreaCode: 6,
};
export const ServiceArea = {
  Korea: "KorService1",
  English: "EngService1",
};
export const ServiceName = {
  Search: "searchKeyword1",
  Detail: "detailCommon1",
};
const ServiceKey =
  "rttG9a1Dj2klKr79AV6w8N0hvz4BqTmbcw6NLbhRDJLCmOfQjIMRQ0NOaz2cc6D/Z0fl3rfx7qeufIHgca4qjA==";
const json = "json";
const instance = axios.create({
  baseURL: "https://apis.data.go.kr/B551011/",
  params: {
    MobileApp: "matzip",
    MobileOS: "AND",
    _type: json,
    serviceKey: ServiceKey,
    contentTypeId: 39,
  },
});
export const SearchKey = ({ queryKey }) => {
  const [MainService, Service, Keyword, pages, areaCode] = queryKey;
  return instance
    .get(
      `${MainService}/${Service}?keyword=${Keyword}&pageNo=${pages}&areaCode=${areaCode}`
    )
    .then((res) => res.data);
};
export const ShowDetail = ({ queryKey }) => {
  const [MainService, Service, contentid] = queryKey;
  return instance
    .get(
      `${MainService}/${Service}?contentId=${contentid}&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&addrinfoYN=Y&overviewYN=Y&mapinfoYN=Y`
    )
    .then((res) => res.data);
};
