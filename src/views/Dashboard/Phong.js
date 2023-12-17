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
import TablesProjectRow from "components/Phong/TablesProjectRow";
import TablesTableRow from "components/Phong/TablesTableRow";
import React, { useState, useEffect } from "react";
import { tablesProjectData, tablesTableData } from "variables/general";
import { getAllRoom } from "../../apis/Phong";

function Tables() {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const [phongs, setPhongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllRoom();
      setPhongs(data);
    };
    fetchData();
  }, []);

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Phòng
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
                  Ma phòng
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
                  Tầng
                </Th>
                <Th
                  borderColor={borderColor}
                  color="gray.400"
                  textAlign={"center"}
                >
                  Tình trạng
                </Th>
                <Th
                  borderColor={borderColor}
                  color="gray.400"
                  textAlign={"center"}
                >
                  Còn trống
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {phongs.map((phong, index, arr) => (
                <TablesTableRow
                  maPhong={phong.maPhong}
                  tenLoai={phong.loaiPhong.tenLoaiPhong}
                  tang={phong.tang}
                  tinhTrang={phong.tinhTrang}
                  conTrong={phong.conTrong}
                  isLast={index === arr.length - 1 ? true : false}
                  key={phong.maPhong}
                />
              ))}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Tables;
