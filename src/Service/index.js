class API {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(endpoint, params) {
    return this.httpRequest("GET", this.baseUrl + endpoint, params);
  }

  post(endpoint, params) {
    return this.httpRequest("POST", this.baseUrl + endpoint, params);
  }

  update(endpoint, params) {
    return this.httpRequest("PATCH", this.baseUrl + endpoint, params);
  }

  async httpRequest(method, url, params) {
    return new Promise((resolve, reject) => {
      let options;
      if (method === "GET") {
        options = {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
          method: method,
        };
      } else {
        options = {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
          method: method,
          body: JSON.stringify(params),
        };
      }

      console.log("api -> " + url);
      console.log("params -> ", options);
      fetch(url, options)
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            response.json().then((responseJson) => {
              resolve(responseJson);
            });
          } else {
            response.json().then((responseJson) => {
              reject(responseJson);
            });
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default new API("http://localhost:5000/");
