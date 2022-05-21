import { basePath} from "./Config";

export function signUpApi(data) {
  const url = `${basePath}/signup`;
  /*http:// localhost:3977/api/v1/signup*/
  console.log(url);
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(url, params).then((response) => {
    return response.json();
  });
}
