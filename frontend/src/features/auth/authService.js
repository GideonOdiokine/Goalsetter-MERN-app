const API_URL = "/api/users/";

// Register user

const register = async (userData) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  };
  const response = await fetch(API_URL, requestOptions).then((res) =>
    res.json()
  );

  if (response.token) {
    localStorage.setItem("user", JSON.stringify(response));
  }

  return response;
};

const login = async (userData) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  };
  const response = await fetch(API_URL + "login", requestOptions).then(
    (res) => res.ok && res.json()
  );

  if (response) {
    localStorage.setItem("user", JSON.stringify(response));
  }
  return response;
  
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
