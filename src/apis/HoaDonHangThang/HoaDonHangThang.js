import axios from "../axios";

const prefix = "/HoaDonHangThang";

export const getAllHoaDon = async () => {
  const data = await axios.get(`${prefix}/`);
  return data.data;
};

export const getHoaDonByMaHoaDon = async (maHoaDon) => {
  const data = await axios.get(`${prefix}/chiTietHoaDon/${maHoaDon}`);
  return data.data;
};
