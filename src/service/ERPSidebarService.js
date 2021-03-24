import axios from 'axios'
import env from '../environment'
// import qs from 'qs'

axios.defaults.baseURL = env.apiBaseUrl;
let token = JSON.parse(localStorage.getItem('jerp_logged_user')) ? JSON.parse(localStorage.getItem('jerp_logged_user')).accessToken : null
let token_type = JSON.parse(localStorage.getItem('jerp_logged_user')) ? JSON.parse(localStorage.getItem('jerp_logged_user')).token_type : null
let FRSAPIURL = env.apiBaseUrlFRS

export default class PostService {

  getToken() {
    token = JSON.parse(localStorage.getItem('jerp_logged_user')) ? JSON.parse(localStorage.getItem('jerp_logged_user')).accessToken : null
    token_type = JSON.parse(localStorage.getItem('jerp_logged_user')) ? JSON.parse(localStorage.getItem('jerp_logged_user')).token_type : null
  }

  // JMI ERP LOGIN
  async login(username, password) {
    // let body = {
    //   username: username,
    //   password: password
    // }
    return await axios({
      method: 'POST',
      url: '/api/auth/login',
      data: {username, password}
    })
  }

  // JMI ERP MENU DATA
  async getWebSideMenu() {
    let web_menu_url = '/api/system/WebMenu'
    // token = JSON.parse(localStorage.getItem('jerp_logged_user')).accessToken
    // console.log(token)
    this.getToken()
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  async getWEB_SystemAssignedSBU(token_2) {
    token = JSON.parse(localStorage.getItem('jerp_logged_user')).accessToken
    let web_menu_url = '/api/system/AssignedSBU'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token_2
      }
    })
  }

  // DIC WISE USERS LIST
  async getDICWiseUsers_MonthlyDeliveryPlan() {
    let web_menu_url = '/api/web/dic-wise-users'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // 
  async getDICDeliveryLocations_MonthlyDeliveryPlan() {
    let web_menu_url = '/api/web/dic-delivery-locations'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN
  // MOUNTED 2'ND API CALL
  // MONTH SELECTION API CALL
  async getDICMonthlyDeliveryPlan_MMYYYY_MonthlyDeliveryPlan(mmyyyy) {
    // console.log(mmyyyy)
    let web_menu_url = '/api/web/dic-monthly-delivery-plan/' + mmyyyy
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - LEFT SECTION - ALL DA INFO LIST
  // MOUNTED 1'ST API CALL
  // MONTH SELECTION API CALL
  async getAllDAInfo_MMYYYY_MonthlyDeliveryPlan(mmyyyy) {
    // console.log(mmyyyy)
    let web_menu_url = '/api/web/all-da-info/' + mmyyyy
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - RIGHT SECTION DATA BY SELECTED MONTH_YEAR & FORCE ID
  async getMonthlyDeliveryPlanByForceId_MonthlyDeliveryPlan(mmyyyy, force_id) {
    // console.log(mmyyyy + '    ' + force_id)
    let web_menu_url = '/api/web/monthly-delivery-plan-by-force/' + mmyyyy + '/' + force_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - RIGHT SECTION DATA BY SELECTED MONTH_YEAR & FORCE ID
  async getSD_DPD_PreviousMonthBySource_MonthlyDeliveryPlan(force_id) {
    // console.log(mmyyyy + '    ' + force_id)
    let web_menu_url = '/api/web/get-sd-dpd-previous-month-by-source/' + force_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // CREATE A DAY FROM CALENDAR
  async getCreateSDDpdDay_MonthlyDeliveryPlan(id, delivery_date) {
    // console.log(dpf_id + '    ' + delivery_date)
    let web_menu_url = '/api/web/create-sd-dpd-day/' + id + '/' + delivery_date
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // DELETE A DAY FROM CALENDAR
  async getDestroySDDpdDay_MonthlyDeliveryPlan(id, delivery_date) {
    // console.log(dpf_id + '    ' + delivery_date)
    let web_menu_url = '/api/web/destroy-sd-dpd-day/' + id + '/' + delivery_date
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - CREATE SD DPD AREA FROM LIST FOR OCCUPIED DA / CREATE NEW TERRITORY/CALENDAR
  async getCreateSD_DPD_AREA_ForOccupiedDA(dpf_id, area_id) {
    // console.log(dpf_id + '    ' + area_id)
    let web_menu_url = '/api/web/create-sd-dpd-area/' + dpf_id + '/' + area_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - CREATE SD DPD AREA FROM LIST FOR AVAILABLE DA / CREATE NEW TERRITORY/CALENDAR
  async getCreateSD_DPD_AREA_ForAvailableDA(dp_id, force_id, area_id) {
    // console.log(dpf_id + '    ' + area_id)
    let web_menu_url = '/api/web/create-sd-dpd-area-for-available-force/' + dp_id + '/' + force_id + '/' + area_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - CREATE SD DPD AREA FROM LIST FOR AVAILABLE DA FOR FUTURE / CREATE NEW TERRITORY/CALENDAR
  async getCreateSD_DPD_AREA_ForAvailableDA_ForFuture(mmyyyy, force_id, area_id) {
    // console.log(dpf_id + '    ' + area_id)
    let web_menu_url = '/api/web/create-sd-delivery-plan-for-available-force/' + mmyyyy + '/' + force_id + '/' + area_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - CREATE SD DPD AREA FROM LIST / CREATE NEW TERRITORY/CALENDAR
  async getDestroySD_DPD_AREA(dpf_id, area_id) {
    // console.log(dpf_id + '    ' + area_id)
    let web_menu_url = '/api/web/destroy-sd-dpd-area/' + dpf_id + '/' + area_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - COPY TERRITORY
  async getCopySD_DPD_Area(selected_territory, selected_modal_area_id) {
    // console.log(dpf_id + '    ' + area_id)
    let web_menu_url = '/api/web/copy-sd-dpd-area/' + selected_territory + '/' + selected_modal_area_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - DELETE ALL MONTH DATA
  async getSD_DPD_COPY_EXECUTE_PROCEDURE(source_mnyr, target_mnyr) {
    console.log(source_mnyr + '   ' + target_mnyr)
    let web_menu_url = '/api/web/sd-dpd-copy-execute-procedure/' + source_mnyr + '/' + target_mnyr
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - DELETE ALL MONTH DATA
  async getSD_DPD_DELETE_EXECUTE_PROCEDURE(mmyyyy) {
    let web_menu_url = '/api/web/sd-dpd-delete-execute-procedure/' + mmyyyy
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - DELETE ALL MONTH DATA
  async getSD_DPD_PreviousMonthByDP_Mnyr(mmyyyy) {
    let web_menu_url = '/api/web/get-sd-dpd-previous-month-by-dp-mnyr/' + mmyyyy
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - DELETE ALL MONTH DATA
  async getExecuteProcedureCopyDeliveryPlanByForce(soruce_date, target_date, force_id) {
    let web_menu_url = '/api/web/execute-procedure-copy-delivery-plan-by-force/' + soruce_date + '/' + target_date + '/' + force_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // MONTHLY DELIVERY PLAN - REMVOE ALL AREA FOR FORCE OR DA
  async getExecuteDeleteForceProcedure_All_Force_delete_for_DA(mmyyyy, force_id) {
    let web_menu_url = '/api/web/execute-delete-force-procedure/' + mmyyyy + '/' + force_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  //////////////////////////////////////////////////////////////////////////////////////////
  // DOCTOR - 
  //////////////////////////////////////////////////////////////////////////////////////////

  // Get Doctors Profile
  async getAdvisorProfile(id) {
    let web_menu_url = 'api/mobile/get-advisor-profile/' + id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }
  // -------------------------------------------------------------------------------------------
  // DOCTOR - DOCTOR LIST
  // Get Doctors Profile
  async getAllAdvisorList_DOCTOR_LIST() {
    let web_menu_url = '/api/common/all-advisor-list'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  //////////////////////////////////////////////////////////////////////////////////////////
  // Order

  // -------------------------------------------------------------------------------------------
  // CREATE ORDER
  async getAllCustomerForDepot_CreateOrderLeftList() {
    let web_menu_url = '/api/web/all-customers-for-depot'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // CREATE ORDER
  async getCustomerInfoForDepot_CreateOrderLeftList(customer_id) {
    let web_menu_url = '/api/web/customer-info-for-depot/' + customer_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // CREATE ORDER
  async getSearchProductDataList_CreateOrderDetailsSection() {
    let web_menu_url = '/api/web/search-product-data-list'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  async getAreaListByUser_CreateOrderDetailsSection(user_id) {
    let web_menu_url = '/api/common/area-list-by-user/' + user_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // CREATE ORDER - SEND SELECTED PRODUCT LIST
  async getFindProductOffer_CreateOrderDetailsSection(prod_db_list, sbu_id, customer_id, date) {
    console.log(JSON.stringify(prod_db_list))
    console.log(date)
    let web_menu_url = '/api/web/find-product-offer'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      params: {
        prod_details: JSON.stringify(prod_db_list),
        customer_id: customer_id,
        sbu_id: sbu_id,
        date: date,
      },
    })
  }

  // CREATE ORDER - SUBMIT ORDER TO CREATE - SEND SELECTED PRODUCT LIST
  async getCreateOrder_CreateOrderDetailsSection(prod_db_list, sbu_id, customer_id, date, sales_area_id, delivery_address, order_note) {
    console.log(JSON.stringify(prod_db_list))
    console.log(delivery_address + '    ' + order_note)
    let web_menu_url = '/api/mobile/create-order'
    return await axios(web_menu_url, {
      method: 'POST',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      params: {
        order_detail: JSON.stringify(prod_db_list),
        customer_id: customer_id,
        sbu_id: sbu_id,
        date: date,
        sales_area_id: sales_area_id,
        delivery_address: delivery_address,
        order_note: order_note
      },
    })
  }

  // -------------------------------------------------------------------------------------------
  // Order Approval - SUBMIT ORDER TO CREATE - SEND SELECTED PRODUCT LIST
  async getAllPendingOrdersCustomerList_OrderApprovalLeftSide() {
    // let web_menu_url = '/api/web/all-pending-orders-customer-list'
    let web_menu_url = '/api/web/all-pending-approval-orders-customer-list'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // Order Approval - SUBMIT ORDER TO CREATE - SEND SELECTED PRODUCT LIST
  async getSelectedPendingOrderById_OrderApproval(order_id) {
    let web_menu_url = '/api/web/pending-order-details/' + order_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // Order Approval - SHOW CUSTOMER PROFILE
  async getShowCustomerProfile_OrderApproval(customer_id) {
    let web_menu_url = '/api/common/show-customer-profile/' + customer_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // Order Approval - CANCEL ORDER BY ORDER ID
  async getCancelOrderByOrderId_OrderApproval(order_id) {
    let web_menu_url = '/api/web/cancel-order/' + order_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // Order Approval - CANCEL ORDER BY ORDER ID
  async getDestroyOrderDetailsById_OrderApproval(id) {
    let web_menu_url = '/api/mobile/destroy-order-details/' + id
    return await axios(web_menu_url, {
      method: 'PUT',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // Order Approval - ADD NEW PRODUCT ON EXIST ORDER
  async getAddNewProdOnExistOrderByOrderId_OrderApproval(order_id, order_detail) {
    console.log(order_id)
    console.log(JSON.stringify(order_detail))
    let web_menu_url = '/api/mobile/add-new-prod-on-exist-order'
    return await axios(web_menu_url, {
      method: 'POST',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      params: {
        order_id: order_id,
        order_detail: JSON.stringify(order_detail),
      },
    })
  }

  // Order Approval - UPDATE ORDER BY ORDER ID
  async getUpdateOrderByOrderId_OrderApproval(order_id, order_detail) {
    console.log(order_id)
    console.log(JSON.stringify(order_detail))
    let web_menu_url = '/api/mobile/update-order'
    return await axios(web_menu_url, {
      method: 'PUT',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      params: {
        order_id: order_id,
        order_detail: JSON.stringify(order_detail),
      },
    })
  }

  // Order Approval - APPROVE SINGLE ORDER BY ORDER ID (FINAL) - DETAILS SECTION
  async getApproveSingleOrderByOrderId_OrderApproval(order_id) {
    console.log(order_id)
    let web_menu_url = '/api/web/approve-single-order/' + order_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // Order Approval - APPROVE SELECTED ORDERS - LEFT SECTION
  async getApproveSelectedOrders_OrderApproval(orders) {
    console.log(orders)
    let web_menu_url = '/api/web/approve-selected-order'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      params: {
        orders: JSON.stringify(orders),
      },
    })
  }

  // Order Approval - APPROVE BULK ORDERS - LEFT SECTION
  async getApproveBulkOrdersByAllDA_OrderApproval(da_id) {
    console.log(da_id)
    let web_menu_url = '/api/web/approve-bulk-order/' + da_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // Order Approval - APPROVE BULK ORDERS - LEFT SECTION
  async getPrintOrderDetails_OrderApproval_INVOICE(order_id) {
    console.log(order_id)
    let web_menu_url = '/api/web/print-order-details/' + order_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // // CREATE ORDER - SR LIST LOAD
  // getSearchProductDataList_CreateOrderDetailsSection() {
  //   let web_menu_url = '/api/web/dic-wise-users'
  //   return await axios(web_menu_url, {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': token_type + ' ' + token
  //     }
  //   })
  // }

  // -------------------------------------------------------------------------------------------
  // DELIVERY SCHEDULING - PENDING DELIVERY LIST - LEFT SECTION
  async getPendingDeliveryAllScheduleInvoiceList_DELIVERY_SCHEDULING() {
    let web_menu_url = '/api/web/pending-delivery-schedule-all-invoice-list'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // DELIVERY SCHEDULING - PENDING DELIVERY LIST - LEFT SECTION
  async getCreateDeliveryScheduleBy_DA_DELIVERY_SCHEDULING(da_id, date) {
    let web_menu_url = '/api/web/create-delivery-schedule'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      params: {
        da_id: da_id,
        schedule_date: date
      }
    })
  }

  // DELIVERY SCHEDULING - PENDING DELIVERY LIST - LEFT SECTION
  async getPendingDeliveryScheduleInvoiceLBy_DA_ID_DELIVERY_SCHEDULING(da_id) {
    console.log(da_id)
    let web_menu_url = '/api/web/pending-delivery-schedule-invoice-list-by-da'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      params: {
        da_id: da_id
      }
    })
  }

  // DELIVERY SCHEDULING - PENDING DELIVERY LIST - LEFT SECTION
  async getPendingDeliveryScheduleInvoiceLBy_DA_DELIVERY_SCHEDULING(da_id, from_date, to_date) {
    let web_menu_url = '/api/web/pending-delivery-schedule-invoice-list-by-da'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      params: {
        da_id: da_id,
        from_date: from_date,
        to_date: to_date
      }
    })
  }

  // DELIVERY SCHEDULING - PRINT INVOICE & CHALLAN - LEFT SECTION
  async getDeliveryScheduleList_DELIVERY_SCHEDULING_INVOICE_CHALLAN_PRINTING() {
    let web_menu_url = '/api/web/delivery-schedule-list'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // DELIVERY SCHEDULING - PRINT INVOICE & CHALLAN - LEFT SECTION
  async getDeliveryScheduleDetails_DELIVERY_SCHEDULING_INVOICE_CHALLAN_PRINTING(schedule_id) {
    let web_menu_url = '/api/web/delivery-schedule-details/' + schedule_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // DS - INVOICE CHALLAN SUMMERY
  async getGatePassDetails_DS_INVOICE_CHALLAN_SUMMERY(ds_id) {
    console.log(ds_id)
    let web_menu_url = '/api/web/gate-pass-details/' + ds_id
    // let web_menu_url = '/api/web/gate-pass-details/' + 1000
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // -------------------------------------------------------------------------------------------
  // INVOICE-CHALLAN PRINTING - DETAILS SECTION
  async getPrintInvoiceDetails_INVOICE_CHALLAN_PRINTING(invoice_id) {
    console.log(invoice_id)
    let web_menu_url = '/api/web/print-invoice-details/' + invoice_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // -------------------------------------------------------------------------------------------
  // DELEVERIES - LEFT SECTION - DS LIST
  async getPendingDeliveredInvoiceList_DELEVERIES() {
    let web_menu_url = '/api/web/pending-delivered-invoice-list'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // DELEVERIES - LEFT SECTION - SINGLE DS BY ID
  async getPendingDeliverInvoiceDetailsByInvocieId_DELEVERIES(invoice_id) {
    let web_menu_url = '/api/web/pending-deliver-invoice-details/' + invoice_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // DELEVERIES - DETAILS SECTION - SAVE
  async getSaveInvoiceDeliveryInfo_DELIVERIES(invoice_id, invoice_dtl, cash, cheque, net_payable_amount, base64_img, img_name, file_path, object_type) {
    console.log(invoice_id)
    console.log(invoice_dtl)
    console.log(cash)
    console.log(cheque)
    console.log(net_payable_amount)
    console.log(object_type)
    let web_menu_url = '/api/web/save-invoice-delivery-info'
    return await axios(web_menu_url, {
      method: 'POST',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      data: {
        invoice_id: invoice_id,
        invoice_details: JSON.stringify(invoice_dtl),
        cash: cash,
        cheque: cheque,
        net_payable_amount: net_payable_amount,
        base64_encoded_file: base64_img,
        file_original_name: img_name,
        file_upload_path: file_path,
        object_type: object_type
      }
    })
  }

  // DELEVERIES - DETAILS SECTION - FILE TYPE
  async getElementListByCode_Deliveries() {
    // let code = 14
    let web_menu_url = '/api/common/element-list-by-code'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      params: {
        code_key: 'BLOB_OBJ_TYPE'
      }
    })
  }

  // DELEVERIES - DETAILS SECTION - CANCEL
  async geSaveCancelDeliveryInfo_Deliveries(invoice_id, invoice_details) {
    // let code = 14
    let web_menu_url = '/api/web/save-cancel-invoice-delivery-info'
    return await axios(web_menu_url, {
      method: 'POST',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      params: {
        invoice_id: invoice_id,
        invoice_details: JSON.stringify(invoice_details)
      }
    })
  }

  // -------------------------------------------------------------------------------------------
  // DS PACKING PREPARATION - LEFT SECTION
  async getDeliveryScheduleProdPreparationListByDA_ID_DS_PACKING_PREPARATION(da_id) {
    let web_menu_url = '/api/web/delivery-schedule-prod-preparation-list/' + da_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // -------------------------------------------------------------------------------------------
  // CUSTOMER - CUSTOMER LIST
  async getCommonAllCustomerList_CUSTOMER_LIST() {
    let web_menu_url = 'api/common/all-customer-list'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // -------------------------------------------------------------------------------------------
  // INVOICE CHALLAN SUMMERY - LEFT SIDE
  async getPendingDeliveryScheduleInvoiceList_INVOICE_CHALLAN_SUMMERY() {
    let web_menu_url = '/api/web/pending-delivery-schedule-invoice-list'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // -------------------------------------------------------------------------------------------
  // PENDING DS INVOICE LIST - ADD INVOICE TO DS
  async getInvoiceForCurrentDS_PENDING_DS_INVOICE_LIST(da_id, ds_id) {
    let web_menu_url = '/api/web/invoices-for-current-delivery-schedule/' + da_id + '/' + ds_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // -------------------------------------------------------------------------------------------
  // PENDING DS INVOICE LIST - ADD INVOICE TO DS
  async getAddInvoiceToCurrentDS_PENDING_DS_INVOICE_LIST(ds_id, list) {
    console.log(ds_id)
    console.log(JSON.stringify(list))
    let web_menu_url = '/api/web/add-invoices-to-current-delivery-schedule'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      params: {
        ds_id: ds_id,
        invoices: JSON.stringify(list)
      }
    })
  }

  // -------------------------------------------------------------------------------------------
  // DISPATCH ENTRY
  async getDispatchEntryByGPNo_DS_DISPATCH_ENTRY(gp_no) {
    console.log(gp_no)
    let web_menu_url = '/api/web/dispatch-entry'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      params: {
        gp_no: gp_no
      }
    })
  }
  // DISPATCH ENTRY
  async getCreateDIspatch_DS_DISPATCH_ENTRY(gp_id) {
    console.log(gp_id)
    let web_menu_url = '/api/web/create-dispatch/' + gp_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // -------------------------------------------------------------------------------------------
  // STOCK REPORT
  async getPresentPositionStockReport__STOCK_REPORT() {
    let web_menu_url = '/api/web/present-position-stock-report'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // -------------------------------------------------------------------------------------------
  // DELIVERY GRN - GRN INFO DETAILS
  async getGRN_InfoByGRN_No__DELIVERY_GRN(grn_no) {
    let web_menu_url = '/api/web/grn-info-by-grn-no'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      params: {
        grn_no: grn_no
      }
    })
  }

  // DELIVERY GRN - RETURN GRN
  async getReturnGRN__DELIVERY_GRN(grn_no) {
    let web_menu_url = '/api/web/receive-grn'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      params: {
        grn_no: grn_no
      }
    })
  }

  // -------------------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------------------


  //////////////////////////////////////////////////////////////////////////////////////////

  // Get Doctors Profile
  async autocomplete() {
    let web_menu_url = 'https://api.publicapis.org/entries'
    return await axios(web_menu_url)
  }



  async getAllSidebarMenu() {
    // return await axios.get('/jerp_menu');
    return await axios({
      method: 'GET',
      url: FRSAPIURL + '/jerp_menu'
    });
  }

  async getAllCompanyList() {
    // return await axios.get('/company_list');
    return await axios({
      method: 'GET',
      url: FRSAPIURL + '/company_list'
    });
  }

  async getAllChatList() {
    // return await axios.get('/chat');
    return await axios({
      method: 'GET',
      url: FRSAPIURL + '/chat'
    });
  }

  async getAllNoificationList() {
    // return await axios.get('/noification');
    return await axios({
      method: 'GET',
      url: FRSAPIURL + '/noification'
    });
  }

  async getAllUser() {
    // return await axios.get('/user');
    return await axios({
      method: 'GET',
      url: FRSAPIURL + '/user'
    });
  }

  async getUsersList() {
    // return await axios.get('/users');
    return await axios({
      method: 'GET',
      url: FRSAPIURL + '/users'
    });
  }

  async getLoginRequestUserData(username, password) {
    // return await axios.get(`/users?username=${username}&password=${password}`);
    return await axios({
      method: 'GET',
      url: FRSAPIURL + '/' + `users?username=${username}&password=${password}`
    });
  }

  async getPassengersList(itemsPerPage, pageNumber) {
    console.log(itemsPerPage + '    ' + pageNumber)
    // return await axios.get('/passengers_list');
    return await axios({
      method: 'GET',
      url: FRSAPIURL + '/passengers_list'
    });


    // return await axios.get("https://api.instantwebtools.net/v1/passenger?size=" +
    //                   itemsPerPage + "&page=" + pageNumber);
    // const url = new URL("http://localhost:3001");
    // return await axios({
    //   url: url,
    //   method: "GET"
    // });
  }

  async getCompetitorsDataMgt() {
    // return await axios.get('/competitors_data');
    return await axios({
      method: 'GET',
      url: FRSAPIURL + '/competitors_data'
    });
  }

  async getSBUData() {
    // return await axios.get('/sub_data');
    return await axios({
      method: 'GET',
      url: FRSAPIURL + '/sub_data'
    });
  }

  async getSBUSisterConcernData() {
    // return await axios.get('/sister_concern_data');
    return await axios({
      method: 'GET',
      url: FRSAPIURL + '/sister_concern_data'
    });
  }

  async getSDGeoLocation() {
    // return await axios.get('/geo_location');
    return await axios({
      method: 'GET',
      url: FRSAPIURL + '/geo_location'
    });
  }

  async getDAlistForDeliverySchedule() {
    return await axios(FRSAPIURL + '/DA_list', {
      method: 'GET',
      // headers: {
      //   'Authorization': token_type + ' ' + token
      // }
    })
  }

  async getInvoiceChallanListForDeliverySchedule() {
    return await axios(FRSAPIURL + '/delivery_schedule_invoice_chalan_list', {
      method: 'GET',
      // headers: {
      //   'Authorization': token_type + ' ' + token
      // }
    })
  }
}

