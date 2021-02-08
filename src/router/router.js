import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

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
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/private_views/Dashboaard.vue')
    },
    {
      path: '/competitors-data-mgt',
      name: 'Competitor Data Management',
      component: () => import('../views/private_views/unknown/CompetitorsDataMgt.vue')
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
    {
      path: '/sd/monthly-delivery-plan',
      name: 'Monthly Delivery Plan',
      component: () => import('../views/private_views/SD/MonthlyDeliveryPlan/MonthlyDeliveryPlan.vue')
    },
    {
      path: '/sd/delivery-scheduling',
      name: 'Delivery Scheduling',
      component: () => import('../views/private_views/SD/DeliveryScheduling/DeliveryScheduling.vue')
    },
    {
      path: '/sd/delivery-process--packing-preparation',
      name: 'Delivery Process - Packing Preparation',
      component: () => import('../views/private_views/SD/DeliveryProcessPackingPreparation/DeliveryProcessPackingPreparation.vue')
    },
    {
      path: '/sd/delivery-process--invoice-rinting',
      name: 'Delivery Process - Invoice Printing',
      component: () => import('../views/private_views/SD/DeliveryProcessInvoiceChallanPrinting/DeliveryProcessInvoiceChallanPrinting.vue')
    },
    {
      path: '/sd/delivery-process--dispatch-entry',
      name: 'Delivery Process - Dispatch Entry',
      component: () => import('../views/private_views/SD/DeliveryProcessDispatchEntry/DispatchEntry.vue')
    },

    // 404 Page
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
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  } else if (authRequired && loggedIn) {
    // if(new Date().getTime() > JSON.parse(localStorage.getItem('user')).expiresAt) {
    if(new Date().getTime() > JSON.parse(localStorage.getItem('user')).expires_at) {
      return next('/login');
    }
  }
  next();
})