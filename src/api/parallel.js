import request from "@/util/request";

export function getParallel(index = 1) {
  return request({
    url: `/antdpro-express/api/list/data/7/?current=1&pageSize=2000&typeName=parallel${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/parallel" + index + ".json",
  //   method: "get",
  // });
}
