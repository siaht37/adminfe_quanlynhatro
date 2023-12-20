import axios from "../axios";

const prefix = "/SoDien";

export const getAllSoDien = async () => {
  const data = await axios.get(`${prefix}/`);
  return data.data;
};

export const createSoDien = async (idPhong, soDien) => {
  const data = await axios.post(`${prefix}/`, { maphong: idPhong, so: soDien });
  return data.data;
};
