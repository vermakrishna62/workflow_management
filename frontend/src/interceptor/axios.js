
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

let refresh = false;

axios.interceptors.response.use(resp=>resp,async error=>{
    if(error.response.status === 401 && !refresh) // not authenticated
    {
        refresh = true;
        console.log(localStorage.getItem('refresh_token'));
        const response = await axios.post('token/refresh/',{refresh:localStorage.getItem('refresh_token')},
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },{withCredentials:true});

        if(response.status === 200)
        {
            const access_token = response.data.access;
            const refresh_token = response.data.refresh;
            // alert(access_token);
            console.log("data : "+response);
            localStorage.setItem("access_token", response.data.access);
            localStorage.setItem("refresh_token", response.data.refresh);

            axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;

            return axios(error.config);
        }
    }

    refresh = false;

    return error;
})

export default axios;