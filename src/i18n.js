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
          Search: {
            PlaceHolds: "음식점 이름을 입력하세요",
            Title: "다음에 대한 검색결과",
            IsData: "검색결과 없음",
          },
          Intro: {
            Title: "부산에 있는 맛집들로 떠나보세요",
            PlaceHolder: "시작하기",
          },
          Home: {
            Title: "오늘은 어디로 가볼까요?",
            SubTitle: "잘하는 맛집",
            Recommend: "당신을 위한 추천",
          },
          Detail: {},
          FoF: {},
          Loading: {
            Title: "맛집정보를 찾는중입니다",
          },
          Button: {
            Title: "언어 바꾸기",
          },
          Signin: {
            Title1: "로그인",
            Title2: "회원가입",
            SubTitle1: "아이디가 없으신가요?",
            SubTitle2: "이미 아이디가 있으신가요?",
            Email: "이메일",
            UserName: "아이디",
            PassWord: "비밀번호",
          },
          Errors: {
            KeyWord: "키워드를 입력하세요",
            Email: "이메일은 필수입니다",
            Username: "아이디는 필수입니다",
            Password: "비밀번호는 필수입니다",
            MinLen: "2자리 이상입니다",
          },
        },
      },
      en: {
        translation: {
          Search: {
            PlaceHolds: "Input Restaurants name",
            Title: "Search for",
            IsData: "No Search Data",
          },
          Intro: {
            Title: "Let’s go to delicious restaurants in Busan",
            PlaceHolder: "Let's Start",
          },
          Home: {
            Title: "Where should we go today?",
            SubTitle: "Restaurants",
            Recommend: "Recommendations for you",
          },
          Detail: {},
          FoF: {},
          Loading: {
            Title: "Looking for restaurant information",
          },
          Button: {
            Title: "Change Language",
          },
          Signin: {
            Title1: "Login",
            Title2: "Register",
            SubTitle1: "Don't Have account?",
            SubTitle2: "Already Have account?",
            Email: "Email",
            UserName: "Username",
            PassWord: "Password",
          },
          Errors: {
            KeyWord: "Input Keywords",
            Email: "Input Emails",
            Username: "Input Username",
            Password: "Input Password",
            MinLen: "There are 2 or more digits",
          },
        },
      },
    },
  });

export default i18n;
