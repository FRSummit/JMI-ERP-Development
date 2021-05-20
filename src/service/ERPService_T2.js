import axios from 'axios'
import env from '../environment'

axios.defaults.baseURL = env.apiBaseUrl;
let token = JSON.parse(localStorage.getItem('jerp_logged_user')) ? JSON.parse(localStorage.getItem('jerp_logged_user')).accessToken : null
let token_type = JSON.parse(localStorage.getItem('jerp_logged_user')) ? JSON.parse(localStorage.getItem('jerp_logged_user')).token_type : null

export default class PostService_T2 {

    getToken() {
      token = JSON.parse(localStorage.getItem('jerp_logged_user')) ? JSON.parse(localStorage.getItem('jerp_logged_user')).accessToken : null
      token_type = JSON.parse(localStorage.getItem('jerp_logged_user')) ? JSON.parse(localStorage.getItem('jerp_logged_user')).token_type : null
    }

}