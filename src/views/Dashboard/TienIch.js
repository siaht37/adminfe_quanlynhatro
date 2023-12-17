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
import TablesTableRow from "components/TienIch/TablesTableRow";
import React, { useState, useEffect } from "react";
import { getAllTienIch } from "../../apis";

function Tables() {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const [tienIchs, setTienIchs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllTienIch();
      setTienIchs(data);
    };
    fetchData();
  }, []);

  const width = 100/6

  return (
    <Flex
      position={"relative"}
      direction="column"
      pt={{ base: "120px", md: "75px" }}
    >
      <Flex background={"white"} flexDirection={"column"}>
        <Card
          padding={"0px 22px 60px 22px"}
          overflowX={{ sm: "scroll", xl: "hidden" }}
        >
          <CardBody>
            <Flex position={"relative"} height={"60vh"}>
              <Table variant="simple" color={textColor}
              >
                <Thead
                  minWidth={"1260px"}
                  position={"fixed"}
                  background={"white"}
                >
                  <Tr display={"flex"} my=".8rem" pl="0px" color="gray.400"
                  >
                    <Th
                      width={`${width}%`}
                      pl="0px"
                      borderColor={borderColor}
                      color="gray.400"
                      textAlign={"center"}
                    >
                      Mã tiện ích
                    </Th>
                    <Th
                      width={`${width}%`}
                      borderColor={borderColor}
                      color="gray.400"
                      textAlign={"center"}
                    >
                      Tên loại tiện ích
                    </Th>
                    <Th
                      width={`${width}%`}
                      borderColor={borderColor}
                      color="gray.400"
                      textAlign={"center"}
                    >
                      Tên tiện ích
                    </Th>
                    <Th
                      width={`${width}%`}
                      borderColor={borderColor}
                      color="gray.400"
                      textAlign={"center"}
                    >
                      Giá
                    </Th>
                    <Th
                      width={`${width}%`}
                      borderColor={borderColor}
                      color="gray.400"
                      textAlign={"center"}
                    >
                      Tình trạng
                    </Th>
                    <Th
                      width={`${width}%`}
                      borderColor={borderColor}
                      color="gray.400"
                      textAlign={"center"}
                    >
                      Trạng thái thuê
                    </Th>
                  </Tr>
                </Thead>
                <Tbody minWidth={"1260px"}
                >
                  {tienIchs.map((tienIch, index, arr) => (
                    <TablesTableRow
                      maTienIch={tienIch.maTienIch}
                      tenLoaiTienIch={tienIch.loaiTienIch.tenLoaiTienIch}
                      tenTienIch={tienIch.tenTienIch}
                      gia={tienIch.gia}
                      tinhTrang={tienIch.tinhTrang}
                      coSan={tienIch.coSan}
                      isLast={index === arr.length - 1 ? true : false}
                      key={tienIch.maPhong}
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
