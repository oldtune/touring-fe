import axios from "axios";
import AppSettings from "./settings.service";

export const Http = {
  get: async function (path, headers, params) {
    return await makeRequest(path, "GET", headers, params, null);
  },
  post: async function (path, headers, params, body) {
    return await makeRequest(path, "POST", headers, params, body);
  },
  put: async function (path, headers, params, body) {
    return await makeRequest(path, "PUT", headers, params, body);
  },
  delete: async function (path, headers, params) {
    return await makeRequest(path, headers, "DELETE", params, null);
  },
};

async function makeRequest(path, method, headers, params, body) {
  return await axios.request({
    baseURL: AppSettings.apiEndpoint,
    url: path,
    params: params,
    method: method,
    headers: headers,
    data: body,
  });
}
