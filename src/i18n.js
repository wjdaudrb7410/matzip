import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguaeDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguaeDetector)
  .use(initReactI18next)
  .init({
    // for all options read: https://www.i18next.com/overview/configuration-options
    debug: true,
    fallbackLng: "ko",
    interpoolation: {
      excapeValue: false,
    },
    resources: {
      ko: {
        translation: {
          Search: {},
          Intro: {
            Title: "부산에 있는 맛집들로 떠나보세요",
            PlaceHolder: "시작하기",
          },
          Home: {},
          Detail: {},
          FoF: {},
          Loading: {
            Title: "맛집정보를 찾는중입니다",
          },
        },
      },
      en: {
        translation: {
          Search: {},
          Intro: {
            Title: "Let’s go to delicious restaurants in Busan",
            PlaceHolder: "Let's Start",
          },
          Home: {},
          Detail: {},
          FoF: {},
          Loading: {
            Title: "Looking for restaurant information",
          },
        },
      },
    },
  });

export default i18n;
