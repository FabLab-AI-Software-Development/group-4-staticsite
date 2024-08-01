import { axiosUtil } from "./axiosUtil";

const routeSlug = '/users';

async function fetchUsers() {
  try {
    console.log("fetchUsers");
    const response = await axiosUtil.get(routeSlug);
    console.log(response.data, "route");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default fetchUsers;
