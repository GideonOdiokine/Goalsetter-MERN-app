const API_URL = "api/users/";

// Register user

const resgister = async (userData) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  };
  const response = await fetch(API_URL, requestOptions).then((res) =>
    res.json()
  );

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  resgister,
};

export default authService;
