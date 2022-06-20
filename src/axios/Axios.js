import axios from "axios";

const axiosInst = axios.create({
    baseURL:"https://api.themoviedb.org/3/movie/",
});

// axiosInst.interceptors.request.use(
//     function(config){
//         // Action Before sent request
//         //StorageEvent.dispatch(/*Call function*/ );
//         return config;
//     },
//     function (error){
//         return Promise.reject(error);
//     }
// );

// axiosInst.interceptors.request.use(
//     function(response){
//         // Action Before sent request
//         //StorageEvent.dispatch(/*Call function*/ );
//         console.log(response);
//         return response;
//     },
//     function (error){
//         return Promise.reject(error);
//     }
// );

export default axiosInst;