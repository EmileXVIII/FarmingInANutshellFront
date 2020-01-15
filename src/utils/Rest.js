export default function(url, option = {}) {
  if (!url.startsWith("/")) {
    url = "/" + url;
  }
  if (sessionStorage.getItem("token") !== null) {
    if (option["headers"] === undefined) {
      option["headers"] = {};
    }
    option["headers"]["X-AUTH-TOKEN"] = sessionStorage.getItem("token");
  }

  return fetch(process.env.REACT_APP_URL + url, option);
}
