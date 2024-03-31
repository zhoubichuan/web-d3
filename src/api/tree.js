import request from "@/util/request";
export function getTree(index = 1) {
  return request({
    url: `/antdpro-express/api/list/data/7/?current=1&pageSize=2000&typeName=tree${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/tree" + index + ".json",
  //   method: "get",
  // });
}
