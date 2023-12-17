import { Image, Td, Text, Tr, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import moment from "moment";

function TablesTableRow(props) {
  const {
    maTienIch,
    tenLoaiTienIch,
    tenTienIch,
    gia,
    tinhTrang,
    coSan,
    isLast,
  } = props;

  const textColor = useColorModeValue("gray.500", "white");
  const titleColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const width = 100 / 6;
  return (
    <Tr>
      <Td
        minWidth={{ sm: "250px" }}
        width={`${width}%`}
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
          {maTienIch}
        </Text>
      </Td>

      <Td
        width={`${width}%`}
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
          {tenLoaiTienIch}
        </Text>
      </Td>
      <Td
        width={`${width}%`}
        textAlign={"center"}
        pl="0px"
        borderColor={borderColor}
        borderBottom={isLast ? "none" : null}
      >
        <Text fontSize="md" color={titleColor} fontWeight="bold">
          {tenTienIch}
        </Text>
      </Td>
      <Td
        width={`${width}%`}
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
          {gia}
        </Text>
      </Td>
      <Td
        width={`${width}%`}
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
          {tinhTrang}
        </Text>
      </Td>
      <Td
        width={`${width}%`}
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
          {coSan ? "Có sẵn" : "Đã hết"}
        </Text>
      </Td>
    </Tr>
  );
}

export default TablesTableRow;
