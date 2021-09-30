import axios from "axios";

const service = axios.create({
  baseURL: "https://api.github.com",
  timeout: 5000000,
});

service.get = (request) =>
  new Promise((resolve, reject) => {
    service({
      ...request,
      method: "get",
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export default service;
