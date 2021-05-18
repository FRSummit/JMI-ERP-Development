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
    // token = JSON.parse(localStorage.getItem('jerp_logged_user')).accessToken ? JSON.parse(localStorage.getItem('jerp_logged_user')).accessToken : null
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

  // -------------------------------------------------------------------------------------------
  // CUSTOMER - CUSTOMER LIST
  async getSbuVustomerListList_CUSTOMER_LIST() {
    let web_menu_url = '/api/mobile/get-sbu-customer-list'
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
  async getApproveSingleOrderByOrderId_OrderApproval(order_approval_details) {
    console.log(JSON.stringify(order_approval_details))
    // let web_menu_url = '/api/web/approve-single-order/' + order_id
    let web_menu_url = '/api/web/approve-single-order'
    return await axios(web_menu_url, {
      method: 'POST',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      params: {
        orders: JSON.stringify(order_approval_details)
      }
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

  // ORDER APPROVAL - SPECIAL DISCOUNT - DETAILS SECTION
  async getGetOrderOffer_Special_Discount_OrderApproval(prods_line_total, date) {
    console.log(prods_line_total)
    console.log(date)
    let web_menu_url = '/api/mobile/get-order-offer'
    return await axios(web_menu_url, {
      method: 'POST',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      params: {
        order_date  : date,
        amount      : prods_line_total
      }
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
  async getSaveInvoiceDeliveryInfo_DELIVERIES(invoice_id, invoice_dtl, cash, cheque, net_payable_amount, base64_img, img_name, file_path, object_type, eftn_amt, eftn_bank, eftn_ac_no, eftn_ref_no) {
    console.log(invoice_id)
    console.log(invoice_dtl)
    console.log(cash)
    console.log(cheque)
    console.log(net_payable_amount)
    console.log(object_type)
    console.log(eftn_amt + '    ' + eftn_bank + '    ' + eftn_ac_no + '    ' + eftn_ref_no)
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
        object_type: object_type,

        eftn_amt: eftn_amt,
        eftn_bank: eftn_bank,
        eftn_ac_no: eftn_ac_no,
        eftn_ref_no: eftn_ref_no
      }
    })
  }

  // DELEVERIES - DETAILS SECTION - SAVE - FULL DUE
  async getSaveInvoiceDeliveryInfoFullDue_DELIVERIES(invoice_id, invoice_dtl) {
    let web_menu_url = '/api/mobile/save-invoice-delivery-info-with-full-due'
    return await axios(web_menu_url, {
      method: 'POST',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      params: {
        invoice_id: invoice_id,
        invoice_details: JSON.stringify(invoice_dtl)
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

  // DELEVERIES - DETAILS SECTION - PAYMENT MODAL - BANK LIST
  async getBankList_DELIVERIES_DETAILS() {
    let web_menu_url = '/api/common/bank-list'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // DELEVERIES - DETAILS SECTION - PAYMENT MODAL - BANK BRANCH LIST
  async getBranchListByBankId_DELIVERIES_DETAILS(bank_id, district) {
    console.log(bank_id + '  ' + district)
    let web_menu_url = '/api/common/branch-list-by-bank/' + bank_id + '/' + district
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // DELEVERIES - DETAILS SECTION - PAYMENT MODAL - BANK BRANCH LIST
  async getCollectionList_DELIVERIES_DETAILS(customer_id, ds_id) {
    console.log(customer_id + '  ' + ds_id)
    let web_menu_url = '/api/mobile/get-collection-list/' + customer_id + '/' + ds_id
    // let web_menu_url = '/api/mobile/get-collection-list/1418/1150'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // DELEVERIES - DETAILS SECTION - PAYMENT MODAL - SAVE INVOICE WITH PAYMENT
  async getSaveInvoiceDeliveryInfoWithPayment_DELIVERIES_DETAILS(invoice_dtls) {
    console.log(invoice_dtls)
    let web_menu_url = '/api/mobile/save-invoice-delivery-info-with-payment'
    return await axios(web_menu_url, {
      method: 'POST',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      data: {
        invoice_id: invoice_dtls.invoice_id,
        invoice_details: JSON.stringify(invoice_dtls.invoice_details),
        collection_date: invoice_dtls.collection_date,
        ds_id: invoice_dtls.ds_id,
        customer_id: invoice_dtls.customer_id,
        collection_mode: invoice_dtls.collection_mode,
        doc_no: invoice_dtls.doc_no,
        doc_date: invoice_dtls.doc_date,
        base64_encoded_file: invoice_dtls.base64_encoded_file,
        file_original_name: invoice_dtls.file_original_name,
        bank_code: invoice_dtls.bank_code,
        branch_code: invoice_dtls.branch_code,
        bank_ac_no: invoice_dtls.bank_ac_no,
        amount: invoice_dtls.amount
      }
    })
  }

  // DELEVERIES - DETAILS SECTION - PAYMENT MODAL - SAVE INVOICE WITH PAYMENT
  async getReceivePaymentWithDeliveryInvoice_DELIVERIES_DETAILS(invoice_dtls) {
    console.log(invoice_dtls)
    let web_menu_url = '/api/mobile/receive-payment-with-delivered-invoice'
    return await axios(web_menu_url, {
      method: 'POST',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      data: {
        invoice_id: invoice_dtls.invoice_id,
        collection_date: invoice_dtls.collection_date,
        ds_id: invoice_dtls.ds_id,
        customer_id: invoice_dtls.customer_id,
        collection_mode: invoice_dtls.collection_mode,
        doc_no: invoice_dtls.doc_no,
        doc_date: invoice_dtls.doc_date,
        base64_encoded_file: invoice_dtls.base64_encoded_file,
        file_original_name: invoice_dtls.file_original_name,
        bank_code: invoice_dtls.bank_code,
        branch_code: invoice_dtls.branch_code,
        bank_ac_no: invoice_dtls.bank_ac_no,
        amount: invoice_dtls.amount
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
    let web_menu_url = '/api/common/all-customer-list'
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

  // DELIVERY GRN SR - LEFT SIDE
  async getCompleteDeliveryScheduleListByDA__DELIVERY_GRN_SR() {
    let web_menu_url = '/api/web/complete-delivery-schedule-list-by-da'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // RETURN GRN SR - LEFT SIDE
  async getCompleteDeliveryScheduleList__DELIVERY_GRN_SR() {
    let web_menu_url = '/api/web/complete-delivery-schedule-list'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // -------------------------------------------------------------------------------------------
  // REQUISITION - TRANSFER
  async getStockRequisitionList_TRANSFER_REQUISITION() {
    let web_menu_url = '/api/web/stock-requisition-list'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // REQUISITION - TRANSFER
  async getStockRequisitionDetail_TRANSFER_REQUISITION(requisition_id) {
    let web_menu_url = '/api/web/stock-requisition-detail/' + requisition_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // REQUISITION - CREATE - TRANSFER
  async getRequisitionProductList_CREATE_REQUISITION() {
    let web_menu_url = '/api/web/requisition-product-list'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // REQUISITION - TRANSFER VERIFY
  async getSaveTransferVerify_TRANSFER_REQUISITION(req_id) {
    let web_menu_url = '/api/web/save-transfer-verify/' + req_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // REQUISITION - CREATE - AREA LIST
  async getAllDepotUnderSBU_CREATE_REQUISITION() {
    let web_menu_url = '/api/web/all-depot-under-sbu'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // REQUISITION - CREATE - SAVE / SEND
  async getSaveNewRequisition_CREATE_REQUISITION(wh_from, req_status, prod_info) {
    console.log(wh_from)
    console.log(req_status)
    console.log(JSON.stringify(prod_info))
    let web_menu_url = '/api/web/save-new-requisition'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      params: {
        wh_from: wh_from,
        req_status: req_status,
        prod_info: JSON.stringify(prod_info)
      }
    })
  }

  // REQUISITION - CREATE - EDIT
  async getUpdateNewRequisition_CREATE_REQUISITION(requisition_id, wh_from, req_status, prod_info) {
    console.log(requisition_id)
    console.log(wh_from)
    console.log(req_status)
    console.log(JSON.stringify(prod_info))
    let web_menu_url = '/api/web/update-new-requisition/' + requisition_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      params: {
        wh_from: wh_from,
        req_status: req_status,
        prod_info: JSON.stringify(prod_info)
      }
    })
  }

  // -------------------------------------------------------------------------------------------
  // REQUISITION - TRANSFER APPROVE - LEFT SECTION
  async getApproveRequisitionList_TRANSFER_REQUISITION() {
    let web_menu_url = '/api/web/submitted-stock-requisition-list'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // -------------------------------------------------------------------------------------------
  // REQUISITION - TRANSFER VERIFY
  async getApproveStockRequisitionList_TRANSFER_VERIFY_REQUISITION() {
    let web_menu_url = '/api/web/approved-stock-requisition-list'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // -------------------------------------------------------------------------------------------
  // REQUISITION - TRANSFER VERIFY UPDATE
  async getUpdateNewRequisition_TRANSFER_VERIFY_REQUISITION_UPDATE(requisition_id, prod_info) {
    let web_menu_url = '/api/web/update-transfer-verify-requisition/' + requisition_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      params: {
        prod_info: JSON.stringify(prod_info)
      }
    })
  }

  // -------------------------------------------------------------------------------------------
  // REQUISITION - TRANSFER APPROVE - LEFT LIST
  async getVerifiedStockRequisitionList_TRANSFER_APPROVE_REQUISITION() {
    let web_menu_url = '/api/web/verified-stock-requisition-list'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  /*// REQUISITION - TRANSFER APPROVE - DETAILS - DRIVER LIST
  async getDepotDriverList_TRANSFER_APPROVE_REQUISITION() {
    let web_menu_url = '/api/web/depot-driver-list'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }*/

  // REQUISITION - TRANSFER APPROVE - DETAILS - APPROVING
  async getApproveTransferRequisition_TRANSFER_APPROVE_REQUISITION(transfer_id, driver_id) {
    console.log(transfer_id + '    ' + driver_id)
    let web_menu_url = '/api/web/approve-transfer-requisition'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      params: {
        transfer_id: transfer_id,
        driver_id: driver_id
      }
    })
  }

  // -------------------------------------------------------------------------------------------
  // PRODUCT - PRODUCT DETAILS - MODAL PRODUCT LIST
  async getNewProductList_PRODUCTS_DETAILS() {
    let web_menu_url = '/api/web/new-product-list'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // PRODUCT - PRODUCT DETAILS - MODAL PRIORITY CLASS
  async getProductClassElementList_PRODUCTS_DETAILS() {
    let web_menu_url = '/api/web/product-class-element-list'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // PRODUCT - PRODUCT DETAILS - CREATE NEW SBU PRODUCT
  async getCreateNewSBUProduct_PRODUCTS_DETAILS(prod_id, prod_class_id) {
    console.log('prod_id : ' + prod_id)
    console.log('prod_class_id : ' + prod_class_id)
    let web_menu_url = '/api/web/create-new-sbu-product'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      params: {
        prod_id       : prod_id,
        prod_class_id : prod_class_id
      }
    })
  }

  // PRODUCT - PRODUCT DETAILS - SBU PRODUCT DETAILS BY PROD ID
  async getSBUProductDetails_PRODUCTS_DETAILS(prod_id) {
    let web_menu_url = '/api/web/sbu-prod-details/' + prod_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // PRODUCT - PRODUCT DETAILS - CREATE OFFER
  async getCreateNewProdOffer_PRODUCTS_DETAILS(prod_id, offer_details) {
    console.log(prod_id)
    console.log(offer_details)
    let web_menu_url = '/api/web/create-new-prod-offer/' + prod_id
    return await axios(web_menu_url, {
      method: 'POST',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      params: {
        offer_type    : offer_details.offer_type,
        min_qty       : offer_details.min_qty,
        start_date    : offer_details.start_date,
        valid_until   : offer_details.valid_until,
        // Percentage
        discount_pct  : offer_details.discount_pct,
        // Discount
        price_now     : offer_details.price_now,
        for_qty       : offer_details.min_qty,
        discount_tp   : offer_details.discount_tp,
        // Bonus
        bonus_on      : offer_details.bonus_on,
        bonus_qty     : offer_details.bonus_qty,
        // Free
        free_req_qty  : offer_details.free_req_qty,
        free_prod_id  : offer_details.free_prod_id,
        free_prod_qty : offer_details.free_prod_qty
      }
    })
  }

  // PRODUCT - PRODUCT DETAILS - PRODUCT DETAILS BY ID & PROD ID TO EDIT
  async getEditProdOffer_PRODUCTS_DETAILS(id, prod_id) {
    console.log(id + '    ' + prod_id)
    let web_menu_url = '/api/web/edit-prod-offer/' + prod_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      params: {
        id: id
      }
    })
  }

  // PRODUCT - PRODUCT DETAILS - UPDATE PROD PRICE
  async getUpdateProdPrice_PRODUCTS_DETAILS(id, prod_id, prod_price_dtl) {
    console.log(id)
    console.log(prod_id)
    console.log(prod_price_dtl)
    let web_menu_url = '/api/web/update-prod-price/' + id
    return await axios(web_menu_url, {
      method: 'POST',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      params: {
        // id: id,
        // base_tp: prod_price_dtl.base_tp,
        // manufacture_price: prod_price_dtl.manufacture_price,
        // base_mrp: prod_price_dtl.base_mrp,
        // max_tp: prod_price_dtl.max_tp,
        // min_base_tp: prod_price_dtl.min_base_tp,
        // base_vat: prod_price_dtl.base_vat,
        // vat_pct: prod_price_dtl.vat_pct

        // id: id,
        trade_price         : prod_price_dtl.base_tp,
        manufacture_price   : prod_price_dtl.manufacture_price,
        maximum_retail_price: prod_price_dtl.base_mrp,
        // minimum_trade_price: prod_price_dtl.max_tp,
        minimum_trade_price : prod_price_dtl.min_base_tp,
        // min_base_tp      : prod_price_dtl.min_base_tp,
        vat                 : prod_price_dtl.base_vat,
        vat_pct             : prod_price_dtl.vat_pct
      }
    })
  }

  // PRODUCT - PRODUCT DETAILS - UPDATE OFFER
  async getUpdateProdOffer_PRODUCTS_DETAILS(id, prod_id, offer_details) {
    console.log(id)
    console.log(prod_id)
    console.log(offer_details)
    // let web_menu_url = '/api/web/update-prod-offer/' + prod_id
    let web_menu_url = '/api/web/update-prod-offer/' + id
    return await axios(web_menu_url, {
      method: 'POST',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      data: {
        offer_type    : offer_details.offer_type,
        min_qty       : offer_details.min_qty,
        start_date    : offer_details.start_date,
        valid_until   : offer_details.valid_until,
        // Percentage
        discount_pct  : offer_details.discount_pct,
        // Discount
        price_now     : offer_details.price_now,
        for_qty       : offer_details.min_qty,
        discount_tp   : offer_details.discount_tp,
        // Bonus
        bonus_on      : offer_details.bonus_on,
        bonus_qty     : offer_details.bonus_qty,
        // Free
        free_req_qty  : offer_details.free_req_qty,
        free_prod_id  : offer_details.free_prod_id,
        free_prod_qty : offer_details.free_prod_qty
      }
    })
  }

  // PRODUCT - PRODUCT DETAILS - DELETE PRODUCT OFFER BY ID
  async getDeleteProdOffer_PRODUCTS_DETAILS(id) {
    console.log(id)
    let web_menu_url = '/api/web/delete-prod-offer/' + id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // PRODUCT - PRODUCT DETAILS - UPLOAD DOCUMENT FILE
  async getUploadNewProdDocument_PRODUCTS_DETAILS(prod_id, prod_docs_details) {
    console.log(prod_id)
    console.log(prod_docs_details)
    let web_menu_url = '/api/web/upload-new-prod-document/' + prod_id
    return await axios(web_menu_url, {
      method: 'POST',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      data: {
        base64_encoded_file : prod_docs_details.base64_encoded_file,
        object_type         : prod_docs_details.object_type,
        file_title          : prod_docs_details.file_title,
        file_description    : prod_docs_details.file_description,
        file_original_name  : prod_docs_details.file_original_name,
        file_upload_path    : prod_docs_details.file_upload_path
      }
    })
  }

  // PRODUCT - PRODUCT DETAILS - UPLOAD DOCUMENT FILE
  async getSBUListMenuWarehouse_PRODUCTS_DETAILS() {
    let web_menu_url = '/api/web/sbu-list-menu-warehouse'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // PRODUCT - PRODUCT DETAILS - UPLOAD DOCUMENT FILE
  async getStoreSBUListMenuWarehouse_PRODUCTS_DETAILS(store_id, prod_id) {
    console.log(store_id + '    ' + prod_id)
    let web_menu_url = '/api/web/store-sbu-list-menu-warehouse/' + store_id + '/' + prod_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      },
    })
  }

  // PRODUCT - PRODUCT DETAILS - UPLOAD DOCUMENT FILE
  async getStockTransferForSingleProd_PRODUCTS_DETAILS(transfer_data) {
    console.log(transfer_data.from_store_id + '    ' + transfer_data.to_store_id + '    ' + transfer_data.prod_id + '    ' + transfer_data.batch_lot + '    ' + transfer_data.quantity)
    let web_menu_url = '/api/web/stock-transfer-for-single-prod'
    return await axios(web_menu_url, {
      method: 'POST',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      data: {
        from_store_id : transfer_data.from_store_id,
        to_store_id   : transfer_data.to_store_id,
        prod_id       : transfer_data.prod_id,
        batch_lot     : transfer_data.batch_lot,
        quantity      : transfer_data.quantity
      }
    })
  }

  // -------------------------------------------------------------------------------------------
  // COLLECTION - LEFT SIDE - SCHEDULE LIST
  async getDeliveryScheduleListForCollection_COLLECTION_LEFT() {
    let web_menu_url = '/api/web/delivery-schedule-list-for-collection'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }
  
  // COLLECTION - DETAILS - CUSTOMER LIST
  async getDeliveryScheduleCustomerListByID_COLLECTION_DETAILS(id) {
    let web_menu_url = '/api/web/delivery-schedule-customer-list/' + id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }
  
  // COLLECTION - DETAILS - COLLECTION MASTER CUSTOMER
  async getDSCollectionMasterCustomerByDSID_CustomerId_COLLECTION_DETAILS(ds_id, customer_id) {
    let web_menu_url = '/api/web/delivery-schedule-collection-master-customer/' + ds_id + '/' + customer_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }
  
  // COLLECTION - DETAILS - COLLECTION MASTER CUSTOMER - INVOICE LIST
  async getDSCollectionCustomerInvoiceListByDSID_CustomerId_COLLECTION_DETAILS(ds_id, customer_id, collection_mode) {
    console.log(ds_id + '    ' + customer_id + '    ' + collection_mode)
    let web_menu_url = '/api/web/delivery-schedule-collection-customer-invoice-list/' + ds_id + '/' + customer_id + '/' + collection_mode
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }
  
  // COLLECTION - DETAILS - COLLECTION AUTO ADJUST
  async getCollectionAutoAdjust_COLLECTION_DETAILS(dsc_id) {
    let web_menu_url = '/api/web/collection-auto-adjust/' + dsc_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }
  
  // COLLECTION - DETAILS - COLLECTION - INVOICE ADJUST
  async getCollectionAdjust_COLLECTION_DETAILS(dsc_id, invoice_id, amount) {
    let web_menu_url = '/api/web/collection-adjust/' + dsc_id + '/' + invoice_id + '/' + amount
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // -------------------------------------------------------------------------------------------
  // CUSTOMER PAYMENT

  // CUSTOMER PAYMENT - LEFT LIST
  async getCustomerUnderDS_SalesArea_CUSTOMER_PAYMENT(da_id) {
    let web_menu_url = '/api/web/customers-under-delivery-schedule-sales-area/' + da_id
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // DELEVERIES - DETAILS SECTION - PAYMENT MODAL - SAVE INVOICE WITH PAYMENT
  async getReceivePaymentFromCustomer_CUSTOMER_PAYMENT(invoice_dtls) {
    console.log(invoice_dtls)
    let web_menu_url = '/api/common/receive-payment-from-customer'
    return await axios(web_menu_url, {
      method: 'POST',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      data: {
        ds_id: invoice_dtls.ds_id,
        dsd_id: invoice_dtls.dsd_id,
        customer_id: invoice_dtls.customer_id,
        collection_mode: invoice_dtls.collection_mode,
        amount: invoice_dtls.amount,
        doc_no: invoice_dtls.doc_no,
        doc_date: invoice_dtls.doc_date,
        object_type: invoice_dtls.object_type,
        base64_encoded_file: invoice_dtls.base64_encoded_file,
        file_original_name: invoice_dtls.file_original_name,
        file_upload_path: invoice_dtls.file_upload_path,
        bank_code: invoice_dtls.bank_code,
        branch_code: invoice_dtls.branch_code,
        bank_ac_no: invoice_dtls.bank_ac_no,
      }
    })
  }


  // -------------------------------------------------------------------------------------------
  // CASH REGISTER - GET ALL TAB DATA
  async getCommonCashRegister__CASH_REGISTER() {
    let web_menu_url = '/api/common/cash-register'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }
  
  // CASH REGISTER - VERIFY DATA - PENDING
  async getCommonVerifyCashRegister__CASH_REGISTER_PENDING(data) {
    console.log(data)
    console.log(JSON.stringify(data))
    let web_menu_url = '/api/common/verify-cash-register'
    return await axios(web_menu_url, {
      method: 'POST',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      data: {
        register_info: JSON.stringify(data)
      }
    })
  }
  
  // CASH REGISTER - CANCEL DATA - PENDING
  async getCommonCancelCashRegister__CASH_REGISTER_PENDING(data) {
    console.log(data)
    console.log(JSON.stringify(data))
    let web_menu_url = '/api/common/cancel-cash-register'
    return await axios(web_menu_url, {
      method: 'POST',
      headers: {
        'Authorization': token_type + ' ' + token
      },
      data: {
        register_info: JSON.stringify(data)
      }
    })
  }

  // CASH REGISTER - CASH DOMINATION LIST
  async getCashDominationList__CASH_REGISTER() {
    let web_menu_url = '/api/common/cash-denomination-list'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }

  // -------------------------------------------------------------------------------------------
  // STOCK TRANSFER PACKING PREPARATION
  async getTransferProdPreparationList__STOCK_TRANSFER_PACKING_PREPARATION() {
    let web_menu_url = '/api/web/transfer-prod-preparation-list'
    return await axios(web_menu_url, {
      method: 'GET',
      headers: {
        'Authorization': token_type + ' ' + token
      }
    })
  }


  // -------------------------------------------------------------------------------------------

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

