import request from "@/util/request";
// 数据实体列表查询
export function getData() {
  return request({
    url: "/data.csv",
    method: "get",
  });
}
