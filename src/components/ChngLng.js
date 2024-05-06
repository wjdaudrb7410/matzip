import { Button } from "@chakra-ui/react";
import { Trans, useTranslation } from "react-i18next";
import { Mycolor } from "../theme";

export const ChngLng = () => {
  const { t, i18n } = useTranslation();
  return (
    <Button
      marginTop={"20px"}
      color={Mycolor.Text}
      bg={Mycolor.Point}
      _hover={{ bg: Mycolor.ButtonHover }}
      onClick={() => {
        i18n.resolvedLanguage === "ko"
          ? i18n.changeLanguage("en")
          : i18n.changeLanguage("ko");
      }}
      h={"30px"}
    >
      <Trans i18nKey={"Button.Title"}></Trans>
    </Button>
  );
};
