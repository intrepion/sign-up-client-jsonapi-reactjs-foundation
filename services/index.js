export const api = {
  signIn(username, password) {
    return axios.post(
        '/api/signIn', {
          username: username,
          password: password,
        }
      ).then(
        function (response) {
          console.log(response);
        }
      ).catch(
        function (response) {
          console.log(response);
        }
      );
  }
}
