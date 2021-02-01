import { request } from "@tarojs/taro";

export async function getList() {
  return request({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
  });
}
