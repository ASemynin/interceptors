import axios from "axios"
import Refresh from "./request"

const api = axios.create()

axios.interceptors.request.use(function (config) {
    if(localStorage.getItem('access')){
        config.headers = {
            'Authorization':`Bearer ${localStorage.getItem('access')}`
        }
    }
    return config;

  }, error => {
        if(error.response.status === 401){
            Refresh()
        }}
  )


axios.interceptors.response.use(function (response) {
    if(localStorage.getItem('access')){
        response.headers = {
            'Authorization':`Bearer ${localStorage.getItem('access')}`
        }
    }
    return response;

  }, error => {
        if(error.response.status === 401){
            Refresh()
        }}
  )

  export default api