import request from "@/util/request";

export function getPictorialBar(index = 1) {
  return request({
    url: `/antdpro-express/api/list/data/7/?current=1&pageSize=2000&typeName=pictorialBar${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/pictorialBar" + index + ".json",
  //   method: "get",
  // });
}
