import request from "../utils/request";
const icode = "74C8F7BBC223F9A9";

export function woldcode() {
  return request({
    method: "get",
    url: "/screen/wordcloud",
    params: { icode },
  });
}
export function mapScatter() {
  return request({
    url: "/screen/map/scatter",
    method: "get",
    params: { icode },
  });
}

export function screenData() {
  return request({
    url: "/screen/data",
    method: "get",
    params: { icode },
  });
}
