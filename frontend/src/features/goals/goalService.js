const API_URL = "/api/goals/";

// create new goal

const createGoal = async (goalData, token) => {
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(goalData),
  };
  const response = await fetch(API_URL, requestOptions).then((res) => {
    return res.json();
  });

  return response;
};

// get user goals
const getGoals = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(API_URL, requestOptions).then((res) => {
    return res.json();
  });

  return response;
};

const goalService = {
  createGoal,
  getGoals,
};

export default goalService;
