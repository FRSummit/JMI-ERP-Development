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
      return regeneratorRuntime.async(function login$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap((0, _axios["default"])({
                method: 'POST',
                url: '/api/auth/login',
                data: {
                  username: username,
                  password: password
                }
              }));

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      });
    } // JMI ERP MENU DATA

  }, {
    key: "getWebSideMenu",
    value: function getWebSideMenu() {
      var web_menu_url;
      return regeneratorRuntime.async(function getWebSideMenu$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              web_menu_url = '/api/system/WebMenu';
              _context2.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context2.abrupt("return", _context2.sent);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "getWEB_SystemAssignedSBU",
    value: function getWEB_SystemAssignedSBU() {
      var web_menu_url;
      return regeneratorRuntime.async(function getWEB_SystemAssignedSBU$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              web_menu_url = '/api/system/AssignedSBU';
              _context3.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context3.abrupt("return", _context3.sent);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      });
    } // DIC WISE USERS LIST

  }, {
    key: "getDICWiseUsers_MonthlyDeliveryPlan",
    value: function getDICWiseUsers_MonthlyDeliveryPlan() {
      var web_menu_url;
      return regeneratorRuntime.async(function getDICWiseUsers_MonthlyDeliveryPlan$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              web_menu_url = '/api/web/dic-wise-users';
              _context4.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context4.abrupt("return", _context4.sent);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      });
    } // 

  }, {
    key: "getDICDeliveryLocations_MonthlyDeliveryPlan",
    value: function getDICDeliveryLocations_MonthlyDeliveryPlan() {
      var web_menu_url;
      return regeneratorRuntime.async(function getDICDeliveryLocations_MonthlyDeliveryPlan$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              web_menu_url = '/api/web/dic-delivery-locations';
              _context5.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context5.abrupt("return", _context5.sent);

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      });
    } // MONTHLY DELIVERY PLAN
    // MOUNTED 2'ND API CALL
    // MONTH SELECTION API CALL

  }, {
    key: "getDICMonthlyDeliveryPlan_MMYYYY_MonthlyDeliveryPlan",
    value: function getDICMonthlyDeliveryPlan_MMYYYY_MonthlyDeliveryPlan(mmyyyy) {
      var web_menu_url;
      return regeneratorRuntime.async(function getDICMonthlyDeliveryPlan_MMYYYY_MonthlyDeliveryPlan$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              // console.log(mmyyyy)
              web_menu_url = '/api/web/dic-monthly-delivery-plan/' + mmyyyy;
              _context6.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context6.abrupt("return", _context6.sent);

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      });
    } // MONTHLY DELIVERY PLAN - LEFT SECTION - ALL DA INFO LIST
    // MOUNTED 1'ST API CALL
    // MONTH SELECTION API CALL

  }, {
    key: "getAllDAInfo_MMYYYY_MonthlyDeliveryPlan",
    value: function getAllDAInfo_MMYYYY_MonthlyDeliveryPlan(mmyyyy) {
      var web_menu_url;
      return regeneratorRuntime.async(function getAllDAInfo_MMYYYY_MonthlyDeliveryPlan$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              // console.log(mmyyyy)
              web_menu_url = '/api/web/all-da-info/' + mmyyyy;
              _context7.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context7.abrupt("return", _context7.sent);

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      });
    } // MONTHLY DELIVERY PLAN - RIGHT SECTION DATA BY SELECTED MONTH_YEAR & FORCE ID

  }, {
    key: "getMonthlyDeliveryPlanByForceId_MonthlyDeliveryPlan",
    value: function getMonthlyDeliveryPlanByForceId_MonthlyDeliveryPlan(mmyyyy, force_id) {
      var web_menu_url;
      return regeneratorRuntime.async(function getMonthlyDeliveryPlanByForceId_MonthlyDeliveryPlan$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              // console.log(mmyyyy + '    ' + force_id)
              web_menu_url = '/api/web/monthly-delivery-plan-by-force/' + mmyyyy + '/' + force_id;
              _context8.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context8.abrupt("return", _context8.sent);

            case 4:
            case "end":
              return _context8.stop();
          }
        }
      });
    } // MONTHLY DELIVERY PLAN - RIGHT SECTION DATA BY SELECTED MONTH_YEAR & FORCE ID

  }, {
    key: "getSD_DPD_PreviousMonthBySource_MonthlyDeliveryPlan",
    value: function getSD_DPD_PreviousMonthBySource_MonthlyDeliveryPlan(force_id) {
      var web_menu_url;
      return regeneratorRuntime.async(function getSD_DPD_PreviousMonthBySource_MonthlyDeliveryPlan$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              // console.log(mmyyyy + '    ' + force_id)
              web_menu_url = '/api/web/get-sd-dpd-previous-month-by-source/' + force_id;
              _context9.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context9.abrupt("return", _context9.sent);

            case 4:
            case "end":
              return _context9.stop();
          }
        }
      });
    } // CREATE A DAY FROM CALENDAR

  }, {
    key: "getCreateSDDpdDay_MonthlyDeliveryPlan",
    value: function getCreateSDDpdDay_MonthlyDeliveryPlan(id, delivery_date) {
      var web_menu_url;
      return regeneratorRuntime.async(function getCreateSDDpdDay_MonthlyDeliveryPlan$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              // console.log(dpf_id + '    ' + delivery_date)
              web_menu_url = '/api/web/create-sd-dpd-day/' + id + '/' + delivery_date;
              _context10.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context10.abrupt("return", _context10.sent);

            case 4:
            case "end":
              return _context10.stop();
          }
        }
      });
    } // DELETE A DAY FROM CALENDAR

  }, {
    key: "getDestroySDDpdDay_MonthlyDeliveryPlan",
    value: function getDestroySDDpdDay_MonthlyDeliveryPlan(id, delivery_date) {
      var web_menu_url;
      return regeneratorRuntime.async(function getDestroySDDpdDay_MonthlyDeliveryPlan$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              // console.log(dpf_id + '    ' + delivery_date)
              web_menu_url = '/api/web/destroy-sd-dpd-day/' + id + '/' + delivery_date;
              _context11.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context11.abrupt("return", _context11.sent);

            case 4:
            case "end":
              return _context11.stop();
          }
        }
      });
    } // MONTHLY DELIVERY PLAN - CREATE SD DPD AREA FROM LIST FOR OCCUPIED DA / CREATE NEW TERRITORY/CALENDAR

  }, {
    key: "getCreateSD_DPD_AREA_ForOccupiedDA",
    value: function getCreateSD_DPD_AREA_ForOccupiedDA(dpf_id, area_id) {
      var web_menu_url;
      return regeneratorRuntime.async(function getCreateSD_DPD_AREA_ForOccupiedDA$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              // console.log(dpf_id + '    ' + area_id)
              web_menu_url = '/api/web/create-sd-dpd-area/' + dpf_id + '/' + area_id;
              _context12.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context12.abrupt("return", _context12.sent);

            case 4:
            case "end":
              return _context12.stop();
          }
        }
      });
    } // MONTHLY DELIVERY PLAN - CREATE SD DPD AREA FROM LIST FOR AVAILABLE DA / CREATE NEW TERRITORY/CALENDAR

  }, {
    key: "getCreateSD_DPD_AREA_ForAvailableDA",
    value: function getCreateSD_DPD_AREA_ForAvailableDA(dp_id, force_id, area_id) {
      var web_menu_url;
      return regeneratorRuntime.async(function getCreateSD_DPD_AREA_ForAvailableDA$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              // console.log(dpf_id + '    ' + area_id)
              web_menu_url = '/api/web/create-sd-dpd-area-for-available-force/' + dp_id + '/' + force_id + '/' + area_id;
              _context13.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context13.abrupt("return", _context13.sent);

            case 4:
            case "end":
              return _context13.stop();
          }
        }
      });
    } // MONTHLY DELIVERY PLAN - CREATE SD DPD AREA FROM LIST FOR AVAILABLE DA FOR FUTURE / CREATE NEW TERRITORY/CALENDAR

  }, {
    key: "getCreateSD_DPD_AREA_ForAvailableDA_ForFuture",
    value: function getCreateSD_DPD_AREA_ForAvailableDA_ForFuture(mmyyyy, force_id, area_id) {
      var web_menu_url;
      return regeneratorRuntime.async(function getCreateSD_DPD_AREA_ForAvailableDA_ForFuture$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              // console.log(dpf_id + '    ' + area_id)
              web_menu_url = '/api/web/create-sd-delivery-plan-for-available-force/' + mmyyyy + '/' + force_id + '/' + area_id;
              _context14.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context14.abrupt("return", _context14.sent);

            case 4:
            case "end":
              return _context14.stop();
          }
        }
      });
    } // MONTHLY DELIVERY PLAN - CREATE SD DPD AREA FROM LIST / CREATE NEW TERRITORY/CALENDAR

  }, {
    key: "getDestroySD_DPD_AREA",
    value: function getDestroySD_DPD_AREA(dpf_id, area_id) {
      var web_menu_url;
      return regeneratorRuntime.async(function getDestroySD_DPD_AREA$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              // console.log(dpf_id + '    ' + area_id)
              web_menu_url = '/api/web/destroy-sd-dpd-area/' + dpf_id + '/' + area_id;
              _context15.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context15.abrupt("return", _context15.sent);

            case 4:
            case "end":
              return _context15.stop();
          }
        }
      });
    } // MONTHLY DELIVERY PLAN - COPY TERRITORY

  }, {
    key: "getCopySD_DPD_Area",
    value: function getCopySD_DPD_Area(selected_territory, selected_modal_area_id) {
      var web_menu_url;
      return regeneratorRuntime.async(function getCopySD_DPD_Area$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              // console.log(dpf_id + '    ' + area_id)
              web_menu_url = '/api/web/copy-sd-dpd-area/' + selected_territory + '/' + selected_modal_area_id;
              _context16.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context16.abrupt("return", _context16.sent);

            case 4:
            case "end":
              return _context16.stop();
          }
        }
      });
    } // MONTHLY DELIVERY PLAN - DELETE ALL MONTH DATA

  }, {
    key: "getSD_DPD_COPY_EXECUTE_PROCEDURE",
    value: function getSD_DPD_COPY_EXECUTE_PROCEDURE(source_mnyr, target_mnyr) {
      var web_menu_url;
      return regeneratorRuntime.async(function getSD_DPD_COPY_EXECUTE_PROCEDURE$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              web_menu_url = '/api/web/sd-dpd-copy-execute-procedure/' + source_mnyr + '/' + target_mnyr;
              _context17.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context17.abrupt("return", _context17.sent);

            case 4:
            case "end":
              return _context17.stop();
          }
        }
      });
    } // MONTHLY DELIVERY PLAN - DELETE ALL MONTH DATA

  }, {
    key: "getSD_DPD_DELETE_EXECUTE_PROCEDURE",
    value: function getSD_DPD_DELETE_EXECUTE_PROCEDURE(mmyyyy) {
      var web_menu_url;
      return regeneratorRuntime.async(function getSD_DPD_DELETE_EXECUTE_PROCEDURE$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              web_menu_url = '/api/web/sd-dpd-delete-execute-procedure/' + mmyyyy;
              _context18.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context18.abrupt("return", _context18.sent);

            case 4:
            case "end":
              return _context18.stop();
          }
        }
      });
    } // MONTHLY DELIVERY PLAN - DELETE ALL MONTH DATA

  }, {
    key: "getSD_DPD_PreviousMonthByDP_Mnyr",
    value: function getSD_DPD_PreviousMonthByDP_Mnyr(mmyyyy) {
      var web_menu_url;
      return regeneratorRuntime.async(function getSD_DPD_PreviousMonthByDP_Mnyr$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              web_menu_url = '/api/web/get-sd-dpd-previous-month-by-dp-mnyr/' + mmyyyy;
              _context19.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context19.abrupt("return", _context19.sent);

            case 4:
            case "end":
              return _context19.stop();
          }
        }
      });
    } // MONTHLY DELIVERY PLAN - DELETE ALL MONTH DATA

  }, {
    key: "getExecuteProcedureCopyDeliveryPlanByForce",
    value: function getExecuteProcedureCopyDeliveryPlanByForce(soruce_date, target_date, force_id) {
      var web_menu_url;
      return regeneratorRuntime.async(function getExecuteProcedureCopyDeliveryPlanByForce$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              web_menu_url = '/api/web/execute-procedure-copy-delivery-plan-by-force/' + soruce_date + '/' + target_date + '/' + force_id;
              _context20.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context20.abrupt("return", _context20.sent);

            case 4:
            case "end":
              return _context20.stop();
          }
        }
      });
    } // MONTHLY DELIVERY PLAN - REMVOE ALL AREA FOR FORCE OR DA

  }, {
    key: "getExecuteDeleteForceProcedure_All_Force_delete_for_DA",
    value: function getExecuteDeleteForceProcedure_All_Force_delete_for_DA(mmyyyy, force_id) {
      var web_menu_url;
      return regeneratorRuntime.async(function getExecuteDeleteForceProcedure_All_Force_delete_for_DA$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              web_menu_url = '/api/web/execute-delete-force-procedure/' + mmyyyy + '/' + force_id;
              _context21.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context21.abrupt("return", _context21.sent);

            case 4:
            case "end":
              return _context21.stop();
          }
        }
      });
    } //////////////////////////////////////////////////////////////////////////////////////////
    // Doctors
    //////////////////////////////////////////////////////////////////////////////////////////
    // Get Doctors Profile

  }, {
    key: "getAdvisorProfile",
    value: function getAdvisorProfile(id) {
      var web_menu_url;
      return regeneratorRuntime.async(function getAdvisorProfile$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              web_menu_url = 'api/mobile/get-advisor-profile/' + id;
              _context22.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context22.abrupt("return", _context22.sent);

            case 4:
            case "end":
              return _context22.stop();
          }
        }
      });
    } //////////////////////////////////////////////////////////////////////////////////////////
    // Order
    // CREATE ORDER

  }, {
    key: "getAllCustomerForDepot_CreateOrderLeftList",
    value: function getAllCustomerForDepot_CreateOrderLeftList() {
      var web_menu_url;
      return regeneratorRuntime.async(function getAllCustomerForDepot_CreateOrderLeftList$(_context23) {
        while (1) {
          switch (_context23.prev = _context23.next) {
            case 0:
              web_menu_url = '/api/web/all-customers-for-depot';
              _context23.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context23.abrupt("return", _context23.sent);

            case 4:
            case "end":
              return _context23.stop();
          }
        }
      });
    } // CREATE ORDER

  }, {
    key: "getCustomerInfoForDepot_CreateOrderLeftList",
    value: function getCustomerInfoForDepot_CreateOrderLeftList(customer_id) {
      var web_menu_url;
      return regeneratorRuntime.async(function getCustomerInfoForDepot_CreateOrderLeftList$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              web_menu_url = '/api/web/customer-info-for-depot/' + customer_id;
              _context24.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context24.abrupt("return", _context24.sent);

            case 4:
            case "end":
              return _context24.stop();
          }
        }
      });
    } // CREATE ORDER

  }, {
    key: "getSearchProductDataList_CreateOrderDetailsSection",
    value: function getSearchProductDataList_CreateOrderDetailsSection() {
      var web_menu_url;
      return regeneratorRuntime.async(function getSearchProductDataList_CreateOrderDetailsSection$(_context25) {
        while (1) {
          switch (_context25.prev = _context25.next) {
            case 0:
              web_menu_url = '/api/web/search-product-data-list';
              _context25.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context25.abrupt("return", _context25.sent);

            case 4:
            case "end":
              return _context25.stop();
          }
        }
      });
    }
  }, {
    key: "getAreaListByUser_CreateOrderDetailsSection",
    value: function getAreaListByUser_CreateOrderDetailsSection(user_id) {
      var web_menu_url;
      return regeneratorRuntime.async(function getAreaListByUser_CreateOrderDetailsSection$(_context26) {
        while (1) {
          switch (_context26.prev = _context26.next) {
            case 0:
              web_menu_url = '/api/common/area-list-by-user/' + user_id;
              _context26.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context26.abrupt("return", _context26.sent);

            case 4:
            case "end":
              return _context26.stop();
          }
        }
      });
    } // CREATE ORDER - SEND SELECTED PRODUCT LIST

  }, {
    key: "getFindProductOffer_CreateOrderDetailsSection",
    value: function getFindProductOffer_CreateOrderDetailsSection(prod_db_list, sbu_id, customer_id, date) {
      var web_menu_url;
      return regeneratorRuntime.async(function getFindProductOffer_CreateOrderDetailsSection$(_context27) {
        while (1) {
          switch (_context27.prev = _context27.next) {
            case 0:
              console.log(JSON.stringify(prod_db_list));
              console.log(date);
              web_menu_url = '/api/web/find-product-offer';
              _context27.next = 5;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
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
              }));

            case 5:
              return _context27.abrupt("return", _context27.sent);

            case 6:
            case "end":
              return _context27.stop();
          }
        }
      });
    } // CREATE ORDER - SUBMIT ORDER TO CREATE - SEND SELECTED PRODUCT LIST

  }, {
    key: "getCreateOrder_CreateOrderDetailsSection",
    value: function getCreateOrder_CreateOrderDetailsSection(prod_db_list, sbu_id, customer_id, date, sales_area_id) {
      var web_menu_url;
      return regeneratorRuntime.async(function getCreateOrder_CreateOrderDetailsSection$(_context28) {
        while (1) {
          switch (_context28.prev = _context28.next) {
            case 0:
              console.log(JSON.stringify(prod_db_list));
              web_menu_url = '/api/mobile/create-order';
              _context28.next = 4;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'POST',
                headers: {
                  'Authorization': token_type + ' ' + token
                },
                params: {
                  order_detail: JSON.stringify(prod_db_list),
                  customer_id: customer_id,
                  sbu_id: sbu_id,
                  date: date,
                  sales_area_id: sales_area_id
                }
              }));

            case 4:
              return _context28.abrupt("return", _context28.sent);

            case 5:
            case "end":
              return _context28.stop();
          }
        }
      });
    } // -------------------------------------------------------------------------------
    // Order Approval - SUBMIT ORDER TO CREATE - SEND SELECTED PRODUCT LIST

  }, {
    key: "getAllPendingOrdersCustomerList_OrderApprovalLeftSide",
    value: function getAllPendingOrdersCustomerList_OrderApprovalLeftSide() {
      var web_menu_url;
      return regeneratorRuntime.async(function getAllPendingOrdersCustomerList_OrderApprovalLeftSide$(_context29) {
        while (1) {
          switch (_context29.prev = _context29.next) {
            case 0:
              // let web_menu_url = '/api/web/all-pending-orders-customer-list'
              web_menu_url = '/api/web/all-pending-approval-orders-customer-list';
              _context29.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context29.abrupt("return", _context29.sent);

            case 4:
            case "end":
              return _context29.stop();
          }
        }
      });
    } // Order Approval - SUBMIT ORDER TO CREATE - SEND SELECTED PRODUCT LIST

  }, {
    key: "getSelectedPendingOrderById_OrderApproval",
    value: function getSelectedPendingOrderById_OrderApproval(order_id) {
      var web_menu_url;
      return regeneratorRuntime.async(function getSelectedPendingOrderById_OrderApproval$(_context30) {
        while (1) {
          switch (_context30.prev = _context30.next) {
            case 0:
              web_menu_url = '/api/web/pending-order-details/' + order_id;
              _context30.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context30.abrupt("return", _context30.sent);

            case 4:
            case "end":
              return _context30.stop();
          }
        }
      });
    } // Order Approval - SHOW CUSTOMER PROFILE

  }, {
    key: "getShowCustomerProfile_OrderApproval",
    value: function getShowCustomerProfile_OrderApproval(customer_id) {
      var web_menu_url;
      return regeneratorRuntime.async(function getShowCustomerProfile_OrderApproval$(_context31) {
        while (1) {
          switch (_context31.prev = _context31.next) {
            case 0:
              web_menu_url = '/api/common/show-customer-profile/' + customer_id;
              _context31.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context31.abrupt("return", _context31.sent);

            case 4:
            case "end":
              return _context31.stop();
          }
        }
      });
    } // Order Approval - CANCEL ORDER BY ORDER ID

  }, {
    key: "getCancelOrderByOrderId_OrderApproval",
    value: function getCancelOrderByOrderId_OrderApproval(order_id) {
      var web_menu_url;
      return regeneratorRuntime.async(function getCancelOrderByOrderId_OrderApproval$(_context32) {
        while (1) {
          switch (_context32.prev = _context32.next) {
            case 0:
              web_menu_url = '/api/web/cancel-order/' + order_id;
              _context32.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context32.abrupt("return", _context32.sent);

            case 4:
            case "end":
              return _context32.stop();
          }
        }
      });
    } // Order Approval - CANCEL ORDER BY ORDER ID

  }, {
    key: "getDestroyOrderDetailsById_OrderApproval",
    value: function getDestroyOrderDetailsById_OrderApproval(id) {
      var web_menu_url;
      return regeneratorRuntime.async(function getDestroyOrderDetailsById_OrderApproval$(_context33) {
        while (1) {
          switch (_context33.prev = _context33.next) {
            case 0:
              web_menu_url = '/api/mobile/destroy-order-details/' + id;
              _context33.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'PUT',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context33.abrupt("return", _context33.sent);

            case 4:
            case "end":
              return _context33.stop();
          }
        }
      });
    } // Order Approval - ADD NEW PRODUCT ON EXIST ORDER

  }, {
    key: "getAddNewProdOnExistOrderByOrderId_OrderApproval",
    value: function getAddNewProdOnExistOrderByOrderId_OrderApproval(order_id, order_detail) {
      var web_menu_url;
      return regeneratorRuntime.async(function getAddNewProdOnExistOrderByOrderId_OrderApproval$(_context34) {
        while (1) {
          switch (_context34.prev = _context34.next) {
            case 0:
              console.log(order_id);
              console.log(JSON.stringify(order_detail));
              web_menu_url = '/api/mobile/add-new-prod-on-exist-order';
              _context34.next = 5;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'POST',
                headers: {
                  'Authorization': token_type + ' ' + token
                },
                params: {
                  order_id: order_id,
                  order_detail: JSON.stringify(order_detail)
                }
              }));

            case 5:
              return _context34.abrupt("return", _context34.sent);

            case 6:
            case "end":
              return _context34.stop();
          }
        }
      });
    } // Order Approval - UPDATE ORDER BY ORDER ID

  }, {
    key: "getUpdateOrderByOrderId_OrderApproval",
    value: function getUpdateOrderByOrderId_OrderApproval(order_id, order_detail) {
      var web_menu_url;
      return regeneratorRuntime.async(function getUpdateOrderByOrderId_OrderApproval$(_context35) {
        while (1) {
          switch (_context35.prev = _context35.next) {
            case 0:
              console.log(order_id);
              console.log(JSON.stringify(order_detail));
              web_menu_url = '/api/mobile/update-order';
              _context35.next = 5;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'PUT',
                headers: {
                  'Authorization': token_type + ' ' + token
                },
                params: {
                  order_id: order_id,
                  order_detail: JSON.stringify(order_detail)
                }
              }));

            case 5:
              return _context35.abrupt("return", _context35.sent);

            case 6:
            case "end":
              return _context35.stop();
          }
        }
      });
    } // Order Approval - APPROVE SINGLE ORDER BY ORDER ID (FINAL) - DETAILS SECTION

  }, {
    key: "getApproveSingleOrderByOrderId_OrderApproval",
    value: function getApproveSingleOrderByOrderId_OrderApproval(order_id) {
      var web_menu_url;
      return regeneratorRuntime.async(function getApproveSingleOrderByOrderId_OrderApproval$(_context36) {
        while (1) {
          switch (_context36.prev = _context36.next) {
            case 0:
              console.log(order_id);
              web_menu_url = '/api/web/approve-single-order/' + order_id;
              _context36.next = 4;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 4:
              return _context36.abrupt("return", _context36.sent);

            case 5:
            case "end":
              return _context36.stop();
          }
        }
      });
    } // Order Approval - APPROVE SELECTED ORDERS - LEFT SECTION

  }, {
    key: "getApproveSelectedOrders_OrderApproval",
    value: function getApproveSelectedOrders_OrderApproval(orders) {
      var web_menu_url;
      return regeneratorRuntime.async(function getApproveSelectedOrders_OrderApproval$(_context37) {
        while (1) {
          switch (_context37.prev = _context37.next) {
            case 0:
              console.log(orders);
              web_menu_url = '/api/web/approve-selected-order';
              _context37.next = 4;
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
              return _context37.abrupt("return", _context37.sent);

            case 5:
            case "end":
              return _context37.stop();
          }
        }
      });
    } // Order Approval - APPROVE BULK ORDERS - LEFT SECTION

  }, {
    key: "getApproveBulkOrdersByAllDA_OrderApproval",
    value: function getApproveBulkOrdersByAllDA_OrderApproval(da_id) {
      var web_menu_url;
      return regeneratorRuntime.async(function getApproveBulkOrdersByAllDA_OrderApproval$(_context38) {
        while (1) {
          switch (_context38.prev = _context38.next) {
            case 0:
              console.log(da_id);
              web_menu_url = '/api/web/approve-bulk-order/' + da_id;
              _context38.next = 4;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 4:
              return _context38.abrupt("return", _context38.sent);

            case 5:
            case "end":
              return _context38.stop();
          }
        }
      });
    } // Order Approval - APPROVE BULK ORDERS - LEFT SECTION

  }, {
    key: "getPrintOrderDetails_OrderApproval_INVOICE",
    value: function getPrintOrderDetails_OrderApproval_INVOICE(order_id) {
      var web_menu_url;
      return regeneratorRuntime.async(function getPrintOrderDetails_OrderApproval_INVOICE$(_context39) {
        while (1) {
          switch (_context39.prev = _context39.next) {
            case 0:
              console.log(order_id);
              web_menu_url = '/api/web/print-order-details/' + order_id;
              _context39.next = 4;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 4:
              return _context39.abrupt("return", _context39.sent);

            case 5:
            case "end":
              return _context39.stop();
          }
        }
      });
    } // // CREATE ORDER - SR LIST LOAD
    // getSearchProductDataList_CreateOrderDetailsSection() {
    //   let web_menu_url = '/api/web/dic-wise-users'
    //   return await axios(web_menu_url, {
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
      var web_menu_url;
      return regeneratorRuntime.async(function getPendingDeliveryAllScheduleInvoiceList_DELIVERY_SCHEDULING$(_context40) {
        while (1) {
          switch (_context40.prev = _context40.next) {
            case 0:
              web_menu_url = '/api/web/pending-delivery-schedule-all-invoice-list';
              _context40.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context40.abrupt("return", _context40.sent);

            case 4:
            case "end":
              return _context40.stop();
          }
        }
      });
    } // DELIVERY SCHEDULING - PENDING DELIVERY LIST - LEFT SECTION

  }, {
    key: "getPendingDeliveryScheduleInvoiceList_DELIVERY_SCHEDULING",
    value: function getPendingDeliveryScheduleInvoiceList_DELIVERY_SCHEDULING() {
      var web_menu_url;
      return regeneratorRuntime.async(function getPendingDeliveryScheduleInvoiceList_DELIVERY_SCHEDULING$(_context41) {
        while (1) {
          switch (_context41.prev = _context41.next) {
            case 0:
              web_menu_url = '/api/web/pending-delivery-schedule-invoice-list';
              _context41.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context41.abrupt("return", _context41.sent);

            case 4:
            case "end":
              return _context41.stop();
          }
        }
      });
    } // DELIVERY SCHEDULING - PENDING DELIVERY LIST - LEFT SECTION

  }, {
    key: "getCreateDeliveryScheduleBy_DA_DELIVERY_SCHEDULING",
    value: function getCreateDeliveryScheduleBy_DA_DELIVERY_SCHEDULING(da_id, date) {
      var web_menu_url;
      return regeneratorRuntime.async(function getCreateDeliveryScheduleBy_DA_DELIVERY_SCHEDULING$(_context42) {
        while (1) {
          switch (_context42.prev = _context42.next) {
            case 0:
              web_menu_url = '/api/web/create-delivery-schedule';
              _context42.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                },
                params: {
                  da_id: da_id,
                  schedule_date: date
                }
              }));

            case 3:
              return _context42.abrupt("return", _context42.sent);

            case 4:
            case "end":
              return _context42.stop();
          }
        }
      });
    } // DELIVERY SCHEDULING - PENDING DELIVERY LIST - LEFT SECTION

  }, {
    key: "getPendingDeliveryScheduleInvoiceLBy_DA_ID_DELIVERY_SCHEDULING",
    value: function getPendingDeliveryScheduleInvoiceLBy_DA_ID_DELIVERY_SCHEDULING(da_id) {
      var web_menu_url;
      return regeneratorRuntime.async(function getPendingDeliveryScheduleInvoiceLBy_DA_ID_DELIVERY_SCHEDULING$(_context43) {
        while (1) {
          switch (_context43.prev = _context43.next) {
            case 0:
              web_menu_url = '/api/web/pending-delivery-schedule-invoice-list-by-da/' + da_id;
              _context43.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context43.abrupt("return", _context43.sent);

            case 4:
            case "end":
              return _context43.stop();
          }
        }
      });
    } // DELIVERY SCHEDULING - PENDING DELIVERY LIST - LEFT SECTION

  }, {
    key: "getPendingDeliveryScheduleInvoiceLBy_DA_DELIVERY_SCHEDULING",
    value: function getPendingDeliveryScheduleInvoiceLBy_DA_DELIVERY_SCHEDULING(da_id, from_date, to_date) {
      var web_menu_url;
      return regeneratorRuntime.async(function getPendingDeliveryScheduleInvoiceLBy_DA_DELIVERY_SCHEDULING$(_context44) {
        while (1) {
          switch (_context44.prev = _context44.next) {
            case 0:
              web_menu_url = '/api/web/pending-delivery-schedule-invoice-list-by-da';
              _context44.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                },
                params: {
                  da_id: da_id,
                  from_date: from_date,
                  to_date: to_date
                }
              }));

            case 3:
              return _context44.abrupt("return", _context44.sent);

            case 4:
            case "end":
              return _context44.stop();
          }
        }
      });
    } // DELIVERY SCHEDULING - PRINT INVOICE & CHALLAN - LEFT SECTION

  }, {
    key: "getDeliveryScheduleList_DELIVERY_SCHEDULING_INVOICE_CHALLAN_PRINTING",
    value: function getDeliveryScheduleList_DELIVERY_SCHEDULING_INVOICE_CHALLAN_PRINTING() {
      var web_menu_url;
      return regeneratorRuntime.async(function getDeliveryScheduleList_DELIVERY_SCHEDULING_INVOICE_CHALLAN_PRINTING$(_context45) {
        while (1) {
          switch (_context45.prev = _context45.next) {
            case 0:
              web_menu_url = '/api/web/delivery-schedule-list';
              _context45.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context45.abrupt("return", _context45.sent);

            case 4:
            case "end":
              return _context45.stop();
          }
        }
      });
    } // DELIVERY SCHEDULING - PRINT INVOICE & CHALLAN - LEFT SECTION

  }, {
    key: "getDeliveryScheduleDetails_DELIVERY_SCHEDULING_INVOICE_CHALLAN_PRINTING",
    value: function getDeliveryScheduleDetails_DELIVERY_SCHEDULING_INVOICE_CHALLAN_PRINTING(schedule_id) {
      var web_menu_url;
      return regeneratorRuntime.async(function getDeliveryScheduleDetails_DELIVERY_SCHEDULING_INVOICE_CHALLAN_PRINTING$(_context46) {
        while (1) {
          switch (_context46.prev = _context46.next) {
            case 0:
              web_menu_url = '/api/web/delivery-schedule-details/' + schedule_id;
              _context46.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context46.abrupt("return", _context46.sent);

            case 4:
            case "end":
              return _context46.stop();
          }
        }
      });
    } // INVOICE-CHALLAN PRINTING - DETAILS SECTION

  }, {
    key: "getPrintInvoiceDetails_INVOICE_CHALLAN_PRINTING",
    value: function getPrintInvoiceDetails_INVOICE_CHALLAN_PRINTING(invoice_id) {
      var web_menu_url;
      return regeneratorRuntime.async(function getPrintInvoiceDetails_INVOICE_CHALLAN_PRINTING$(_context47) {
        while (1) {
          switch (_context47.prev = _context47.next) {
            case 0:
              console.log(invoice_id);
              web_menu_url = '/api/web/print-invoice-details/' + invoice_id;
              _context47.next = 4;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 4:
              return _context47.abrupt("return", _context47.sent);

            case 5:
            case "end":
              return _context47.stop();
          }
        }
      });
    } // DELEVERIES - LEFT SECTION

  }, {
    key: "getPendingDeliveredInvoiceList_DELEVERIES",
    value: function getPendingDeliveredInvoiceList_DELEVERIES() {
      var web_menu_url;
      return regeneratorRuntime.async(function getPendingDeliveredInvoiceList_DELEVERIES$(_context48) {
        while (1) {
          switch (_context48.prev = _context48.next) {
            case 0:
              web_menu_url = '/api/web/pending-delivered-invoice-list';
              _context48.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url, {
                method: 'GET',
                headers: {
                  'Authorization': token_type + ' ' + token
                }
              }));

            case 3:
              return _context48.abrupt("return", _context48.sent);

            case 4:
            case "end":
              return _context48.stop();
          }
        }
      });
    } //////////////////////////////////////////////////////////////////////////////////////////
    // Get Doctors Profile

  }, {
    key: "autocomplete",
    value: function autocomplete() {
      var web_menu_url;
      return regeneratorRuntime.async(function autocomplete$(_context49) {
        while (1) {
          switch (_context49.prev = _context49.next) {
            case 0:
              web_menu_url = 'https://api.publicapis.org/entries';
              _context49.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])(web_menu_url));

            case 3:
              return _context49.abrupt("return", _context49.sent);

            case 4:
            case "end":
              return _context49.stop();
          }
        }
      });
    }
  }, {
    key: "getAllSidebarMenu",
    value: function getAllSidebarMenu() {
      return regeneratorRuntime.async(function getAllSidebarMenu$(_context50) {
        while (1) {
          switch (_context50.prev = _context50.next) {
            case 0:
              _context50.next = 2;
              return regeneratorRuntime.awrap((0, _axios["default"])({
                method: 'GET',
                url: FRSAPIURL + '/jerp_menu'
              }));

            case 2:
              return _context50.abrupt("return", _context50.sent);

            case 3:
            case "end":
              return _context50.stop();
          }
        }
      });
    }
  }, {
    key: "getAllCompanyList",
    value: function getAllCompanyList() {
      return regeneratorRuntime.async(function getAllCompanyList$(_context51) {
        while (1) {
          switch (_context51.prev = _context51.next) {
            case 0:
              _context51.next = 2;
              return regeneratorRuntime.awrap((0, _axios["default"])({
                method: 'GET',
                url: FRSAPIURL + '/company_list'
              }));

            case 2:
              return _context51.abrupt("return", _context51.sent);

            case 3:
            case "end":
              return _context51.stop();
          }
        }
      });
    }
  }, {
    key: "getAllChatList",
    value: function getAllChatList() {
      return regeneratorRuntime.async(function getAllChatList$(_context52) {
        while (1) {
          switch (_context52.prev = _context52.next) {
            case 0:
              _context52.next = 2;
              return regeneratorRuntime.awrap((0, _axios["default"])({
                method: 'GET',
                url: FRSAPIURL + '/chat'
              }));

            case 2:
              return _context52.abrupt("return", _context52.sent);

            case 3:
            case "end":
              return _context52.stop();
          }
        }
      });
    }
  }, {
    key: "getAllNoificationList",
    value: function getAllNoificationList() {
      return regeneratorRuntime.async(function getAllNoificationList$(_context53) {
        while (1) {
          switch (_context53.prev = _context53.next) {
            case 0:
              _context53.next = 2;
              return regeneratorRuntime.awrap((0, _axios["default"])({
                method: 'GET',
                url: FRSAPIURL + '/noification'
              }));

            case 2:
              return _context53.abrupt("return", _context53.sent);

            case 3:
            case "end":
              return _context53.stop();
          }
        }
      });
    }
  }, {
    key: "getAllUser",
    value: function getAllUser() {
      return regeneratorRuntime.async(function getAllUser$(_context54) {
        while (1) {
          switch (_context54.prev = _context54.next) {
            case 0:
              _context54.next = 2;
              return regeneratorRuntime.awrap((0, _axios["default"])({
                method: 'GET',
                url: FRSAPIURL + '/user'
              }));

            case 2:
              return _context54.abrupt("return", _context54.sent);

            case 3:
            case "end":
              return _context54.stop();
          }
        }
      });
    }
  }, {
    key: "getUsersList",
    value: function getUsersList() {
      return regeneratorRuntime.async(function getUsersList$(_context55) {
        while (1) {
          switch (_context55.prev = _context55.next) {
            case 0:
              _context55.next = 2;
              return regeneratorRuntime.awrap((0, _axios["default"])({
                method: 'GET',
                url: FRSAPIURL + '/users'
              }));

            case 2:
              return _context55.abrupt("return", _context55.sent);

            case 3:
            case "end":
              return _context55.stop();
          }
        }
      });
    }
  }, {
    key: "getLoginRequestUserData",
    value: function getLoginRequestUserData(username, password) {
      return regeneratorRuntime.async(function getLoginRequestUserData$(_context56) {
        while (1) {
          switch (_context56.prev = _context56.next) {
            case 0:
              _context56.next = 2;
              return regeneratorRuntime.awrap((0, _axios["default"])({
                method: 'GET',
                url: FRSAPIURL + '/' + "users?username=".concat(username, "&password=").concat(password)
              }));

            case 2:
              return _context56.abrupt("return", _context56.sent);

            case 3:
            case "end":
              return _context56.stop();
          }
        }
      });
    }
  }, {
    key: "getPassengersList",
    value: function getPassengersList(itemsPerPage, pageNumber) {
      return regeneratorRuntime.async(function getPassengersList$(_context57) {
        while (1) {
          switch (_context57.prev = _context57.next) {
            case 0:
              console.log(itemsPerPage + '    ' + pageNumber); // return await axios.get('/passengers_list');

              _context57.next = 3;
              return regeneratorRuntime.awrap((0, _axios["default"])({
                method: 'GET',
                url: FRSAPIURL + '/passengers_list'
              }));

            case 3:
              return _context57.abrupt("return", _context57.sent);

            case 4:
            case "end":
              return _context57.stop();
          }
        }
      });
    }
  }, {
    key: "getCompetitorsDataMgt",
    value: function getCompetitorsDataMgt() {
      return regeneratorRuntime.async(function getCompetitorsDataMgt$(_context58) {
        while (1) {
          switch (_context58.prev = _context58.next) {
            case 0:
              _context58.next = 2;
              return regeneratorRuntime.awrap((0, _axios["default"])({
                method: 'GET',
                url: FRSAPIURL + '/competitors_data'
              }));

            case 2:
              return _context58.abrupt("return", _context58.sent);

            case 3:
            case "end":
              return _context58.stop();
          }
        }
      });
    }
  }, {
    key: "getSBUData",
    value: function getSBUData() {
      return regeneratorRuntime.async(function getSBUData$(_context59) {
        while (1) {
          switch (_context59.prev = _context59.next) {
            case 0:
              _context59.next = 2;
              return regeneratorRuntime.awrap((0, _axios["default"])({
                method: 'GET',
                url: FRSAPIURL + '/sub_data'
              }));

            case 2:
              return _context59.abrupt("return", _context59.sent);

            case 3:
            case "end":
              return _context59.stop();
          }
        }
      });
    }
  }, {
    key: "getSBUSisterConcernData",
    value: function getSBUSisterConcernData() {
      return regeneratorRuntime.async(function getSBUSisterConcernData$(_context60) {
        while (1) {
          switch (_context60.prev = _context60.next) {
            case 0:
              _context60.next = 2;
              return regeneratorRuntime.awrap((0, _axios["default"])({
                method: 'GET',
                url: FRSAPIURL + '/sister_concern_data'
              }));

            case 2:
              return _context60.abrupt("return", _context60.sent);

            case 3:
            case "end":
              return _context60.stop();
          }
        }
      });
    }
  }, {
    key: "getSDGeoLocation",
    value: function getSDGeoLocation() {
      return regeneratorRuntime.async(function getSDGeoLocation$(_context61) {
        while (1) {
          switch (_context61.prev = _context61.next) {
            case 0:
              _context61.next = 2;
              return regeneratorRuntime.awrap((0, _axios["default"])({
                method: 'GET',
                url: FRSAPIURL + '/geo_location'
              }));

            case 2:
              return _context61.abrupt("return", _context61.sent);

            case 3:
            case "end":
              return _context61.stop();
          }
        }
      });
    }
  }, {
    key: "getDAlistForDeliverySchedule",
    value: function getDAlistForDeliverySchedule() {
      return regeneratorRuntime.async(function getDAlistForDeliverySchedule$(_context62) {
        while (1) {
          switch (_context62.prev = _context62.next) {
            case 0:
              _context62.next = 2;
              return regeneratorRuntime.awrap((0, _axios["default"])(FRSAPIURL + '/DA_list', {
                method: 'GET' // headers: {
                //   'Authorization': token_type + ' ' + token
                // }

              }));

            case 2:
              return _context62.abrupt("return", _context62.sent);

            case 3:
            case "end":
              return _context62.stop();
          }
        }
      });
    }
  }, {
    key: "getInvoiceChallanListForDeliverySchedule",
    value: function getInvoiceChallanListForDeliverySchedule() {
      return regeneratorRuntime.async(function getInvoiceChallanListForDeliverySchedule$(_context63) {
        while (1) {
          switch (_context63.prev = _context63.next) {
            case 0:
              _context63.next = 2;
              return regeneratorRuntime.awrap((0, _axios["default"])(FRSAPIURL + '/delivery_schedule_invoice_chalan_list', {
                method: 'GET' // headers: {
                //   'Authorization': token_type + ' ' + token
                // }

              }));

            case 2:
              return _context63.abrupt("return", _context63.sent);

            case 3:
            case "end":
              return _context63.stop();
          }
        }
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