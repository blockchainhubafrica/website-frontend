import httpService from "./httpService";

const route = `/registrations`;

async function CreateEventRegistrationAPI(body) {
  return await httpService.post(`${route}`, body);
}

async function GetPublishedEventsAPI() {
  return await httpService.get(`/events`);
}

async function RegisterForEventAPI(eventId, body) {
  return await httpService.post(`/events/${eventId}/register`, body);
}

export { CreateEventRegistrationAPI, GetPublishedEventsAPI, RegisterForEventAPI };
