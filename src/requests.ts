import axios from "axios";

const urlMessenger = "http://localhost:5000/api/messenger/";
const urlEvents = "http://localhost:5000/api/events/";

export async function addUser(data: any) {
  const response = await axios.post(`${urlMessenger}user-register`, data);
  return response.data;
}

export async function userLogin(data: any) {
  const response = await axios.post(`${urlMessenger}user-login`, data);
  return response.data;
}

export async function userLogout(data: any) {
  const response = await axios.post(`${urlMessenger}user-logout`, data);
  return response.data;
}

export async function getFriends(data: any) {
  const response = await axios.get(`${urlMessenger}get-friends`, data);
  return response.data;
}

export async function sendMessage(data: any) {
  const response = await axios.post(`${urlMessenger}send-message`, data);
  return response.data;
}

export async function getMessage(data: any) {
  const response = await axios.get(`${urlMessenger}get-message/`, data);
  return response.data;
}

export async function imageMessageSend(data: any) {
  const response = await axios.post(`${urlMessenger}image-message-send`, data);
  return response.data;
}

export async function seenMessage(data: any) {
  const response = await axios.post(`${urlMessenger}seen-message`, data);
  return response.data;
}

export async function deliveredMessage(data: any) {
  const response = await axios.post(`${urlMessenger}delivered-message`, data);
  return response.data;
}

export async function addEvent(data: any) {
  const response = await axios.post(`${urlEvents}add-event`, data);
  return response.data;
}

export async function findAll() {
  const response = await axios.get(`${urlEvents}get-events`);
  return response.data;
}

export async function findOne(id: string) {
  const response = await axios.get(`${urlEvents}get-event/${id}`);
  return response.data;
}

export async function updateEvent(id: string, data: any) {
  const response = await axios.put(`${urlEvents}update-event/${id}`, data);
  return response.data;
}

export async function removeEvent(id: string) {
  const response = await axios.delete(`${urlEvents}remove-event/${id}`);
  return response.data;
}
