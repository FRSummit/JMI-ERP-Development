<template>
  <div id="master-layout" class="master-layout">
    <!-- header section -->
    <div id="header" class="header" v-if="privatePage">
      <div class="header-inner">
        <div class="left-section">
          <div class="hamburger-menu-section">
            <span class="hamburger" @click="toggleNav()">&#9776;</span>
          </div>
          <div class="logo-section">
            <img
              class="group-logo"
              src="../../assets/images/groups/nipro_jmi-pharma.png"
              alt=""
            />
          </div>
          <div class="group-name-section">
            <p class="group-name">Nipro JMI Pharma</p>
          </div>
          <div class="group-selection-dropdown-section">
            <span class="group-selection-icon" @click="selectGroup()">
              <i class="fas fa-exchange-alt"></i>
            </span>
            <GroupModal />
          </div>
        </div>
        <div class="right-section">
          <div class="chat-section" @click="chatIconClick()">
            <span class="chat-icon-chat">
              <i class="far fa-comment-alt"></i>
            </span>
            <span class="chat-circle"></span>
            <ChatModal />
          </div>
          <div class="notification-section" @click="bellIconClick()">
            <span class="bell-icon-bell">
              <i class="far fa-bell"></i>
            </span>
            <span class="bell-circle"></span>
            <NotificationModal />
          </div>
          <div class="profile-section" @click="profileClick()">
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
                  <i class="fas fa-chevron-down"></i>
                </span>
              </div>
              <p class="profile-designation">{{ userDesignation }}</p>
            </div>
            <ProfileModal />
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
      <SidenavMenu />
    </div>
    <div id="main-section">
      <router-view v-on:routeName="currentRouteName" />
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
  </div>
</template>

<script>
// import SidenavMenu from "./SidenavMenu";
import SidenavMenu from "./SidenavMenu2";
import GroupModal from "./GroupModal";
import NotificationModal from "./NotificationModal";
import ChatModal from "./ChatModal";
import ProfileModal from "./ProfileModal";

// import ERPSidebarService from '../../service/ERPSidebarService';
// const service = new ERPSidebarService();

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
      userName: JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")).user_detils.name : "Fayazur Rahman Summit",
      userDesignation: JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")).user_detils.role_name : "Sr. Software Engineer",
      sidenav: false,
      authenticated: this.$store.state.userIsAuthorized,
      privatePage: false,
    };
  },
  created() {},
  mounted() {
    // console.log(this.$route.name);
  },
  methods: {
    toggleNav() {
      if (this.sidenav) {
        this.sidenav = false;
        document.getElementById("sidenavbar").style.width = "60px";
        document.querySelector(".menu-section-inner").style.left = "-350px";
        document.querySelector(".menu-section-colps-icon").style.right = "0px";
      } else {
        this.sidenav = true;
        document.getElementById("sidenavbar").style.width = "350px";
        document.querySelector(".menu-section-inner").style.left = "0px";
        document.querySelector(".menu-section-colps-icon").style.right =
          "-60px";
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
      }
    },
    sidebarHoverOver() {
      if (!this.sidenav) {
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
  },
};
</script>

<style scoped>
.hide {
  display: none;
}
</style>