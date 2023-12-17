import { Image, Td, Text, Tr, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import moment from "moment";

function TablesTableRow(props) {
  const { maPhong, ngayNhap, so, donGia, isLast } = props;

  const textColor = useColorModeValue("gray.500", "white");
  const titleColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Tr>
      <Td
        width={"25%"}
        textAlign={"center"}
        pl="0px"
        borderColor={borderColor}
        borderBottom={isLast ? "none" : null}
      >
        <Text
          fontSize="md"
          color={titleColor}
          fontWeight="bold"
          minWidth="100%"
        >
          {maPhong}
        </Text>
      </Td>

      <Td
        width={"25%"}
        textAlign={"center"}
        pl="0px"
        borderColor={borderColor}
        borderBottom={isLast ? "none" : null}
      >
        <Text
          fontSize="md"
          color={titleColor}
          fontWeight="bold"
          minWidth="100%"
        >
          {moment(ngayNhap).format("DD MM YYYY")}
        </Text>
      </Td>
      <Td
        width={"25%"}
        textAlign={"center"}
        pl="0px"
        borderColor={borderColor}
        borderBottom={isLast ? "none" : null}
      >
        <Text fontSize="md" color={titleColor} fontWeight="bold">
          {so}
        </Text>
      </Td>
      <Td
        width={"25%"}
        textAlign={"center"}
        borderColor={borderColor}
        borderBottom={isLast ? "none" : null}
      >
        <Text
          fontSize="md"
          color={titleColor}
          fontWeight="bold"
          minWidth="100%"
        >
          {donGia}
        </Text>
      </Td>
    </Tr>
  );
}

export default TablesTableRow;
