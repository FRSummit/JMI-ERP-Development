import axios from 'axios'
import env from '../environment'

axios.defaults.baseURL = env.apiBaseUrl;
let token = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).accessToken : null
let token_type = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).token_type : null
let FRSAPIURL = env.apiBaseUrlFRS

export default class PostService {

  // JMI ERP LOGIN
  login(username, password) {
    // let body = {
    //   username: username,
    //   password: password
    // }
    return axios({
      method: 'POST',
      url: '/api/auth/login',
      data: {username, password}
    })
  }

  // JMI ERP MENU DATA
  getWebSideMenu() {
    let web_menu_url = '/api/system/WebMenu'
    return axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // DIC WISE USERS LIST
  getDICWiseUsers_MonthlyDeliveryPlan() {
    let web_menu_url = '/api/web/dic-wise-users'
    return axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // 
  getDICDeliveryLocations_MonthlyDeliveryPlan() {
    let web_menu_url = '/api/web/dic-delivery-locations'
    return axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN
  // MOUNTED 2'ND API CALL
  // MONTH SELECTION API CALL
  getDICMonthlyDeliveryPlan_MMYYYY_MonthlyDeliveryPlan(mmyyyy) {
    // console.log(mmyyyy)
    let web_menu_url = '/api/web/dic-monthly-delivery-plan/' + mmyyyy
    return axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - LEFT SECTION - ALL DA INFO LIST
  // MOUNTED 1'ST API CALL
  // MONTH SELECTION API CALL
  getAllDAInfo_MMYYYY_MonthlyDeliveryPlan(mmyyyy) {
    // console.log(mmyyyy)
    let web_menu_url = '/api/web/all-da-info/' + mmyyyy
    return axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - RIGHT SECTION DATA BY SELECTED MONTH_YEAR & FORCE ID
  getMonthlyDeliveryPlanByForceId_MonthlyDeliveryPlan(mmyyyy, force_id) {
    // console.log(mmyyyy + '    ' + force_id)
    let web_menu_url = '/api/web/monthly-delivery-plan-by-force/' + mmyyyy + '/' + force_id
    return axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - RIGHT SECTION DATA BY SELECTED MONTH_YEAR & FORCE ID
  getSD_DPD_PreviousMonthBySource_MonthlyDeliveryPlan(force_id) {
    // console.log(mmyyyy + '    ' + force_id)
    let web_menu_url = '/api/web/get-sd-dpd-previous-month-by-source/' + force_id
    return axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // CREATE A DAY FROM CALENDAR
  getCreateSDDpdDay_MonthlyDeliveryPlan(id, delivery_date) {
    // console.log(dpf_id + '    ' + delivery_date)
    let web_menu_url = '/api/web/create-sd-dpd-day/' + id + '/' + delivery_date
    return axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // DELETE A DAY FROM CALENDAR
  getDestroySDDpdDay_MonthlyDeliveryPlan(id, delivery_date) {
    // console.log(dpf_id + '    ' + delivery_date)
    let web_menu_url = '/api/web/destroy-sd-dpd-day/' + id + '/' + delivery_date
    return axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - CREATE SD DPD AREA FROM LIST FOR OCCUPIED DA / CREATE NEW TERRITORY/CALENDAR
  getCreateSD_DPD_AREA_ForOccupiedDA(dpf_id, area_id) {
    // console.log(dpf_id + '    ' + area_id)
    let web_menu_url = '/api/web/create-sd-dpd-area/' + dpf_id + '/' + area_id
    return axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - CREATE SD DPD AREA FROM LIST FOR AVAILABLE DA / CREATE NEW TERRITORY/CALENDAR
  getCreateSD_DPD_AREA_ForAvailableDA(dp_id, force_id, area_id) {
    // console.log(dpf_id + '    ' + area_id)
    let web_menu_url = '/api/web/create-sd-dpd-area-for-available-force/' + dp_id + '/' + force_id + '/' + area_id
    return axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - CREATE SD DPD AREA FROM LIST FOR AVAILABLE DA FOR FUTURE / CREATE NEW TERRITORY/CALENDAR
  getCreateSD_DPD_AREA_ForAvailableDA_ForFuture(mmyyyy, force_id, area_id) {
    // console.log(dpf_id + '    ' + area_id)
    let web_menu_url = '/api/web/create-sd-delivery-plan-for-available-force/' + mmyyyy + '/' + force_id + '/' + area_id
    return axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - CREATE SD DPD AREA FROM LIST / CREATE NEW TERRITORY/CALENDAR
  getDestroySD_DPD_AREA(dpf_id, area_id) {
    // console.log(dpf_id + '    ' + area_id)
    let web_menu_url = '/api/web/destroy-sd-dpd-area/' + dpf_id + '/' + area_id
    return axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - COPY TERRITORY
  getCopySD_DPD_Area(selected_territory, selected_modal_area_id) {
    // console.log(dpf_id + '    ' + area_id)
    let web_menu_url = '/api/web/copy-sd-dpd-area/' + selected_territory + '/' + selected_modal_area_id
    return axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - DELETE ALL MONTH DATA
  getSD_DPD_COPY_EXECUTE_PROCEDURE(source_mnyr, target_mnyr) {
    let web_menu_url = '/api/web/sd-dpd-copy-execute-procedure/' + source_mnyr + '/' + target_mnyr
    return axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - DELETE ALL MONTH DATA
  getSD_DPD_DELETE_EXECUTE_PROCEDURE(mmyyyy) {
    let web_menu_url = '/api/web/sd-dpd-delete-execute-procedure/' + mmyyyy
    return axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - DELETE ALL MONTH DATA
  getSD_DPD_PreviousMonthByDP_Mnyr(mmyyyy) {
    let web_menu_url = '/api/web/get-sd-dpd-previous-month-by-dp-mnyr/' + mmyyyy
    return axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - DELETE ALL MONTH DATA
  getExecuteProcedureCopyDeliveryPlanByForce(soruce_date, target_date, force_id) {
    let web_menu_url = '/api/web/execute-procedure-copy-delivery-plan-by-force/' + soruce_date + '/' + target_date + '/' + force_id
    return axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - REMVOE ALL AREA FOR FORCE OR DA
  getExecuteDeleteForceProcedure_All_Force_delete_for_DA(mmyyyy, force_id) {
    let web_menu_url = '/api/web/execute-delete-force-procedure/' + mmyyyy + '/' + force_id
    return axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  //////////////////////////////////////////////////////////////////////////////////////////
  // Doctors

  // Get Doctors Profile
  autocomplete() {
    let web_menu_url = 'https://api.publicapis.org/entries'
    return axios(web_menu_url)
  }

  // Get Doctors Profile
  getAdvisorProfile(id) {
    let web_menu_url = 'api/mobile/get-advisor-profile/' + id
    return axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }


  getAllSidebarMenu() {
    // return axios.get('/jerp_menu');
    return axios({
      method: 'GET',
      url: FRSAPIURL + '/jerp_menu'
    });
  }

  getAllCompanyList() {
    // return axios.get('/company_list');
    return axios({
      method: 'GET',
      url: FRSAPIURL + '/company_list'
    });
  }

  getAllChatList() {
    // return axios.get('/chat');
    return axios({
      method: 'GET',
      url: FRSAPIURL + '/chat'
    });
  }

  getAllNoificationList() {
    // return axios.get('/noification');
    return axios({
      method: 'GET',
      url: FRSAPIURL + '/noification'
    });
  }

  getAllUser() {
    // return axios.get('/user');
    return axios({
      method: 'GET',
      url: FRSAPIURL + '/user'
    });
  }

  getUsersList() {
    // return axios.get('/users');
    return axios({
      method: 'GET',
      url: FRSAPIURL + '/users'
    });
  }

  getLoginRequestUserData(username, password) {
    // return axios.get(`/users?username=${username}&password=${password}`);
    return axios({
      method: 'GET',
      url: FRSAPIURL + '/' + `users?username=${username}&password=${password}`
    });
  }

  getPassengersList(itemsPerPage, pageNumber) {
    console.log(itemsPerPage + '    ' + pageNumber)
    // return axios.get('/passengers_list');
    return axios({
      method: 'GET',
      url: FRSAPIURL + '/passengers_list'
    });


    // return axios.get("https://api.instantwebtools.net/v1/passenger?size=" +
    //                   itemsPerPage + "&page=" + pageNumber);
    // const url = new URL("http://localhost:3001");
    // return axios({
    //   url: url,
    //   method: "GET"
    // });
  }

  getCompetitorsDataMgt() {
    // return axios.get('/competitors_data');
    return axios({
      method: 'GET',
      url: FRSAPIURL + '/competitors_data'
    });
  }

  getSBUData() {
    // return axios.get('/sub_data');
    return axios({
      method: 'GET',
      url: FRSAPIURL + '/sub_data'
    });
  }

  getSBUSisterConcernData() {
    // return axios.get('/sister_concern_data');
    return axios({
      method: 'GET',
      url: FRSAPIURL + '/sister_concern_data'
    });
  }

  getSDGeoLocation() {
    // return axios.get('/geo_location');
    return axios({
      method: 'GET',
      url: FRSAPIURL + '/geo_location'
    });
  }

  getDAlistForDeliverySchedule() {
    return axios(FRSAPIURL + '/DA_list', {
      method: 'GET',
      // headers: {
      //   'Authorization': token_type + ' ' + token
      // }
    })
  }

  getInvoiceChallanListForDeliverySchedule() {
    return axios(FRSAPIURL + '/delivery_schedule_invoice_chalan_list', {
      method: 'GET',
      // headers: {
      //   'Authorization': token_type + ' ' + token
      // }
    })
  }
}


/**
 *
 *
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$file = file_get_contents("input.json");
echo ($file);

?>



input file

[
{
    "primary_menu": "Setting & Management - Setting & Management",
    "secondary_menu_list": [
      {
        "secondary_menu": "Product Management",
        "left_icon": "./Icons/Group 1383.svg",
        "tertiary_menu_list": [
          {
            "tertiary_menu": "Product Management",
            "left_icon": "./Icons/Group 1383.svg"
          },
          {
            "tertiary_menu": "Product Management",
            "left_icon": "./Icons/Group 1383.svg"
          },
          {
            "tertiary_menu": "Product Management",
            "left_icon": "./Icons/Group 1383.svg"
          }
        ]
      }
    .............
]

 */



