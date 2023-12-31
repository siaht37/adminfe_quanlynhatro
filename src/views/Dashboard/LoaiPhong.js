// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesTableRow from "components/LoaiPhong/TablesTableRow";
import React, { useState, useEffect } from "react";
import { getAllLoaiPhong } from "apis";

function Tables() {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const [LoaiPhongs, setLoaiLoaiPhong] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllLoaiPhong();
      setLoaiLoaiPhong(data);
    };
    fetchData();
  }, []);

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Loai phòng
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th
                  pl="0px"
                  borderColor={borderColor}
                  color="gray.400"
                  textAlign={"center"}
                >
                  Ma
                </Th>
                <Th
                  borderColor={borderColor}
                  color="gray.400"
                  textAlign={"center"}
                >
                  Tên loại phòng
                </Th>
                <Th
                  borderColor={borderColor}
                  color="gray.400"
                  textAlign={"center"}
                >
                  Dien tich
                </Th>
                <Th
                  borderColor={borderColor}
                  color="gray.400"
                  textAlign={"center"}
                >
                  Gia
                </Th>
                <Th
                  borderColor={borderColor}
                  color="gray.400"
                  textAlign={"center"}
                >
                  Hình
                </Th>
                <Th
                  borderColor={borderColor}
                  color="gray.400"
                  textAlign={"center"}
                >
                  Số lượng
                </Th>
                <Th borderColor={borderColor}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {LoaiPhongs.map((loaiPhong, index, arr) => {
                return (
                  <TablesTableRow
                    maLoaiPhong={loaiPhong.maLoaiPhong}
                    tenLoaiPhong={loaiPhong.tenLoaiPhong}
                    soLuong={loaiPhong.soLuong}
                    hinh={loaiPhong.hinh}
                    gia={loaiPhong.gia}
                    dienTich={loaiPhong.dienTich}
                    isLast={index === arr.length - 1 ? true : false}
                    key={loaiPhong.maLoaiPhong}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Tables;
