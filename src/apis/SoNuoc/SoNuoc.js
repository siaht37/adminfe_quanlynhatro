import axios from "../axios";

const prefix = "/SoNuoc"

export const getAllSoNuoc = async () => {
  const data = await axios.get(`${prefix}/`);
  return data.data;
};

export const createSoNuoc = async (idPhong, soNuoc) => {
  const data = await axios.post(`${prefix}/`, { maphong: idPhong, so: soNuoc });
  return data.data;
};
