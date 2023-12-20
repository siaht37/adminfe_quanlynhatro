import { Image, Td, Text, Tr, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function TablesTableRow(props) {
  const {
    maHopDong,
    tenLoaiPhong,
    soLuong,
    hinh,
    gia,
    dienTich,
    tang,
    tinhTrangPhong,
    conTrong,
    username,
    email,
    role,
    ngayLap,
    noiDung,
    tinhTrangHopDong,
    tenNguoiThue,
    sdt,
    diaChiThuongTru,
    cccd,
    isLast,
  } = props;

  const textColor = useColorModeValue("gray.500", "white");
  const titleColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Tr>
      <Td
        textAlign={"center"}
        minWidth={{ sm: "132px" }}
        pl="0px"
        borderColor={borderColor}
        borderBottom={isLast ? "none" : null}
      >
        <Text
          fontSize="md"
          fontWeight="bold"
          minWidth="100%"
        >
          {maHopDong}
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
          {tenLoaiPhong}
        </Text>
      </Td>
      <Td
        textAlign={"center"}
        minWidth={{ sm: "132px" }}
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
          {dienTich}
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
          {gia} VNĐ
        </Text>
      </Td>

      <Td
        minWidth={{ sm: "150px" }}
        borderColor={borderColor}
        borderBottom={isLast ? "none" : null}
      >
        <Image
          margin={"0 auto"}
          height={"100px"}
          src={`${process.env.REACT_APP_QUAN_LY_NHA_TRO}/${hinh}`}
        />
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
          {soLuong}
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
          {tinhTrangPhong}
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
          {conTrong}
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
          {username}
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
          {email}
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
          {role}
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
          {ngayLap}
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
          {noiDung}
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
          {tinhTrangHopDong}
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
          {tenNguoiThue}
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
          {sdt}
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
          {diaChiThuongTru}
        </Text>
      </Td>

      <Td
        maxWidth={"140px"}
        textAlign={"center"}
        borderColor={borderColor}
        borderBottom={isLast ? "none" : null}
      >
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {cccd}
        </Text>
      </Td>
    </Tr>
  );
}

export default TablesTableRow;
