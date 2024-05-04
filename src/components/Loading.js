import { Spinner, Text, VStack } from "@chakra-ui/react";
import { Trans } from "react-i18next";

export const Loading = ({ t, Mycolor }) => {
  return (
    <>
      <VStack>
        <Spinner
          thickness="4px"
          speed="0.6s"
          emptyColor={Mycolor.body}
          color={Mycolor.Point}
          size="xl"
        ></Spinner>
        <Text fontSize={"20px"} marginTop={"5px"}>
          {t("Loading.Title")}
        </Text>
      </VStack>
    </>
  );
};
