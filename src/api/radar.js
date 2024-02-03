import request from "@/util/request";

export function getRadar(index = 1) {
  return request({
    url: `/antdpro-express/api/list/data/7/?current=1&pageSize=2000&typeName=radar${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/radar" + index + ".json",
  //   method: "get",
  // });
}
