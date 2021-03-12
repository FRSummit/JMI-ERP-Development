"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _environment = _interopRequireDefault(require("../environment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import qs from 'qs'
_axios["default"].defaults.baseURL = _environment["default"].apiBaseUrl;
var token = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).accessToken : null;
var token_type = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).token_type : null;
var FRSAPIURL = _environment["default"].apiBaseUrlFRS;

var PostService =
/*#__PURE__*/
function () {
  function PostService() {
    _classCallCheck(this, PostService);
  }

  _createClass(PostService, [{
    key: "login",
    // JMI ERP LOGIN
    value: function login(username, password) {
      // let body = {
      //   username: username,
      //   password: password
      // }
      return (0, _axios["default"])({
        method: 'POST',
        url: '/api/auth/login',
        data: {
          username: username,
          password: password
        }
      });
    } // JMI ERP MENU DATA

  }, {
    key: "getWebSideMenu",
    value: function getWebSideMenu() {
      var web_menu_url = '/api/system/WebMenu';
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    }
  }, {
    key: "getWEB_SystemAssignedSBU",
    value: function getWEB_SystemAssignedSBU() {
      var web_menu_url = '/api/system/AssignedSBU';
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // DIC WISE USERS LIST

  }, {
    key: "getDICWiseUsers_MonthlyDeliveryPlan",
    value: function getDICWiseUsers_MonthlyDeliveryPlan() {
      var web_menu_url = '/api/web/dic-wise-users';
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // 

  }, {
    key: "getDICDeliveryLocations_MonthlyDeliveryPlan",
    value: function getDICDeliveryLocations_MonthlyDeliveryPlan() {
      var web_menu_url = '/api/web/dic-delivery-locations';
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // MONTHLY DELIVERY PLAN
    // MOUNTED 2'ND API CALL
    // MONTH SELECTION API CALL

  }, {
    key: "getDICMonthlyDeliveryPlan_MMYYYY_MonthlyDeliveryPlan",
    value: function getDICMonthlyDeliveryPlan_MMYYYY_MonthlyDeliveryPlan(mmyyyy) {
      // console.log(mmyyyy)
      var web_menu_url = '/api/web/dic-monthly-delivery-plan/' + mmyyyy;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // MONTHLY DELIVERY PLAN - LEFT SECTION - ALL DA INFO LIST
    // MOUNTED 1'ST API CALL
    // MONTH SELECTION API CALL

  }, {
    key: "getAllDAInfo_MMYYYY_MonthlyDeliveryPlan",
    value: function getAllDAInfo_MMYYYY_MonthlyDeliveryPlan(mmyyyy) {
      // console.log(mmyyyy)
      var web_menu_url = '/api/web/all-da-info/' + mmyyyy;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // MONTHLY DELIVERY PLAN - RIGHT SECTION DATA BY SELECTED MONTH_YEAR & FORCE ID

  }, {
    key: "getMonthlyDeliveryPlanByForceId_MonthlyDeliveryPlan",
    value: function getMonthlyDeliveryPlanByForceId_MonthlyDeliveryPlan(mmyyyy, force_id) {
      // console.log(mmyyyy + '    ' + force_id)
      var web_menu_url = '/api/web/monthly-delivery-plan-by-force/' + mmyyyy + '/' + force_id;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // MONTHLY DELIVERY PLAN - RIGHT SECTION DATA BY SELECTED MONTH_YEAR & FORCE ID

  }, {
    key: "getSD_DPD_PreviousMonthBySource_MonthlyDeliveryPlan",
    value: function getSD_DPD_PreviousMonthBySource_MonthlyDeliveryPlan(force_id) {
      // console.log(mmyyyy + '    ' + force_id)
      var web_menu_url = '/api/web/get-sd-dpd-previous-month-by-source/' + force_id;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // CREATE A DAY FROM CALENDAR

  }, {
    key: "getCreateSDDpdDay_MonthlyDeliveryPlan",
    value: function getCreateSDDpdDay_MonthlyDeliveryPlan(id, delivery_date) {
      // console.log(dpf_id + '    ' + delivery_date)
      var web_menu_url = '/api/web/create-sd-dpd-day/' + id + '/' + delivery_date;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // DELETE A DAY FROM CALENDAR

  }, {
    key: "getDestroySDDpdDay_MonthlyDeliveryPlan",
    value: function getDestroySDDpdDay_MonthlyDeliveryPlan(id, delivery_date) {
      // console.log(dpf_id + '    ' + delivery_date)
      var web_menu_url = '/api/web/destroy-sd-dpd-day/' + id + '/' + delivery_date;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // MONTHLY DELIVERY PLAN - CREATE SD DPD AREA FROM LIST FOR OCCUPIED DA / CREATE NEW TERRITORY/CALENDAR

  }, {
    key: "getCreateSD_DPD_AREA_ForOccupiedDA",
    value: function getCreateSD_DPD_AREA_ForOccupiedDA(dpf_id, area_id) {
      // console.log(dpf_id + '    ' + area_id)
      var web_menu_url = '/api/web/create-sd-dpd-area/' + dpf_id + '/' + area_id;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // MONTHLY DELIVERY PLAN - CREATE SD DPD AREA FROM LIST FOR AVAILABLE DA / CREATE NEW TERRITORY/CALENDAR

  }, {
    key: "getCreateSD_DPD_AREA_ForAvailableDA",
    value: function getCreateSD_DPD_AREA_ForAvailableDA(dp_id, force_id, area_id) {
      // console.log(dpf_id + '    ' + area_id)
      var web_menu_url = '/api/web/create-sd-dpd-area-for-available-force/' + dp_id + '/' + force_id + '/' + area_id;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // MONTHLY DELIVERY PLAN - CREATE SD DPD AREA FROM LIST FOR AVAILABLE DA FOR FUTURE / CREATE NEW TERRITORY/CALENDAR

  }, {
    key: "getCreateSD_DPD_AREA_ForAvailableDA_ForFuture",
    value: function getCreateSD_DPD_AREA_ForAvailableDA_ForFuture(mmyyyy, force_id, area_id) {
      // console.log(dpf_id + '    ' + area_id)
      var web_menu_url = '/api/web/create-sd-delivery-plan-for-available-force/' + mmyyyy + '/' + force_id + '/' + area_id;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // MONTHLY DELIVERY PLAN - CREATE SD DPD AREA FROM LIST / CREATE NEW TERRITORY/CALENDAR

  }, {
    key: "getDestroySD_DPD_AREA",
    value: function getDestroySD_DPD_AREA(dpf_id, area_id) {
      // console.log(dpf_id + '    ' + area_id)
      var web_menu_url = '/api/web/destroy-sd-dpd-area/' + dpf_id + '/' + area_id;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // MONTHLY DELIVERY PLAN - COPY TERRITORY

  }, {
    key: "getCopySD_DPD_Area",
    value: function getCopySD_DPD_Area(selected_territory, selected_modal_area_id) {
      // console.log(dpf_id + '    ' + area_id)
      var web_menu_url = '/api/web/copy-sd-dpd-area/' + selected_territory + '/' + selected_modal_area_id;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // MONTHLY DELIVERY PLAN - DELETE ALL MONTH DATA

  }, {
    key: "getSD_DPD_COPY_EXECUTE_PROCEDURE",
    value: function getSD_DPD_COPY_EXECUTE_PROCEDURE(source_mnyr, target_mnyr) {
      var web_menu_url = '/api/web/sd-dpd-copy-execute-procedure/' + source_mnyr + '/' + target_mnyr;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // MONTHLY DELIVERY PLAN - DELETE ALL MONTH DATA

  }, {
    key: "getSD_DPD_DELETE_EXECUTE_PROCEDURE",
    value: function getSD_DPD_DELETE_EXECUTE_PROCEDURE(mmyyyy) {
      var web_menu_url = '/api/web/sd-dpd-delete-execute-procedure/' + mmyyyy;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // MONTHLY DELIVERY PLAN - DELETE ALL MONTH DATA

  }, {
    key: "getSD_DPD_PreviousMonthByDP_Mnyr",
    value: function getSD_DPD_PreviousMonthByDP_Mnyr(mmyyyy) {
      var web_menu_url = '/api/web/get-sd-dpd-previous-month-by-dp-mnyr/' + mmyyyy;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // MONTHLY DELIVERY PLAN - DELETE ALL MONTH DATA

  }, {
    key: "getExecuteProcedureCopyDeliveryPlanByForce",
    value: function getExecuteProcedureCopyDeliveryPlanByForce(soruce_date, target_date, force_id) {
      var web_menu_url = '/api/web/execute-procedure-copy-delivery-plan-by-force/' + soruce_date + '/' + target_date + '/' + force_id;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // MONTHLY DELIVERY PLAN - REMVOE ALL AREA FOR FORCE OR DA

  }, {
    key: "getExecuteDeleteForceProcedure_All_Force_delete_for_DA",
    value: function getExecuteDeleteForceProcedure_All_Force_delete_for_DA(mmyyyy, force_id) {
      var web_menu_url = '/api/web/execute-delete-force-procedure/' + mmyyyy + '/' + force_id;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } //////////////////////////////////////////////////////////////////////////////////////////
    // Doctors
    //////////////////////////////////////////////////////////////////////////////////////////
    // Get Doctors Profile

  }, {
    key: "getAdvisorProfile",
    value: function getAdvisorProfile(id) {
      var web_menu_url = 'api/mobile/get-advisor-profile/' + id;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } //////////////////////////////////////////////////////////////////////////////////////////
    // Order
    // CREATE ORDER

  }, {
    key: "getAllCustomerForDepot_CreateOrderLeftList",
    value: function getAllCustomerForDepot_CreateOrderLeftList() {
      var web_menu_url = '/api/web/all-customers-for-depot';
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // CREATE ORDER

  }, {
    key: "getCustomerInfoForDepot_CreateOrderLeftList",
    value: function getCustomerInfoForDepot_CreateOrderLeftList(customer_id) {
      var web_menu_url = '/api/web/customer-info-for-depot/' + customer_id;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // CREATE ORDER

  }, {
    key: "getSearchProductDataList_CreateOrderDetailsSection",
    value: function getSearchProductDataList_CreateOrderDetailsSection() {
      var web_menu_url = '/api/web/search-product-data-list';
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    }
  }, {
    key: "getAreaListByUser_CreateOrderDetailsSection",
    value: function getAreaListByUser_CreateOrderDetailsSection(user_id) {
      var web_menu_url = '/api/common/area-list-by-user/' + user_id;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // CREATE ORDER - SEND SELECTED PRODUCT LIST

  }, {
    key: "getFindProductOffer_CreateOrderDetailsSection",
    value: function getFindProductOffer_CreateOrderDetailsSection(prod_db_list, sbu_id, customer_id, date) {
      console.log(JSON.stringify(prod_db_list));
      console.log(date);
      var web_menu_url = '/api/web/find-product-offer';
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        },
        params: {
          prod_details: JSON.stringify(prod_db_list),
          customer_id: customer_id,
          sbu_id: sbu_id,
          date: date
        }
      });
    } // CREATE ORDER - SUBMIT ORDER TO CREATE - SEND SELECTED PRODUCT LIST

  }, {
    key: "getCreateOrder_CreateOrderDetailsSection",
    value: function getCreateOrder_CreateOrderDetailsSection(prod_db_list, sbu_id, customer_id, date) {
      console.log(JSON.stringify(prod_db_list));
      var web_menu_url = '/api/mobile/create-order';
      return (0, _axios["default"])(web_menu_url, {
        method: 'POST',
        headers: {
          'Authorization': token_type + ' ' + token
        },
        params: {
          order_detail: JSON.stringify(prod_db_list),
          customer_id: customer_id,
          sbu_id: sbu_id,
          date: date
        }
      });
    } // -------------------------------------------------------------------------------
    // Order Approval - SUBMIT ORDER TO CREATE - SEND SELECTED PRODUCT LIST

  }, {
    key: "getAllPendingOrdersCustomerList_OrderApprovalLeftSide",
    value: function getAllPendingOrdersCustomerList_OrderApprovalLeftSide() {
      // let web_menu_url = '/api/web/all-pending-orders-customer-list'
      var web_menu_url = '/api/web/all-pending-approval-orders-customer-list';
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // Order Approval - SUBMIT ORDER TO CREATE - SEND SELECTED PRODUCT LIST

  }, {
    key: "getSelectedPendingOrderById_OrderApproval",
    value: function getSelectedPendingOrderById_OrderApproval(order_id) {
      var web_menu_url = '/api/web/pending-order-details/' + order_id;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // Order Approval - SHOW CUSTOMER PROFILE

  }, {
    key: "getShowCustomerProfile_OrderApproval",
    value: function getShowCustomerProfile_OrderApproval(customer_id) {
      var web_menu_url = '/api/common/show-customer-profile/' + customer_id;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // Order Approval - CANCEL ORDER BY ORDER ID

  }, {
    key: "getCancelOrderByOrderId_OrderApproval",
    value: function getCancelOrderByOrderId_OrderApproval(order_id) {
      var web_menu_url = '/api/web/cancel-order/' + order_id;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // Order Approval - CANCEL ORDER BY ORDER ID

  }, {
    key: "getDestroyOrderDetailsById_OrderApproval",
    value: function getDestroyOrderDetailsById_OrderApproval(id) {
      var web_menu_url = '/api/mobile/destroy-order-details/' + id;
      return (0, _axios["default"])(web_menu_url, {
        method: 'PUT',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // Order Approval - ADD NEW PRODUCT ON EXIST ORDER

  }, {
    key: "getAddNewProdOnExistOrderByOrderId_OrderApproval",
    value: function getAddNewProdOnExistOrderByOrderId_OrderApproval(order_id, order_detail) {
      console.log(order_id);
      console.log(JSON.stringify(order_detail));
      var web_menu_url = '/api/mobile/add-new-prod-on-exist-order';
      return (0, _axios["default"])(web_menu_url, {
        method: 'POST',
        headers: {
          'Authorization': token_type + ' ' + token
        },
        params: {
          order_id: order_id,
          order_detail: JSON.stringify(order_detail)
        }
      });
    } // Order Approval - UPDATE ORDER BY ORDER ID

  }, {
    key: "getUpdateOrderByOrderId_OrderApproval",
    value: function getUpdateOrderByOrderId_OrderApproval(order_id, order_detail) {
      console.log(order_id);
      console.log(JSON.stringify(order_detail));
      var web_menu_url = '/api/mobile/update-order';
      return (0, _axios["default"])(web_menu_url, {
        method: 'PUT',
        headers: {
          'Authorization': token_type + ' ' + token
        },
        params: {
          order_id: order_id,
          order_detail: JSON.stringify(order_detail)
        }
      });
    } // Order Approval - APPROVE SINGLE ORDER BY ORDER ID (FINAL) - DETAILS SECTION

  }, {
    key: "getApproveSingleOrderByOrderId_OrderApproval",
    value: function getApproveSingleOrderByOrderId_OrderApproval(order_id) {
      console.log(order_id);
      var web_menu_url = '/api/web/approve-single-order/' + order_id;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // Order Approval - APPROVE SELECTED ORDERS - LEFT SECTION

  }, {
    key: "getApproveSelectedOrders_OrderApproval",
    value: function getApproveSelectedOrders_OrderApproval(orders) {
      var web_menu_url;
      return regeneratorRuntime.async(function getApproveSelectedOrders_OrderApproval$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(orders);
              web_menu_url = '/api/web/approve-selected-order';
              _context.next = 4;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                },
                params: {
                  orders: JSON.stringify(orders)
                }
              }));

            case 4:
              return _context.abrupt("return", _context.sent);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    } // Order Approval - APPROVE BULK ORDERS - LEFT SECTION

  }, {
    key: "getApproveBulkOrdersByAllDA_OrderApproval",
    value: function getApproveBulkOrdersByAllDA_OrderApproval(da_id) {
      console.log(da_id);
      var web_menu_url = '/api/web/approve-bulk-order/' + da_id;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // Order Approval - APPROVE BULK ORDERS - LEFT SECTION

  }, {
    key: "getPrintOrderDetails_OrderApproval_INVOICE",
    value: function getPrintOrderDetails_OrderApproval_INVOICE(order_id) {
      console.log(order_id);
      var web_menu_url = '/api/web/print-order-details/' + order_id;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // // CREATE ORDER - SR LIST LOAD
    // getSearchProductDataList_CreateOrderDetailsSection() {
    //   let web_menu_url = '/api/web/dic-wise-users'
    //   return axios(web_menu_url, {
    //     method: 'GET',
    //     headers: {
    //       'Authorization': token_type + ' ' + token
    //     }
    //   })
    // }
    // DELIVERY SCHEDULING - PENDING DELIVERY LIST - LEFT SECTION

  }, {
    key: "getPendingDeliveryAllScheduleInvoiceList_DELIVERY_SCHEDULING",
    value: function getPendingDeliveryAllScheduleInvoiceList_DELIVERY_SCHEDULING() {
      var web_menu_url = '/api/web/pending-delivery-schedule-all-invoice-list';
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // DELIVERY SCHEDULING - PENDING DELIVERY LIST - LEFT SECTION

  }, {
    key: "getPendingDeliveryScheduleInvoiceList_DELIVERY_SCHEDULING",
    value: function getPendingDeliveryScheduleInvoiceList_DELIVERY_SCHEDULING() {
      var web_menu_url = '/api/web/pending-delivery-schedule-invoice-list';
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // DELIVERY SCHEDULING - PENDING DELIVERY LIST - LEFT SECTION

  }, {
    key: "getCreateDeliveryScheduleBy_DA_DELIVERY_SCHEDULING",
    value: function getCreateDeliveryScheduleBy_DA_DELIVERY_SCHEDULING(da_id, date) {
      var web_menu_url = '/api/web/create-delivery-schedule';
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        },
        params: {
          da_id: da_id,
          schedule_date: date
        }
      });
    } // DELIVERY SCHEDULING - PENDING DELIVERY LIST - LEFT SECTION

  }, {
    key: "getPendingDeliveryScheduleInvoiceLBy_DA_ID_DELIVERY_SCHEDULING",
    value: function getPendingDeliveryScheduleInvoiceLBy_DA_ID_DELIVERY_SCHEDULING(da_id) {
      var web_menu_url = '/api/web/pending-delivery-schedule-invoice-list-by-da/' + da_id;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // DELIVERY SCHEDULING - PENDING DELIVERY LIST - LEFT SECTION

  }, {
    key: "getPendingDeliveryScheduleInvoiceLBy_DA_DELIVERY_SCHEDULING",
    value: function getPendingDeliveryScheduleInvoiceLBy_DA_DELIVERY_SCHEDULING(da_id, from_date, to_date) {
      var web_menu_url = '/api/web/pending-delivery-schedule-invoice-list-by-da';
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        },
        params: {
          da_id: da_id,
          from_date: from_date,
          to_date: to_date
        }
      });
    } // DELIVERY SCHEDULING - PRINT INVOICE & CHALLAN - LEFT SECTION

  }, {
    key: "getDeliveryScheduleList_DELIVERY_SCHEDULING_INVOICE_CHALLAN_PRINTING",
    value: function getDeliveryScheduleList_DELIVERY_SCHEDULING_INVOICE_CHALLAN_PRINTING() {
      var web_menu_url = '/api/web/delivery-schedule-list';
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // DELIVERY SCHEDULING - PRINT INVOICE & CHALLAN - LEFT SECTION

  }, {
    key: "getDeliveryScheduleDetails_DELIVERY_SCHEDULING_INVOICE_CHALLAN_PRINTING",
    value: function getDeliveryScheduleDetails_DELIVERY_SCHEDULING_INVOICE_CHALLAN_PRINTING(schedule_id) {
      var web_menu_url = '/api/web/delivery-schedule-details/' + schedule_id;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } // INVOICE-CHALLAN PRINTING - DETAILS SECTION

  }, {
    key: "getPrintInvoiceDetails_INVOICE_CHALLAN_PRINTING",
    value: function getPrintInvoiceDetails_INVOICE_CHALLAN_PRINTING(invoice_id) {
      console.log(invoice_id);
      var web_menu_url = '/api/web/print-invoice-details/' + invoice_id;
      return (0, _axios["default"])(web_menu_url, {
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        }
      });
    } //////////////////////////////////////////////////////////////////////////////////////////
    // Get Doctors Profile

  }, {
    key: "autocomplete",
    value: function autocomplete() {
      var web_menu_url = 'https://api.publicapis.org/entries';
      return (0, _axios["default"])(web_menu_url);
    }
  }, {
    key: "getAllSidebarMenu",
    value: function getAllSidebarMenu() {
      // return axios.get('/jerp_menu');
      return (0, _axios["default"])({
        method: 'GET',
        url: FRSAPIURL + '/jerp_menu'
      });
    }
  }, {
    key: "getAllCompanyList",
    value: function getAllCompanyList() {
      // return axios.get('/company_list');
      return (0, _axios["default"])({
        method: 'GET',
        url: FRSAPIURL + '/company_list'
      });
    }
  }, {
    key: "getAllChatList",
    value: function getAllChatList() {
      // return axios.get('/chat');
      return (0, _axios["default"])({
        method: 'GET',
        url: FRSAPIURL + '/chat'
      });
    }
  }, {
    key: "getAllNoificationList",
    value: function getAllNoificationList() {
      // return axios.get('/noification');
      return (0, _axios["default"])({
        method: 'GET',
        url: FRSAPIURL + '/noification'
      });
    }
  }, {
    key: "getAllUser",
    value: function getAllUser() {
      // return axios.get('/user');
      return (0, _axios["default"])({
        method: 'GET',
        url: FRSAPIURL + '/user'
      });
    }
  }, {
    key: "getUsersList",
    value: function getUsersList() {
      // return axios.get('/users');
      return (0, _axios["default"])({
        method: 'GET',
        url: FRSAPIURL + '/users'
      });
    }
  }, {
    key: "getLoginRequestUserData",
    value: function getLoginRequestUserData(username, password) {
      // return axios.get(`/users?username=${username}&password=${password}`);
      return (0, _axios["default"])({
        method: 'GET',
        url: FRSAPIURL + '/' + "users?username=".concat(username, "&password=").concat(password)
      });
    }
  }, {
    key: "getPassengersList",
    value: function getPassengersList(itemsPerPage, pageNumber) {
      console.log(itemsPerPage + '    ' + pageNumber); // return axios.get('/passengers_list');

      return (0, _axios["default"])({
        method: 'GET',
        url: FRSAPIURL + '/passengers_list'
      }); // return axios.get("https://api.instantwebtools.net/v1/passenger?size=" +
      //                   itemsPerPage + "&page=" + pageNumber);
      // const url = new URL("http://localhost:3001");
      // return axios({
      //   url: url,
      //   method: "GET"
      // });
    }
  }, {
    key: "getCompetitorsDataMgt",
    value: function getCompetitorsDataMgt() {
      // return axios.get('/competitors_data');
      return (0, _axios["default"])({
        method: 'GET',
        url: FRSAPIURL + '/competitors_data'
      });
    }
  }, {
    key: "getSBUData",
    value: function getSBUData() {
      // return axios.get('/sub_data');
      return (0, _axios["default"])({
        method: 'GET',
        url: FRSAPIURL + '/sub_data'
      });
    }
  }, {
    key: "getSBUSisterConcernData",
    value: function getSBUSisterConcernData() {
      // return axios.get('/sister_concern_data');
      return (0, _axios["default"])({
        method: 'GET',
        url: FRSAPIURL + '/sister_concern_data'
      });
    }
  }, {
    key: "getSDGeoLocation",
    value: function getSDGeoLocation() {
      // return axios.get('/geo_location');
      return (0, _axios["default"])({
        method: 'GET',
        url: FRSAPIURL + '/geo_location'
      });
    }
  }, {
    key: "getDAlistForDeliverySchedule",
    value: function getDAlistForDeliverySchedule() {
      return (0, _axios["default"])(FRSAPIURL + '/DA_list', {
        method: 'GET' // headers: {
        //   'Authorization': token_type + ' ' + token
        // }

      });
    }
  }, {
    key: "getInvoiceChallanListForDeliverySchedule",
    value: function getInvoiceChallanListForDeliverySchedule() {
      return (0, _axios["default"])(FRSAPIURL + '/delivery_schedule_invoice_chalan_list', {
        method: 'GET' // headers: {
        //   'Authorization': token_type + ' ' + token
        // }

      });
    }
  }]);

  return PostService;
}();
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


exports["default"] = PostService;