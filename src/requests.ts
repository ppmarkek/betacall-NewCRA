import axios from "axios";

const url = "http://localhost:5000/api/messenger/";

export async function addUser(data: any) {
  const response = await axios.post(`${url}user-register`, data);
  return response.data;
}

export async function userLogin(data: any) {
  const response = await axios.post(`${url}user-login`, data);
  return response.data;
}

export async function userLogout(data: any) {
  const response = await axios.post(`${url}user-logout`, data);
  return response.data;
}

export async function getFriends(data: any) {
  const response = await axios.get(`${url}get-friends`, data);
  return response.data;
}

export async function sendMessage(data: any) {
  const response = await axios.post(`${url}send-message`, data);
  return response.data;
}

export async function getMessage(data: any) {
  const response = await axios.get(`${url}get-message/`, data);
  return response.data;
}

export async function imageMessageSend(data: any) {
  const response = await axios.post(`${url}image-message-send`, data);
  return response.data;
}

export async function seenMessage(data: any) {
  const response = await axios.post(`${url}seen-message`, data);
  return response.data;
}

export async function deliveredMessage(data: any) {
  const response = await axios.post(`${url}delivered-message`, data);
  return response.data;
}

export async function addEvent(data: any) {
  const response = await axios.post(`${url}add-event`, data);
  return response.data;
}

export async function findAll(data: any) {
  const response = await axios.get(`${url}get-events`, data);
  return response.data;
}

export async function findOne(id: string) {
  const response = await axios.get(`${url}get-event/:${id}`);
  return response.data;
}

export async function updateEvent(id: string) {
  const response = await axios.put(`${url}update-event/:${id}`);
  return response.data;
}

export async function removeEvent(id: string) {
  const response = await axios.delete(`${url}remove-event/:${id}`);
  return response.data;
}
