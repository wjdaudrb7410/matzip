import { Text } from "@chakra-ui/react";

export const ErrText = ({ Texts }) => {
  return (
    <>
      <Text
        marginTop={1}
        fontSize={"14px"}
        color={"#E53E3E"}
        display={Texts ? "block" : "none"}
        w={"100%"}
      >
        {Texts}
      </Text>
    </>
  );
};
