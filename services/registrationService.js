import httpService from "./httpService";

const route = `/registrations`;

async function CreateEventRegistrationAPI(body) {
  return await httpService.post(`${route}`, body);
}

export { CreateEventRegistrationAPI };
