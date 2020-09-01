export default function (arr) {
  return arr.map(endPoint => {
    return endPoint
      .then(res => {
        if (Object.keys(res.data).length) {
          return res;
        } else {
          return {
            data: {
              statusCode: 404
            }
          };
        }
      })
      .catch(err => ({
        data: {
          statusCode: 404
        }
      }));
  });
}
