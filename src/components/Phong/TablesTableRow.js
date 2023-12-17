import { Image, Td, Text, Tr, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function TablesTableRow(props) {
  const { maPhong, tenLoai, tang, tinhTrang, conTrong, isLast } = props;

  const textColor = useColorModeValue("gray.500", "white");
  const titleColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Tr>
      <Td
        textAlign={"center"}
        minWidth={{ sm: "100px" }}
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
        minWidth={{ sm: "200px" }}
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
          {tenLoai}
        </Text>
      </Td>
      <Td
        textAlign={"center"}
        minWidth={{ sm: "100px" }}
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
          {tang}
        </Text>
      </Td>
      <Td
        textAlign={"center"}
        minWidth={{ sm: "250px" }}
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
          {tinhTrang}
        </Text>
      </Td>

      <Td
        textAlign={"center"}
        borderColor={borderColor}
        borderBottom={isLast ? "none" : null}
      >
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {conTrong ? "Còn trống" : "Không trống"}
        </Text>
      </Td>
    </Tr>
  );
}

export default TablesTableRow;
