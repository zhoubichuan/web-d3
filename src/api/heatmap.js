import request from "@/util/request";

export function getHeatmap(index = 1) {
  return request({
    url: `/antdpro-express/api/list/data/7/?current=1&pageSize=2000&typeName=heatmap${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/heatmap" + index + ".json",
  //   method: "get",
  // });
}
