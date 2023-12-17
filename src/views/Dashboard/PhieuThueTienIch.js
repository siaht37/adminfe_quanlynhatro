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
import TablesProjectRow from "components/LoaiPhong/TablesProjectRow";
import TablesTableRow from "components/LoaiPhong/TablesTableRow";
import React, { useState, useEffect } from "react";
import { tablesProjectData, tablesTableData } from "variables/general";
import { getAllPhieuThueTienIch } from "../../apis";

function Tables() {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const [LoaiPhongs, setLoaiLoaiPhong] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPhieuThueTienIch();
      setLoaiLoaiPhong(data);
    };
    fetchData();
  }, []);

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Phiêu thuê tiện ích
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
                  Mã phiếu thuê
                </Th>
                <Th
                  borderColor={borderColor}
                  color="gray.400"
                  textAlign={"center"}
                >
                  Tên đăng nhập
                </Th>
                <Th
                  borderColor={borderColor}
                  color="gray.400"
                  textAlign={"center"}
                >
                  Ngày lập
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
      <Card my="22px" overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Flex direction="column">
            <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
              Projects Table
            </Text>
          </Flex>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px">
                <Th pl="0px" color="gray.400" borderColor={borderColor}>
                  Companies
                </Th>
                <Th color="gray.400" borderColor={borderColor}>
                  Budget
                </Th>
                <Th color="gray.400" borderColor={borderColor}>
                  Status
                </Th>
                <Th color="gray.400" borderColor={borderColor}>
                  Completion
                </Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesProjectData.map((row, index, arr) => {
                return (
                  <TablesProjectRow
                    name={row.name}
                    logo={row.logo}
                    status={row.status}
                    budget={row.budget}
                    progression={row.progression}
                    isLast={index === arr.length - 1 ? true : false}
                    key={index}
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
