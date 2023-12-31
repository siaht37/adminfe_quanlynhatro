// Chakra imports
import {
  Button,
  CloseButton,
  Flex,
  Select,
  Stack,
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
import TablesTableRow from "components/SoDienSoNuoc/TablesTableRow";
import { useState, useEffect, useCallback } from "react";
import {
  getAllSoDien,
  getAllSoNuoc,
  getAllRoom,
  createSoDien,
  createSoNuoc,
} from "../../apis";
import { uniqueDates } from "utils";

function SoDienSoNuoc() {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const [soDienNuoc, setSoDienNuoc] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isTab, setIsTab] = useState(true);
  const [phongs, setPhongs] = useState([]);
  const [count, setCount] = useState(0);
  const [roomId, setRoomId] = useState();
  const [roomIdFilter, setRoomIdFilter] = useState();
  const [dateFilter, setDateFilter] = useState();
  const [search, setSearch] = useState([]);
  const fetchData = async () => {
    const data = isTab ? await getAllSoDien() : await getAllSoNuoc();
    setSoDienNuoc(data);
  };

  const fetchDataRoom = async () => {
    const data = await getAllRoom();
    setPhongs(data);
  };

  useEffect(() => {
    fetchData();
    fetchDataRoom();
  }, []);

  const handleShowModal = useCallback(() => {
    //true => create dien
    //false => create nuoc
    setShowModal(true);
  }, [isTab]);

  const handleCreateDienNuoc = useCallback(async () => {
    if (!roomId) {
      return;
    }
    if (isTab) {
      //so dien
      const data = await createSoDien(Number(roomId), Number(count));
      if (data) {
        setSoDienNuoc((state) => {
          const newState = [...state];
          newState.push(data);
          return newState;
        });
      }
    } else {
      const data = await createSoNuoc(Number(roomId), Number(count));
      if (data) {
        setSoDienNuoc((state) => {
          const newState = [...state];
          newState.push(data);
          return newState;
        });
      }
    }
    setShowModal(false);
  }, [isTab, roomId, count]);

  const handleFilter = useCallback(() => {
    console.log(roomIdFilter, dateFilter);
    if (!roomIdFilter && !dateFilter) {
      return;
    }
    const data = soDienNuoc.filter((checkData) => {
      const checkDate =
        new Date(checkData.ngayNhap).getMonth() + 1 ===
          new Date(dateFilter).getMonth() + 1 &&
        new Date(checkData.ngayNhap).getFullYear() ===
          new Date(dateFilter).getFullYear();
      const checkRoom = checkData.phong.maPhong === Number(roomIdFilter);
      return checkDate || checkRoom;
    });
    setSearch(data);
  }, [roomIdFilter, dateFilter]);

  useEffect(() => {
    console.log(search);
  }, [search]);
  return (
    <Flex
      position={"relative"}
      direction="column"
      pt={{ base: "120px", md: "75px" }}
    >
      {showModal ? (
        <Flex
          paddingTop={4}
          background={"white"}
          flexDirection={"column"}
          minHeight={"60vh"}
          backgroundColor={"#ccc"}
        >
          <Flex
            backgroundColor={"#fff"}
            minWidth={"500px"}
            margin={"0 auto"}
            direction={"column"}
          >
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"100%"}
            >
              <Text> {isTab ? "Tạo số điện" : "Tạo số nước"}</Text>
              <Stack spacing={6} onClick={() => setShowModal(false)}>
                <CloseButton size="lg" />
              </Stack>
            </Flex>
            <Flex
              direction={"column"}
              gap={"16px"}
              width={"400px"}
              margin={"0 auto"}
            >
              <Flex direction={"row"} alignItems={"center"}>
                <label style={{ width: "200px" }} htmlFor="phong">
                  Chọn phòng
                </label>
                <Select
                  onChange={(e) => setRoomId(e.target.value)}
                  id="phong"
                  flex={1}
                  marginTop={"12px"}
                  placeholder="Chọn phòng"
                >
                  {phongs
                    .filter((phong) => !phong.conTrong)
                    .map((phong) => (
                      <option key={phong.maPhong} value={phong.maPhong}>
                        {phong.maPhong}
                      </option>
                    ))}
                </Select>
              </Flex>
              <Flex>
                <label htmlFor="so" style={{ width: "200px" }}>
                  Nhập {isTab ? "số điện" : "số nước"}
                </label>
                <input
                  id="so"
                  style={{ flex: 1 }}
                  onChange={(e) => {
                    if (e.target.value >= 0) {
                      setCount(e.target.value);
                    }
                  }}
                  type="number"
                  value={count}
                  min={0}
                />
              </Flex>
              <Flex>
                <label style={{ width: "200px" }}>Giá: </label>
                <input value={"3.500 VNĐ"} disabled />
              </Flex>
              <Button
                onClick={handleCreateDienNuoc}
                width={"fit-content"}
                margin={"12px auto"}
              >
                Thêm
              </Button>
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Flex paddingTop={4} background={"white"} flexDirection={"column"}>
          <Button
            colorScheme={"blue"}
            width={"fit-content"}
            marginLeft={"40px"}
            onClick={handleShowModal}
          >
            {!isTab ? "Tạo số nước" : "Tạo số điiện"}
          </Button>

          <Flex>
            <Select
              onChange={(e) => setRoomIdFilter(e.target.value)}
              flex={1}
              marginTop={"12px"}
              placeholder="Chọn phòng"
            >
              {phongs
                .filter((phong) =>
                  soDienNuoc.find((p) => p.phong.maPhong === phong.maPhong)
                )
                .map((phong) => (
                  <option key={phong.maPhong} value={phong.maPhong}>
                    {phong.maPhong}
                  </option>
                ))}
            </Select>

            <Select
              onChange={(e) => setDateFilter(e.target.value)}
              flex={1}
              marginTop={"12px"}
              placeholder="Chọn tháng, năm"
            >
              {uniqueDates(soDienNuoc.map((so) => so.ngayNhap)).map(
                (so, index) => {
                  return (
                    <option key={index} value={so}>
                      {`${new Date(so).getMonth() + 1} - ${new Date(
                        so
                      ).getFullYear()}`}
                    </option>
                  );
                }
              )}
            </Select>

            <Button onClick={handleFilter}>Lọc</Button>
          </Flex>

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
              <Flex height={"60vh"}>
                <Table
                  style={{
                    maxHeight: "60vh",
                    overflow: "auto",
                    width: "100%",
                    tableLayout: "fixed",
                    borderCollapse: "collapse",
                  }}
                  variant="simple"
                  color={textColor}
                >
                  <Thead position={"sticky"} top={0} background={"white"}>
                    <Tr my=".8rem" color="gray.400">
                      <Th
                        pl="0px"
                        borderColor={borderColor}
                        color="gray.400"
                        textAlign={"center"}
                      >
                        Mã phòng
                      </Th>
                      <Th
                        borderColor={borderColor}
                        color="gray.400"
                        textAlign={"center"}
                      >
                        Ngày nhập
                      </Th>
                      <Th
                        borderColor={borderColor}
                        color="gray.400"
                        textAlign={"center"}
                      >
                        Số lượng
                      </Th>
                      <Th
                        borderColor={borderColor}
                        color="gray.400"
                        textAlign={"center"}
                      >
                        Đơn giá
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {search.length === 0
                      ? soDienNuoc.map((soDienNuoc, index, arr) => {
                          return (
                            <TablesTableRow
                              maPhong={soDienNuoc.phong.maPhong}
                              ngayNhap={soDienNuoc.ngayNhap}
                              so={soDienNuoc.so}
                              donGia={soDienNuoc.donGia}
                              isLast={index === arr.length - 1 ? true : false}
                              key={
                                soDienNuoc.phong.maPhong +
                                Math.round(index * arr.length) +
                                index
                              }
                            />
                          );
                        })
                      : search.map((soDienNuoc, index, arr) => {
                          return (
                            <TablesTableRow
                              maPhong={soDienNuoc.phong.maPhong}
                              ngayNhap={soDienNuoc.ngayNhap}
                              so={soDienNuoc.so}
                              donGia={soDienNuoc.donGia}
                              isLast={index === arr.length - 1 ? true : false}
                              key={
                                soDienNuoc.phong.maPhong +
                                Math.round(index * arr.length) +
                                index
                              }
                            />
                          );
                        })}
                  </Tbody>
                </Table>
              </Flex>
            </CardBody>
          </Card>
        </Flex>
      )}
    </Flex>
  );
}

export default SoDienSoNuoc;
