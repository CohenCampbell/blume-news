import axios from "axios";

async function backendRequest(endpoint, data = {}, method = "get") {
  const url = `${"http://localhost:8000"}/${endpoint}`;
  let token = sessionStorage.getItem("token")
    ? sessionStorage.getItem("token")
    : undefined;
  const params = method === "get" ? data : {};
  const headers = { Authorization: `Bearer ${token}` };
  console.log(`data:${data}`);
  try {
    return (await axios({ url, method, data, params, headers })).data;
  } catch (err) {
    console.error("API Error:", err.response.data.error.message);
    const message = err.response.data.error.message;
    throw Array.isArray(message) ? message : [message];
  }
}

export default backendRequest;
