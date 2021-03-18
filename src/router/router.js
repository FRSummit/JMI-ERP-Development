import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// let web_title = 'JERP'

export const router = new VueRouter({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: () => import('../views/public_views/Home.vue')
    // },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/public_views/About.vue')
    },
    {
      // path: '/login',
      path: '/',
      name: 'Login',
      component: () => import('../views/public_views/Login/Login.vue')
    },
    {
      path: '/login-v1',
      name: 'Login',
      component: () => import('../views/public_views/Login/LoginV1.vue')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/public_views/Signup.vue')
    },
    {
      // path: '/dashboard',
      path: '/features/users/dashboard',
      name: 'Dashboard',
      component: () => import('../views/private_views/Dashboaard.vue')
    },
    {
      path: '/competitors-data-mgt',
      name: 'Competitor Data Management',
      component: () => import('../views/private_views/unknown/CompetitorsDataMgt.vue')
    },
    {
      path: '/sbu_pdf_test',
      name: 'SBU PDF TEST',
      component: () => import('../views/private_views/unknown/SBU_PdfTest.vue')
    },
    {
      path: '/sbu_pdf_test_2',
      name: 'SBU PDF TEST 2',
      component: () => import('../views/private_views/unknown/SBU_PdfTest_2.vue')
    },
    {
      path: '/sbu_pdf_test_3',
      name: 'SBU PDF TEST 3',
      component: () => import('../views/private_views/unknown/SBU_PdfTest_3.vue')
    },
    {
      path: '/adm/sbu',
      name: 'SBU',
      component: () => import('../views/private_views/ADM/SBU/SBU.vue')
    },
    {
      path: '/adm/test',
      name: 'Test',
      component: () => import('../views/private_views/ADM/SBU/Test.vue')
    },
    {
      path: '/adm/sbu/sbu-sister-concern:id',
      name: 'Sister Concern',
      component: () => import('../views/private_views/ADM/SBU/SBU-SisterConcern.vue')
    },
    {
      path: '/adm/sbu/create-new-sbu',
      name: 'Create New Strategic Business Unit (SBU)',
      component: () => import('../views/private_views/ADM/SBU/CreateNewSBU.vue')
    },
    {
      path: '/sd/sales-center',
      name: 'Sales Center',
      component: () => import('../views/private_views/SD/SalesArea/SalesCenter.vue')
    },
    {
      path: '/sd/geo-location',
      name: 'Geo Location',
      component: () => import('../views/private_views/SD/SalesArea/GeoLocation.vue')
    },
    // --------------------------------------------------------------------------------------
    // MONTHLY DELIVERY PLAN
    {
      path: '/features/local_sales/delivery_plan',
      name: 'Monthly Delivery Plan',
      component: () => import('../views/private_views/SD/MonthlyDeliveryPlan/MonthlyDeliveryPlan.vue')
    },
    // --------------------------------------------------------------------------------------
    // DS
    {
      path: '/features/local_sales/delivery_schedule',
      name: 'Delivery Scheduling',
      component: () => import('../views/private_views/SD/DeliveryScheduling/DeliveryScheduling.vue')
    },
    // --------------------------------------------------------------------------------------
    // DS - PACKING PREPARATION
    {
      path: '/sd/delivery-process--packing-preparation',
      name: 'Delivery Process - Packing Preparation',
      component: () => import('../views/private_views/SD/DeliveryProcessPackingPreparation/DeliveryProcessPackingPreparation.vue')
    },
    // --------------------------------------------------------------------------------------
    // DS - INVOICE PRINTING
    {
      path: '/sd/delivery-process-invoice-printing:id',
      name: 'Delivery Process - Invoice Printing',
      component: () => import('../views/private_views/SD/DeliveryProcessInvoiceChallanPrinting/DeliveryProcessInvoiceChallanPrinting.vue'),
      // meta: { title: 'JERP - INV' }
    },
    // --------------------------------------------------------------------------------------
    // INVOICE CHALLAN SUMMERY 
    {
      path: '/sd/invoice-challan-summery',
      name: 'Invoice Challan Summery ',
      component: () => import('../views/private_views/SD/InvoiceChallanSummery/InvoiceChallanSummery.vue')
    },
    // --------------------------------------------------------------------------------------
    // PENDING DS INVOICE LIST
    {
      path: '/sd/pending-ds-invoice-list',
      name: 'Delivery Process - Pending Invoice List',
      component: () => import('../views/private_views/SD/PendingDS_InvoiceList/PendingDS_InvoiceList.vue')
    },
    // --------------------------------------------------------------------------------------
    // DS DISPATCH ENTRY
    {
      path: '/sd/delivery-process--dispatch-entry',
      name: 'Delivery Process - Dispatch Entry',
      component: () => import('../views/private_views/SD/DeliveryProcessDispatchEntry/DispatchEntry.vue')
    },
    // --------------------------------------------------------------------------------------
    // CREATE ORDER
    {
      path: '/features/local_sales/sales_order',
      name: 'Create Order',
      component: () => import('../views/private_views/SD/Order/CreateOrder/CreateOrder.vue')
    },
    // --------------------------------------------------------------------------------------
    // ORDER APPROVAL
    {
      path: '/features/local_sales/order_approval',
      name: 'Order Approval',
      component: () => import('../views/private_views/SD/Order/OrderApproval/OrderApproval.vue')
    },
    // --------------------------------------------------------------------------------------
    // DELIVERIES
    {
      path: '/features/local_sales/deliveries',
      name: 'Deliveries',
      component: () => import('../views/private_views/SD/Deliveries/Deliveries.vue')
    },
    // --------------------------------------------------------------------------------------
    // RETURN
    {
      path: '/features/local_sales/return',
      name: 'Return',
      component: () => import('../views/private_views/SD/Return/Return.vue')
    },
    // --------------------------------------------------------------------------------------
    // CUSTOMER - CUSTOMER LIST
    {
      path: '/features/local_sales/customer_list',
      name: 'Customer List',
      component: () => import('../views/private_views/SD/Customer/CustomerList.vue')
    },
    // --------------------------------------------------------------------------------------
    // CUSTOMER - CREATE CUSTOMER
    {
      path: '/features/local_sales/create_customer',
      name: 'Create Customer',
      component: () => import('../views/private_views/SD/Customer/CreateCustomer/CreateCustomer.vue')
    },
    // --------------------------------------------------------------------------------------
    // CUSTOMER - CUSTOMER PROFILE
    {
      path: '/features/local_sales/customer_profile',
      name: 'Create Customer',
      component: () => import('../views/private_views/SD/Customer/CustomerProfile/CustomerProfile.vue')
    },
    // --------------------------------------------------------------------------------------
    // DOCTOR - DOCTOR LIST
    {
      path: '/features/local_sales/doctors_list',
      name: 'Doctors List',
      component: () => import('../views/private_views/SD/Doctor/DoctorsList.vue')
    },
    // --------------------------------------------------------------------------------------
    // DOCTOR - DOCTOR CREATE
    {
      path: '/features/local_sales/create_doctor',
      name: 'Create Doctor',
      component: () => import('../views/private_views/SD/Doctor/CreateDoctor/CreateDoctor.vue')
    },
    // --------------------------------------------------------------------------------------
    // DOCTOR - DOCTOR PROFILE
    {
      path: '/features/local_sales/doctors_profile:count',
      name: 'Doctors Profile',
      component: () => import('../views/private_views/SD/Doctor/DoctorProfile/DoctorsProfile.vue')
    },

    // --------------------------------------------------------------------------------------
    // 404 PAGES
    {
      path: '/401',
      name: 'Unauthorized Access',
      component: () => import('../views/private_views/401.vue')
    },
    {
      path: '/404',
      name: 'Page Not Found',
      component: () => import('../views/private_views/404.vue')
    },
    {
      path: '/408',
      name: 'Request Timeout',
      component: () => import('../views/private_views/408.vue')
    },
    {
      path: '/503',
      name: 'Service Unavailable',
      component: () => import('../views/private_views/503.vue')
    },
    {
      path: '/under-construction',
      name: 'Under Construction',
      component: () => import('../views/private_views/UnderConstructionPage.vue')
    },
    {
      path: '/under-maintenance',
      name: 'Under Maintenance',
      component: () => import('../views/private_views/UnderMaintenance.vue')
    },
    {
      path: '/lock_screen',
      name: 'Lock Screen',
      component: () => import('../views/private_views/LockScreen/LockScreen.vue')
    },

    // otherwise redirect to home
    // {
    //   path: '*', 
    //   redirect: '/'
    // }
    {
      path: '*', 
      redirect: '/404'
    }
  ]
});

router.beforeEach((to, from, next) => {
  // console.log('before each')
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/', '/login', '/login-v1', '/signup'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('jerp_logged_user');
  console.log(JSON.parse(localStorage.getItem('jerp_logged_user')) ? JSON.parse(localStorage.getItem('jerp_logged_user')).expires_at : 'You are logged out')

  if (authRequired && !loggedIn) {
    return next('/');
  } else if (authRequired && loggedIn) {
    // if(new Date().getTime() > JSON.parse(localStorage.getItem('jerp_logged_user')).expiresAt) {
    if(new Date().getTime() > JSON.parse(localStorage.getItem('jerp_logged_user')).expires_at) {
      return next('/');
    }
    // if((JSON.parse(localStorage.getItem('jerp_logged_user')).expires_at - new Date().getTime()) < 0) {
    //   return next('/login');
    // }
  }
  // Store.commit('setUserIsAuthenticated', routerAuthCheck);
  if (to.matched.some(record => {
    console.log(record.path)
    console.log(record.path)
  })) {
    console.log('router check if')
    // if(routerAuthCheck){
    //   next();
    // }
    // else{
    //  router.replace('/sign-in');
    // }
  }
  else{
    // Store.commit('setUserIsAuthenticated', false);
    console.log('router check else')
    next();
  }
  // next();
})