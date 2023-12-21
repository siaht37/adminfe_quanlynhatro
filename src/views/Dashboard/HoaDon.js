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
import TablesTableRow from "components/HoaDon/TablesTableRow";
import { useState, useEffect, useCallback } from "react";
import { getAllRoom, getAllHoaDon } from "../../apis";
import { uniqueDates } from "utils";
import ChiTietHoaDon from "../../components/HoaDon/ChiTietHoaDon";

function HoaDon() {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const [hoaDons, setHoaDon] = useState([]);
  const [showModal, setShowModal] = useState();
  const [phongs, setPhongs] = useState([]);
  const [count, setCount] = useState(0);
  const [roomId, setRoomId] = useState();
  const [roomIdFilter, setRoomIdFilter] = useState();
  const [dateFilter, setDateFilter] = useState();
  const [search, setSearch] = useState([]);
  const fetchData = async () => {
    const data = await getAllHoaDon();
    setHoaDon(data);
  };

  //được nhưng phải thêm thư viện nữa

  const fetchDataRoom = async () => {
    const data = await getAllRoom();
    setPhongs(data);
  };

  useEffect(() => {
    fetchData();
    fetchDataRoom();
  }, []);

  const handleFilter = useCallback(() => {
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

  const handleShowModal = useCallback((maHoaDon) => {
    setShowModal({ data: "detail", maHoaDon: maHoaDon });
  }, []);

  const handleShowCreateBill = useCallback(() => {
    setShowModal({ data: "create" });
  }, []);

  return (
    <Flex
      position={"relative"}
      direction="column"
      justifyContent={"center"}
      pt={{ base: "120px", md: "75px" }}
    >
      {showModal?.data === "detail" ? (
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
            direction={"column"}
          >
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"100%"}
            >
              <Flex flex={1}>Chi tiết hóa đơn</Flex>
              <Stack spacing={6} onClick={() => setShowModal()}>
                <CloseButton size="lg" />
              </Stack>
            </Flex>
            <Flex>
              <ChiTietHoaDon maHoaDon={showModal.maHoaDon} />
            </Flex>
          </Flex>
        </Flex>
      ) : showModal?.data === "create" ? (
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
              <Stack spacing={6} onClick={() => setShowModal()}>
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
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Flex
          paddingTop={4}
          background={"white"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Flex>
            <Button onClick={handleShowCreateBill}>
              Tạo hóa đơn theo tháng
            </Button>
            <Select
              onChange={(e) => setRoomIdFilter(e.target.value)}
              flex={1}
              marginTop={"12px"}
              placeholder="Chọn phòng"
            >
              {phongs
                .filter((phong) =>
                  hoaDons.find(
                    (h) => h?.hopDongThuePhong?.phong?.maPhong === phong.maPhong
                  )
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
              {uniqueDates(hoaDons.map((hoaDon) => hoaDon.ngayLap)).map(
                (h, index) => {
                  return (
                    <option key={index} value={h}>
                      {`${new Date(h).getMonth() + 1} - ${new Date(
                        h
                      ).getFullYear()}`}
                    </option>
                  );
                }
              )}
            </Select>

            <Button>Lọc</Button>
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
                        Ngày lập
                      </Th>
                      <Th
                        borderColor={borderColor}
                        color="gray.400"
                        textAlign={"center"}
                      >
                        Trạng thái
                      </Th>
                      <Th
                        borderColor={borderColor}
                        color="gray.400"
                        textAlign={"center"}
                      >
                        Số tiền
                      </Th>
                      <Th
                        borderColor={borderColor}
                        color="gray.400"
                        textAlign={"center"}
                      >
                        Chi tiết
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {hoaDons.map((hoaDon, index, arr) => {
                      return (
                        <TablesTableRow
                          maHoaDonHangThang={hoaDon.maHoaDonHangThang}
                          onShowModal={handleShowModal}
                          maPhong={hoaDon?.hopDongThuePhong?.phong?.maPhong}
                          ngayLap={hoaDon?.ngayLap}
                          trangThai={
                            hoaDon?.trangThaiThanhToan
                              ? "Đã thanh toán"
                              : "Chưa thanh toán"
                          }
                          soTien={hoaDon?.soTien}
                          isLast={index === arr.length - 1 ? true : false}
                          key={
                            Number(hoaDon?.hopDongThuePhong?.phong?.maPhong) +
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

export default HoaDon;
