import axios from "axios";

const url = "http://localhost:5000/api/messenger/";

export async function addUser(data: any) {
  const response = await axios.post(`${url}/user-register`, data);
  return response.data;
}
