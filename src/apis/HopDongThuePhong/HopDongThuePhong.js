import axios from "../axios";

const prefix = "HopDongThuePhong";

export const getAllHopDongThuePhong = async () => {
  const data = await axios.get(
    `${process.env.REACT_APP_QUAN_LY_NHA_TRO}/${prefix}/`
  );
  return data.data;
};
