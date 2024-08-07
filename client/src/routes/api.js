// import { axiosUtil } from "./axiosUtil";

// const routeSlug = '/users';

// async function fetchUsers() {
//   try {
//     console.log("fetchUsers");
//     const response = await axiosUtil.get(routeSlug);
//     console.log(response.data, "route");
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }

// export default fetchUsers;

import { axiosUtil } from "./axios-client";
const userSlug = '/users';
// const eventSlug = '/events';

async function fetchUsers() {
    try {
        const response = await axiosUtil.get(userSlug);
        console.log("getUsers", response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// async function submitUserData(userData) {

//     console.log("User==========================", userData);
//     try {
//         const response = await axiosUtil.post(userSlug + '/signup', userData);
//         console.log("Response", response);
//     } catch (error) {
//         console.error("Error submitting user data:", error);
//     }
// }

export default fetchUsers;