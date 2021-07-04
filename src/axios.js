import axios from 'axios'

// const config = {
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Content-Type": "text/plain",
//     },
//   };

const instance = axios.create({
    baseURL: "http://api.themoviedb.org/3",
  //  htttps: config,
})


export default instance