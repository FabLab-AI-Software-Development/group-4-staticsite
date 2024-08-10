//8.9.24 Use this api to add routes to users.jsx for functionality

import { axiosUtil } from "./axios-client";

//works on ./pages/user.jsx
const userSlug = "/users";

async function fetchUsers() {
  try {
    const response = await axiosUtil.get(userSlug);
    // console.log("getUsers", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function submitUserData(userData) {
  console.log("User==========================", userData);
  try {
    const response = await axiosUtil.post(userSlug + "/signup", userData);
    console.log("Response", response);
  } catch (error) {
    console.error("Error submitting user data:", error);
  }
}

export default fetchUsers;
export { submitUserData };