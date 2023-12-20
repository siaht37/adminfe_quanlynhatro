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

function SoDienSoNuoc() {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const [soDienNuoc, setSoDienNuoc] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isTab, setIsTab] = useState(true);
  const [phongs, setPhongs] = useState([]);
  const [count, setCount] = useState(0);
  const [roomId, setRoomId] = useState();

  const fetchData = async () => {
    const data = isTab ? await getAllSoDien() : await getAllSoNuoc();
    setSoDienNuoc(data);
  };

  useEffect(() => {
    fetchData();
  }, [isTab]);

  const handleCreate = useCallback(() => {
    //true => create dien
    //false => create nuoc
    setShowModal(true);
    const fetchDataRoom = async () => {
      const data = await getAllRoom();
      setPhongs(data);
    };

    fetchDataRoom();
  }, [isTab]);

  const handleCreateDienNuoc = useCallback(async () => {
    console.log(soDienNuoc, roomId, count);
    if (!roomId) {
      return;
    }
    if (isTab) {
      //so dien
      const data = await createSoDien(Number(roomId), Number(count));
      console.log(data);
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
              {
                //tên phòng
                //call api nhét vô select option
                <>
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
                </>
                //Giá show 3k5 VNĐ
                //button create
                //call api set state
              }
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Flex paddingTop={4} background={"white"} flexDirection={"column"}>
          <Button
            colorScheme={"blue"}
            width={"fit-content"}
            marginLeft={"40px"}
            onClick={handleCreate}
          >
            {!isTab ? "Tạo số nước" : "Tạo số điiện"}
          </Button>

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
                    {soDienNuoc.map((soDienNuoc, index, arr) => {
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
