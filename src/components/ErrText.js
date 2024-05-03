import { Text } from "@chakra-ui/react";

export const ErrText = ({ Texts }) => {
  return (
    <>
      <Text marginTop={2} fontSize={"14px"} color={"#E53E3E"}>
        {Texts}
      </Text>
    </>
  );
};
