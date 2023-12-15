import axios from '../index';

export const getAllLoaiPhong = async()=>{
    const data = await axios.get("/LoaiPhong/")
    return data.data
}
