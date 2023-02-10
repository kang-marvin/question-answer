import * as httpMethods from "./common/httpMethods";
import urlUtils from "../utils/urlUtils";

class category {
  static getCategories(searchParams = { page: 1 }) {
    const queryString = urlUtils.toQueryString(searchParams);
    return httpMethods.get(`categories?${queryString}`)
  }
}

export default category;