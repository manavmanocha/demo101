export const useHttpHelper = () => {
  const test101 = () => {
    return "Balle Balle"
  };

  const getCookie = (name: string) => {
    const match = document.cookie.match(
      new RegExp('(^| )' + name + '=([^;]+)')
    );
    if (match) return match[2];
  };

  /**
   * add queryParams to the destination url
   * @param path : destination path
   * @param options : {
   *      queryParams : superset of queryParams available to be added to the destination path,
   *      allowedQueryParams : queryParams allowed(out of superset) to be added in destination url
   * }
   * @returns : destination path with added queryParams
   */
  const addQueryParams = (path: any, options: any) => {
    let queryParamJoinOperator: string = '?';
    const query: Array<string> = [];
    const allowedQueryParams: Array<string> = options.allowedQueryParams;

    for (const param in options.queryParams) {
      //check if queryParam already exist
      //transfer queryParams if not available in destination url
      if (
        (!allowedQueryParams || allowedQueryParams.includes(param)) &&
        !path.includes(`?${param}=`) &&
        !path.includes(`&${param}=`)
      ) {
        query.push(`${param}=${options.queryParams[param]}`);
      }

      //check for join operator
      if (path.indexOf('?') != -1) {
        queryParamJoinOperator = '&';
      }
    }

    if (query.length !== 0) {
      path += queryParamJoinOperator + query.join('&');
    }

    return path;
  };

  return {
    getCookie,
    addQueryParams,
    test101
  };
};
