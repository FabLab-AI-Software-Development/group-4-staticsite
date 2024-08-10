import axios from 'axios';

export const axiosUtil = axios.create({
    baseURL: `http://localhost:3001`,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

// async function submitUserData(userData) {

//     console.log("User==========================", userData);
//     try {
//         const response = await axiosUtil.post(userSlug + '/signup', userData);
//         console.log("Response", response);
//     } catch (error) {
//         console.error("Error submitting user data:", error);
//     }
// };