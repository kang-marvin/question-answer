import * as httpMethods from "./common/httpMethods";
import urlUtils from "../utils/urlUtils";

class question {
  static getQuestion(params = { identifier: 0 }) {
    const queryString = urlUtils.toQueryString(params);
    return httpMethods.get(`question?${queryString}`);
  }
}

export default question;
