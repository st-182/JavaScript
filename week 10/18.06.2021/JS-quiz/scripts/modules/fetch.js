import { questions } from "../3_js.js";
const getDatafromJSON = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => questions.push(...data));
};
export default getDatafromJSON;
