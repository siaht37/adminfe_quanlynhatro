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
import TablesTableRow from "components/HopDong/TablesTableRow";
import React, { useState, useEffect } from "react";
import { getAllHopDongThuePhong } from "../../apis";

function Tables() {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const [hopDongs, setHopDongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllHopDongThuePhong();
      setHopDongs(data);
    };
    fetchData();
  }, []);

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Hợp đồng
          </Text>
        </CardHeader>
        <CardBody>
          <Table
            variant="simple"
            color={textColor}
            style={{
              maxHeight: "60vh",
              overflow: "auto",
              width: "100%",
              tableLayout: "fixed",
              borderCollapse: "collapse",
              display: "block",
            }}
          >
            <Thead position={"sticky"} top={0} background={"white"}>
              <Tr my=".8rem" color="gray.400">
                <Th
                  pl="0px"
                  borderColor={borderColor}
                  color="gray.400"
                  textAlign={"center"}
                >
                  Mã hợp đồng
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
                  Diện tích
                </Th>
                <Th
                  borderColor={borderColor}
                  color="gray.400"
                  textAlign={"center"}
                >
                  Giá
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
                <Th
                  borderColor={borderColor}
                  color="gray.400"
                  textAlign={"center"}
                >
                  Username user
                </Th>

                <Th
                  borderColor={borderColor}
                  color="gray.400"
                  textAlign={"center"}
                >
                  Email user
                </Th>
                <Th
                  borderColor={borderColor}
                  color="gray.400"
                  textAlign={"center"}
                >
                  Tên quyền user
                </Th>

                <Th
                  borderColor={borderColor}
                  color="gray.400"
                  textAlign={"center"}
                >
                  Ngày lập hợp đồng
                </Th>
                <Th
                  borderColor={borderColor}
                  color="gray.400"
                  textAlign={"center"}
                >
                  Nội dung hợp đồng
                </Th>
                <Th
                  borderColor={borderColor}
                  color="gray.400"
                  textAlign={"center"}
                >
                  Tình trạng hợp đồng
                </Th>
                <Th
                  borderColor={borderColor}
                  color="gray.400"
                  textAlign={"center"}
                >
                  Tên người thuê
                </Th>
                <Th
                  borderColor={borderColor}
                  color="gray.400"
                  textAlign={"center"}
                >
                  Số điện thoại
                </Th>
                <Th borderColor={borderColor}>Địa chỉ thường trú</Th>

                <Th
                  borderColor={borderColor}
                  color="gray.400"
                  textAlign={"center"}
                >
                  Căn cước công dân
                </Th>
                <Th borderColor={borderColor}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {hopDongs.map((hopDong, index, arr) => {
                return (
                  <TablesTableRow
                    maHopDong={hopDong.maHopDong}
                    tenLoaiPhong={hopDong.phong.loaiPhong.tenLoaiPhong}
                    dienTich={hopDong.phong.loaiPhong.dienTich}
                    gia={hopDong.phong.loaiPhong.gia}
                    hinh={`${hopDong.phong.loaiPhong.hinh}`}
                    soLuong={hopDong.phong.loaiPhong.soLuong}
                    tang={hopDong.phong.tang}
                    tinhTrangPhong={hopDong.phong.tinhTrang}
                    conTrong={
                      hopDong.phong.conTrong ? "Còn phòng" : "Hết phòng"
                    }
                    username={hopDong.taiKhoan.userName}
                    email={hopDong.taiKhoan.email}
                    role={hopDong.taiKhoan.role.tenRole}
                    ngayLap={hopDong.ngayLap}
                    noiDung={hopDong.noiDung}
                    tinhTrangHopDong={hopDong.tinhTrang}
                    tenNguoiThue={hopDong.ten}
                    sdt={hopDong.sdt}
                    diaChiThuongTru={hopDong.diaChiThuongTru}
                    cccd={hopDong.cccd}
                    isLast={index === arr.length - 1 ? true : false}
                    key={hopDong.maHopDong}
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
