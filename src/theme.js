import { extendTheme } from "@chakra-ui/react";

import "typeface-notosans-kor";
import i18n from "./i18n";

export const NO_IMG =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIol-IqUGeg3Q_Jr-iz9hjXbkOONSZqkYBLg&s";
export const Mycolor = {
  body: "#171923",
  Point: "#ED8936",
  ContentWrap: "#1A202C",
  Text: "#eee",
  ButtonHover: "#DD6B20",
  HeaderButton: "#A0AEC0",
  HeaderButtonHover: "#4A5568",
  DataCover: "#171923",
  HeaderBg: "#1a202cd9",
};
const theme = extendTheme({
  fonts: {
    heading: '"Noto Sans KR","sans-serif"',
    body: '"Noto Sans KR","sans-serif"',
  },
  styles: {
    global: {
      body: {
        bg: Mycolor.body,
      },
      p: {
        color: Mycolor.Text,
        letterSpacing: "tight",
        textTransform: i18n.language === "ko" ? "none" : "uppercase",
      },
      input: {
        color: Mycolor.Text,
      },
      button: {
        textTransform: i18n.language === "ko" ? "none" : "uppercase",
      },
    },
  },
});
export default theme;
