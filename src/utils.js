import axios from "axios";

export const getScenicPic = async() => {
  const { data } = axios.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=5&$format=JSON')
  console.log(data)

  return data;
}