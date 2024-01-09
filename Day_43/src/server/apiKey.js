import { client } from "./client";

const apiKey = async (email) => {
  const { response, data } = await client.get(`/api-key?email=${email}`);
  if (response.ok) {
    client.setApiKey(data.data.apiKey);
    localStorage.setItem("apiKey", data.data.apiKey);
  }
  return { response, data };
};
export default apiKey;
