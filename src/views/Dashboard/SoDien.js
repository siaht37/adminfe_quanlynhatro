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
import TablesTableRow from "components/SoDien/TablesTableRow";
import React, { useState, useEffect } from "react";
import { getAllSoDien, getAllSoNuoc } from "apis";

function Tables() {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const [soDienNuoc, setSoDienNuoc] = useState([]);
  const [isTab, setIsTab] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = isTab ? await getAllSoDien() : await getAllSoNuoc();
      setSoDienNuoc(data);
    };
    fetchData();
  }, [isTab]);

  return (
    <Flex
      position={"relative"}
      direction="column"
      pt={{ base: "120px", md: "75px" }}
    >
      <Flex paddingTop={4} background={"white"} flexDirection={"column"}>
        <Flex margin={"0 12px"} direction={"row"}>
          <Flex
            onClick={() =>
              setIsTab((tab) => {
                if (tab) {
                  return tab;
                } else {
                  return !tab;
                }
              })
            }
            p="6px 0px"
            flex={1}
            cursor={"pointer"}
            justifyContent={"center"}
          >
            <Text
              borderBottom={isTab ? ["1px", "solid"] : []}
              paddingRight={8}
              paddingLeft={8}
              paddingBottom={1}
              fontSize="xl"
              color={textColor}
              fontWeight="bold"
            >
              Số điện
            </Text>
          </Flex>
          <Flex
            onClick={() =>
              setIsTab((tab) => {
                if (!tab) {
                  return tab;
                } else {
                  return !tab;
                }
              })
            }
            p="6px 0px"
            flex={1}
            cursor={"pointer"}
            justifyContent={"center"}
          >
            <Text
              borderBottom={isTab ? [] : ["1px", "solid"]}
              paddingRight={8}
              paddingLeft={8}
              paddingBottom={1}
              fontSize="xl"
              color={textColor}
              fontWeight="bold"
            >
              Số nước
            </Text>
          </Flex>
        </Flex>

        <Card
          padding={"0 22px 22px 22px"}
          overflowX={{ sm: "scroll", xl: "hidden" }}
        >
          <CardBody>
            <Flex position={"relative"} height={"60vh"}>
              <Table variant="simple" color={textColor}>
                <Thead
                  minWidth={"1260px"}
                  position={"fixed"}
                  background={"white"}
                >
                  <Tr display={"flex"} my=".8rem" pl="0px" color="gray.400">
                    <Th
                      width={"25%"}
                      pl="0px"
                      borderColor={borderColor}
                      color="gray.400"
                      textAlign={"center"}
                    >
                      Mã phòng
                    </Th>
                    <Th
                      width={"25%"}
                      borderColor={borderColor}
                      color="gray.400"
                      textAlign={"center"}
                    >
                      Ngày nhập
                    </Th>
                    <Th
                      width={"25%"}
                      borderColor={borderColor}
                      color="gray.400"
                      textAlign={"center"}
                    >
                      Số lượng
                    </Th>
                    <Th
                      width={"25%"}
                      borderColor={borderColor}
                      color="gray.400"
                      textAlign={"center"}
                    >
                      Đơn giá
                    </Th>
                  </Tr>
                </Thead>
                <Tbody minWidth={"1260px"}>
                  {soDienNuoc.map((soDienNuoc, index, arr) => (
                    <TablesTableRow
                      maPhong={soDienNuoc.phong.maPhong}
                      ngayNhap={soDienNuoc.ngayNhap}
                      so={soDienNuoc.so}
                      donGia={soDienNuoc.donGia}
                      isLast={index === arr.length - 1 ? true : false}
                      key={soDienNuoc.maPhong}
                    />
                  ))}
                </Tbody>
              </Table>
            </Flex>
          </CardBody>
        </Card>
      </Flex>
    </Flex>
  );
}

export default Tables;
