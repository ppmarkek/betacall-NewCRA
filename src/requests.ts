import axios from "axios";

const urlMessenger = "http://localhost:5000/api/messenger/";
const urlAuthorization = "http://localhost:5000/api/authorization/";
const urlEvents = "http://localhost:5000/api/events/";
const urlContacts = "http://localhost:5000/api/contacts/";

export async function addUser(data: any) {
  try {
    const response = await axios.post(`${urlAuthorization}user-register`, data);
    return response.data;
  } catch (error: any) {
    return error.response.status;
  }
}

export async function userLogin(data: any) {
  try {
    const response = await axios.post(`${urlAuthorization}user-login`, data);
    return response.data;
  } catch (error: any) {
    return error.response.status;
  }
}

export async function userLogout() {
  try {
    const response = await axios.post(`${urlAuthorization}user-logout`);
    return response.data;
  } catch (error: any) {
    return error.response.status;
  }
}

export async function userValidate(data: any) {
  try {
    const response = await axios.get(`${urlAuthorization}validate`, data);
    return response.data;
  } catch (error: any) {
    return error.response.status;
  }
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

export async function findAllEvents() {
  const response = await axios.get(`${urlEvents}get-events`);
  return response.data;
}

export async function findOneEvent(id: string) {
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

export async function addContact(data: any) {
  const response = await axios.post(`${urlContacts}add-contact`, data);
  return response.data;
}

export async function findAllContacts() {
  const response = await axios.get(`${urlContacts}get-contacts`);
  return response.data;
}

export async function findOneContact(id: string) {
  const response = await axios.get(`${urlContacts}get-contact/${id}`);
  return response.data;
}

export async function updateContact(id: string, data: any) {
  const response = await axios.put(`${urlContacts}update-contact/${id}`, data);
  return response.data;
}

export async function removeContact(id: string) {
  const response = await axios.delete(`${urlContacts}remove-contact/${id}`);
  return response.data;
}
