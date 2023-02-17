class urlUtils {
  static parameterizeArray = (key, arr) => {
    arr = arr.map(encodeURIComponent);
    return `${key}[]=${arr.join(`&${key}[]=`)}`;
  };

  static toQueryString(urlObject) {
    const queryString = Object.keys(urlObject)
      .map((key) => {
        if (urlObject[key] instanceof Array) {
          return this.parameterizeArray(key, urlObject[key]);
        }
        return `${key}=${encodeURIComponent(urlObject[key])}`;
      })
      .join("&");
    return queryString;
  }
}

export default urlUtils;
