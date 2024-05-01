import { extendTheme } from "@chakra-ui/react";

import "typeface-notosans-kor";

export const Mycolor = {
  body: "#171923",
  Point: "#ED8936",
  ContentWrap: "#1A202C",
  Text: "#eee",
  ButtonHover: "#DD6B20",
  HeaderButton: "#A0AEC0",
  HeaderButtonHover: "#4A5568",
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
      },
    },
  },
});
export default theme;
