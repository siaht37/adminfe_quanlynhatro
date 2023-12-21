import {
  Button,
  Image,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useCallback } from "react";
import moment from "moment";

function TablesTableRow(props) {
  const { maPhong, ngayLap, trangThai, soTien, onShowModal, maHoaDonHangThang, isLast } = props;

  const titleColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Tr>
      <Td
        minWidth={{ sm: "250px" }}
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
          {moment(ngayLap).format("DD-MM-YYYY")}
        </Text>
      </Td>
      <Td
        textAlign={"center"}
        pl="0px"
        borderColor={borderColor}
        borderBottom={isLast ? "none" : null}
      >
        <Text fontSize="md" color={titleColor} fontWeight="bold">
          {trangThai}
        </Text>
      </Td>
      <Td
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
          {soTien}
        </Text>
      </Td>
      <Td
        textAlign={"center"}
        borderColor={borderColor}
        borderBottom={isLast ? "none" : null}
      >
        <Button
          position={"unset"}
          onClick={() => onShowModal(maHoaDonHangThang)}
        >
          Xem chi tiết
        </Button>
      </Td>
    </Tr>
  );
}

export default TablesTableRow;
