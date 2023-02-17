import * as httpMethods from "./common/httpMethods";
import urlUtils from "../utils/urlUtils";

class category {
  static getCategories(searchParams = { page: 1 }) {
    const queryString = urlUtils.toQueryString(searchParams);
    return httpMethods.get(`categories?${queryString}`);
  }

  static getCategory(params = { identifier: 0 }) {
    const queryString = urlUtils.toQueryString(params);
    return httpMethods.get(`category?${queryString}`);
  }
}

export default category;
