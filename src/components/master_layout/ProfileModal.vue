<template>
  <div id="profile-modal" class="profile-modal hide">
    <div class="profile-modal-inner">
      <div class="profile-img-title-designation">
        <div class="profile-modal-img-section">
          <img
            class="profile-img"
            src="../../assets/icons/user.png"
            alt="F R Summit"
          />
        </div>
        <div class="name-modal-designation-section">
          <p class="profile-title">{{ user.name }}</p>
          <p class="profile-designation">{{ user.designation }}</p>
        </div>
      </div>
      <span class="devider"></span>
      <!-- <div class="profile-role-section">
        <p class="profile-modal-role-text">Switch Role</p>
        <p class="profile-role-role" v-for="(role, i) in user.role" :key="i">
          <span>{{ role.role }}</span>
        </p>
      </div>
      <span class="devider"></span> -->
      <div class="settings-screen-section">
        <div class="switch-section">
          <span>
            <i class="zmdi zmdi-swap-vertical-circle"></i>
            <span>Switch Role</span>
          </span>
        </div>
        <span class="devider"></span>
        <div class="settings-section">
          <span>
            <i class="zmdi zmdi-settings"></i>
            <span>Settings</span>
          </span>
        </div>
        <span class="devider"></span>
        <div class="lock-screen-section">
          <span @click="lockScreenClick">
            <i class="zmdi zmdi-lock"></i>
            <span>Lock Screen</span>
          </span>
        </div>
      </div>
      <p class="profile_logout" @click="logingOut">
        <i class="zmdi zmdi-power"></i>
        <a>Logout</a>
      </p>
    </div>
  </div>
</template>

<script>
// import ERPSidebarService from "../../service/ERPSidebarService";
// const service = new ERPSidebarService();
import { mapState } from "vuex";
// import env from '../../environment'

export default {
  data() {
    return {
      user: {
        name: JSON.parse(localStorage.getItem("jerp_logged_user"))
          ? JSON.parse(localStorage.getItem("jerp_logged_user")).user_detils.name
          : "Fayazur Rahman Summit",
        designation: JSON.parse(localStorage.getItem("jerp_logged_user"))
          ? JSON.parse(localStorage.getItem("jerp_logged_user")).user_detils.role_name
          : "Sr. Software Engineer",
        role: [
          {
            role: "Admin",
          },
          {
            role: "Developer",
          },
          {
            role: "Developer",
          },
          {
            role: "Developer",
          },
          {
            role: "User",
          },
        ],
      },
      progress: true,
    };
  },
  computed: {
    ...mapState({
      account: (state) => state.account,
      users: (state) => state.users.all,
    }),
  },
  created() {
  },
  methods: {
    logingOut() {
      // this.$router.push('/')
      // window.location.href = env.baseURL + '/'
      window.location.href = window.location.origin + "/";
      // console.log(window.location.origin.split('//')[1])
    },
    lockScreenClick() {
      if (this.$router.currentRoute.path !== "/lock_screen") {
        this.$router.push("/lock_screen");
        this.$emit("lock_screen_clicked");
      }
    },
  }
};
</script>

<style scoped>
/* GLOBAL STYLES */
/* @import '../../custom.css';

@import '../../assets/roboto-font.css';
@import '../../assets/t2-style.css';
@import '../../assets/style-transfer_requition.css';

@import '../../assets/css/styles.css';
@import '../../assets/css/styles_page_included.css'; */
/* GLOBAL STYLES */
</style>