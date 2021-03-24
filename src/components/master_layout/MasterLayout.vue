<template>
  <div id="master-layout" class="master-layout">
    <!-- header section -->
    <div id="header" class="header" v-if="privatePage">
      <div class="header-inner">
        <div class="left-section">
          <div class="hamburger-menu-section">
            <!-- <span class="hamburger" @click="toggleNav()">&#9776;</span> -->
            <span class="hamburger" @click="toggleNav()"><i class="zmdi zmdi-menu"></i></span>
          </div>
          <div class="logo-section">
            <img
              class="group-logo"
              src="../../assets/images/groups/nipro_jmi-pharma.png"
              alt=""
            />
          </div>
          <div class="group-name-section">
            <p class="group-name">{{ sbu_name }}</p>
          </div>
          <div class="group-selection-dropdown-section" v-click-outside="groupModalOutsideClick">
            <span class="group-selection-icon" @click="selectGroup()" v-if="ASSIGNED_SBU_LIST ? (ASSIGNED_SBU_LIST.length > 0 ? true : false) : false">
              <i class="fas fa-exchange-alt"></i>
            </span>
            <GroupModal v-on:sbu_list_is_present="sbuListIsPresent" :ASSIGNED_SBU_LIST="ASSIGNED_SBU_LIST" />
          </div>
        </div>
        <div class="right-section">
          <div class="chat-section" v-click-outside="chatModalOutsideClick">
            <div class="chat-section-inner" @click="chatIconClick()">
              <span class="chat-icon-chat">
                <i class="zmdi zmdi-comment-text"></i>
              </span>
              <span class="chat-circle"></span>
              <ChatModal />
            </div>
          </div>
          <div class="notification-section" v-click-outside="notificationModalOutsideClick">
            <div class="notification-section-inner" @click="bellIconClick()">
              <span class="bell-icon-bell">
                <i class="zmdi zmdi-notifications"></i>
              </span>
              <span class="bell-circle"></span>
              <NotificationModal />
            </div>
          </div>
          <div class="profile-section" v-click-outside="profileModalOutsideClick">
            <div class="profile-img-section">
              <img
                class="user-icon"
                src="../../assets/icons/user.png"
                alt="user"
              />
            </div>
            <div class="profile-desc-section">
              <div>
                <p class="profile-name">{{ userName }}</p>
                <span class="profile-arrow">
                  <i class="zmdi zmdi-caret-down" @click="profileClick()"></i>
                </span>
              </div>
              <p class="profile-designation">{{ userDesignation }}</p>
            </div>
            <ProfileModal v-on:lock_screen_clicked="lockScreenClicked"/>
          </div>
        </div>
      </div>
    </div>

    <!-- sidebar section -->
    <div
      id="sidenavbar"
      class="sidenavbar"
      v-if="privatePage"
      @mouseover="sidebarHoverOver()"
      @mouseleave="sidebarHoverLeave()"
    >
      <SidenavMenu :WEB_MENU="WEB_MENU" v-on:close_side_nav="closeSideNav" />
    </div>
    <div id="main-section">
      <router-view v-on:routeName="currentRouteName" v-on:new_dashboard_occured="newDashboardOccuredEventHandler" />
    </div>

    <!-- Footer Section -->
    <div id="footer" class="footer" v-if="privatePage">
      <marquee>
        <div class="footer-inner">
          <p>New Life Hospital Opening Ceremony Going On</p>
          <p>New Life Hospital Opening Ceremony Going On</p>
          <p>New Life Hospital Opening Ceremony Going On</p>
        </div>
      </marquee>
    </div>
    <!-- Loading Message -->
    <div id="info-modal" class="modal-popup-section info-modal" v-if="err_popup_modal">
      <div class="modal-popup-section-inner update-successfully-modal-inner">
        <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
        <p class="popup-text info">{{ err_message ? err_message : 'Please wait, we are processing ...' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import SidenavMenu from "./SidenavMenu";
import SidenavMenu from "./SidenavMenu2";
import GroupModal from "./GroupModal";
import NotificationModal from "./NotificationModal";
import ChatModal from "./ChatModal";
import ProfileModal from "./ProfileModal";

import ERPSidebarService from '../../service/ERPSidebarService';
const service = new ERPSidebarService();
import firebase from 'firebase'

export default {
  components: {
    SidenavMenu,
    GroupModal,
    NotificationModal,
    ChatModal,
    ProfileModal,
  },
  data() {
    return {
      userName: null,
      userDesignation: null,
      // authenticated: null,
      // userName: JSON.parse(localStorage.getItem("jerp_logged_user")) ? JSON.parse(localStorage.getItem("jerp_logged_user")).user_detils.name : "",
      // userDesignation: JSON.parse(localStorage.getItem("jerp_logged_user")) ? JSON.parse(localStorage.getItem("jerp_logged_user")).user_detils.role_name : "",
      authenticated: this.$store.state.userIsAuthorized,
      sidenav: false,
      privatePage: false,
      mouseOverTriger: true,
      sbu_name: null,
      sbu_list_is_present: false,
      ASSIGNED_SBU_LIST: null,
      WEB_MENU: [],
      err_popup_modal: false,
      err_message: null,
    };
  },
  created() {},
  mounted() {
      // this.userName = JSON.parse(localStorage.getItem("jerp_logged_user")) ? JSON.parse(localStorage.getItem("jerp_logged_user")).user_detils.name : ""
      // this.userDesignation = JSON.parse(localStorage.getItem("jerp_logged_user")) ? JSON.parse(localStorage.getItem("jerp_logged_user")).user_detils.role_name : ""
      // this.authenticated = this.$store.state.userIsAuthorized
    // console.log(this.$route.name);
    if(JSON.parse(localStorage.getItem("jerp_logged_user"))) {
      setTimeout( () => {
        console.log('local storage')
        // this.userName = JSON.parse(localStorage.getItem("jerp_logged_user")) ? JSON.parse(localStorage.getItem("jerp_logged_user")).user_detils.name : ""
        // this.userDesignation = JSON.parse(localStorage.getItem("jerp_logged_user")) ? JSON.parse(localStorage.getItem("jerp_logged_user")).user_detils.role_name : ""
        // this.authenticated = this.$store.state.userIsAuthorized
      }, 1000)
      this.newDashboardOccuredEventHandler()
    }
  },
  methods: {
    closeSideNav() {
      this.sidenav = false;
      this.mouseOverTriger = false
      document.getElementById("sidenavbar").style.width = "60px";
      document.querySelector(".menu-section-inner").style.left = "-350px";
      document.querySelector(".menu-section-colps-icon").style.right = "0px";
      document.querySelector('.hamburger').innerHTML = '<i class="zmdi zmdi-menu"></i>'
      setTimeout( () => {
        this.mouseOverTriger = true
      }, 1000)
    },
    toggleNav() {
      if (this.sidenav) {
        this.sidenav = false;
        document.getElementById("sidenavbar").style.width = "60px";
        document.querySelector(".menu-section-inner").style.left = "-350px";
        document.querySelector(".menu-section-colps-icon").style.right = "0px";
        document.querySelector('.hamburger').innerHTML = '<i class="zmdi zmdi-menu"></i>'
      } else {
        this.sidenav = true;
        document.getElementById("sidenavbar").style.width = "350px";
        document.querySelector(".menu-section-inner").style.left = "0px";
        document.querySelector(".menu-section-colps-icon").style.right =
          "-60px";
        document.querySelector('.hamburger').innerHTML = '<i class="zmdi zmdi-close" style="color: #000000"></i>'
      }
    },
    selectGroup() {
      this.modalToggle("group-list-section");
    },
    chatIconClick() {
      this.modalToggle("chat-modal");
    },
    bellIconClick() {
      this.modalToggle("notification-modal");
    },
    profileClick() {
      this.modalToggle("profile-modal");
      this.profileArrowRotation();
    },
    modalToggle(id) {
      if (document.querySelector("#" + id).className === id + " hide") {
        this.closeOtherModals(id);
        document.querySelector("#" + id).className = id;
      } else {
        document.querySelector("#" + id).className = id + " hide";
      }
    },
    closeOtherModals(currentModal) {
      let modals = [
        { name: "group-list-section" },
        { name: "chat-modal" },
        { name: "notification-modal" },
        { name: "profile-modal" },
      ];

      for (let i = 0; i < modals.length; i++) {
        let selectedSelector = document.querySelector("#" + modals[i].name);
        if (currentModal !== modals[i].name) {
          if (selectedSelector.className === modals[i].name) {
            selectedSelector.className = modals[i].name + " hide";
          }
        }
      }
    },
    profileArrowRotation() {
      if (
        document.getElementById("profile-modal").className === "profile-modal"
      ) {
        document.querySelector(".profile-arrow").className =
          "profile-arrow profile-arrow-rotation";
      } else {
        document.querySelector(".profile-arrow").className = "profile-arrow";
      }
    },
    currentRouteName(name) {
      if (name !== "Login") {
        this.privatePage = true;
      } else if(name === "Login") {
        this.privatePage = false;
        // localStorage.removeItem('jerp_logged_user');
      }
    },
    sidebarHoverOver() {
      if (!this.sidenav && this.mouseOverTriger) {
        document.getElementById("sidenavbar").style.width = "350px";
        document.querySelector(".menu-section-inner").style.left = "0px";
        document.querySelector(".menu-section-colps-icon").style.right =
          "-60px";
      }
    },
    sidebarHoverLeave() {
      if (!this.sidenav) {
        document.getElementById("sidenavbar").style.width = "60px";
        document.querySelector(".menu-section-inner").style.left = "-350px";
        document.querySelector(".menu-section-colps-icon").style.right = "0px";
      }
    },
    lockScreenClicked() {
      this.modalToggle("profile-modal");
      this.profileArrowRotation();
    },
    // Modal Outside Click Action
    groupModalOutsideClick() {
      if(document.querySelector('#group-list-section').className === 'group-list-section') {
        this.modalToggle("group-list-section");
      }
    },
    chatModalOutsideClick() {
      if(document.querySelector('#chat-modal').className === 'chat-modal') {
        this.modalToggle("chat-modal");
      }
    },
    notificationModalOutsideClick() {
      if(document.querySelector('#notification-modal').className === 'notification-modal') {
        this.modalToggle("notification-modal");
      }
    },
    profileModalOutsideClick() {
      if(document.querySelector('#profile-modal').className === 'profile-modal') {
        this.modalToggle("profile-modal");
        this.profileArrowRotation();
      }
    },
    // profileUserName(username, designation, sbu_name, token) {
    //   this.userName = username
    //   this.userDesignation = designation
    //   this.sbu_name = sbu_name
    //   console.log(token)
    // },
    sbuListIsPresent(flag) {
      console.log(flag)
      this.sbu_list_is_present = flag
    },
    async newDashboardOccuredEventHandler() {
      console.log('newDashboardOccuredEventHandler')
      // let token = JSON.parse(localStorage.getItem("jerp_logged_user")) ? JSON.parse(localStorage.getItem("jerp_logged_user")).accessToken : ''
      let token = JSON.parse(localStorage.getItem("jerp_logged_user")).accessToken
      this.userName = JSON.parse(localStorage.getItem("jerp_logged_user")).user_detils.name
      this.userDesignation = JSON.parse(localStorage.getItem("jerp_logged_user")).user_detils.role_name
      this.sbu_name = JSON.parse(localStorage.getItem("jerp_logged_user")).user_detils.sbu_name

      // console.log(token)
      // console.log(this.$store.state.userData)

      await this.SYSTEM_WEB_MENU__FROM_SERVICE()
      await this.WEB_SYSTEM_ASSIGNED_SBU__FROM_SERVICE(token)
      this.loadNotification()
    },
    loadNotification() {
      firebase.database().ref('users').on('value', (snapshot)=> {
        console.log(snapshot.val())
      });
    },
    // ----------------------------------------------------------------------------------------
    // SERVICE IMPLEMENTATION
    async WEB_SYSTEM_ASSIGNED_SBU__FROM_SERVICE(token) {
      this.ASSIGNED_SBU_LIST = []
      await service.getWEB_SystemAssignedSBU(token)
        .then(res => {
          console.log(res.data)
          this.ASSIGNED_SBU_LIST = res.data.data
          this.progress = false;
        })
        .catch(err => {
            if(err) {
                // window.location.reload()
                console.log(err)
            }
        })
    },
    async SYSTEM_WEB_MENU__FROM_SERVICE() {
      this.WEB_MENU = []
      // console.log(JSON.parse(localStorage.getItem("jerp_logged_user")))
      await service.getWebSideMenu()
        .then(res => {
          console.log(res.data)
          this.WEB_MENU = res.data.data
          // console.log(JSON.parse(localStorage.getItem("jerp_logged_user")))
          if(JSON.parse(localStorage.getItem("jerp_logged_user")).user_detils === null) {
              window.location.reload()
          }
        })
        .catch(err => {
            if(err) {
              // this.err_popup_modal = true
              // this.err_message = 'New Login, please reload'
              // setTimeout( () => {
              //   this.err_popup_modal = false
              //   this.err_message = null
              //   // window.location.reload()
              // }, 2000)
              // console.log(err)
              if(this.WEB_MENU.length === 0) {
                // window.location.reload()
              }
            }
        })
    }
  },
  // computed: {
  //   current_pathname() {
  //     console.log(this.$route.path)
  //     if(this.$route.path === '/') {
  //       console.log('login page')
  //       console.log(this.WEB_MENU)
  //     } else {
  //       console.log('private page')
  //       console.log(this.WEB_MENU)
  //       if(this.WEB_MENU.length === 0) {
  //         window.location.reload()
  //       }
  //     }
  //     return this.$router.pathname
  //   }
  // },
  // watch: {
  //   current_pathname(newVal, oldVal) {
  //     if(newVal !== oldVal) {
  //       console.log(newVal)
  //     }
  //   }
  // }
};
</script>

<style scoped>
.hide {
  display: none;
}
</style>