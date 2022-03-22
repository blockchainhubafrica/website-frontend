import httpService from "./httpService";

const route = `/blog`;

async function UpdateBlogPost(body, id) {
  let bodyFormData = new FormData();
  for (let eachKey in body) bodyFormData.append(eachKey, body[eachKey]);
  return await httpService.put(`${route}/${id}`, bodyFormData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
}

async function CreateBlogPost(body) {
  let bodyFormData = new FormData();
  for (let eachKey in body) bodyFormData.append(eachKey, body[eachKey]);

  await httpService.post(`${route}`, bodyFormData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
}

async function DeleteBlogPost(id) {
  return await httpService.delete(`${route}/${id}`);
}

export { UpdateBlogPost, CreateBlogPost, DeleteBlogPost };
