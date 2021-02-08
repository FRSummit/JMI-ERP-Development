<template>
  <div id="profile-modal" class="profile-modal hide">
    <div class="profile-modal-triangle-sec">
      <span class="profile-tri-icon">
        <i class="fas fa-caret-up"></i>
      </span>
    </div>
    <div class="profile-modal-inner">
      <div class="profile-img-title-designation">
        <img
          class="profile-img"
          src="../../assets/icons/user.png"
          alt="F R Summit"
        />
        <p class="profile-title">{{ user.name }}</p>
        <p class="profile-designation">{{ user.designation }}</p>
      </div>
      <div class="profile-role-section">
        <p class="profile-modal-role-text">View As</p>
        <p class="profile-role-role" v-for="(role, i) in user.role" :key="i">
          {{ role.role }}
        </p>
      </div>
      <div class="profile-my-profile">
        <p class="profile-my-profile-text">My Profile</p>
        <div>
          <a class="profile-view" href="https://www.google.com">View Profile</a>
        </div>
        <div>
          <a class="profile-pass-change" href="https://www.google.com"
            >Change Password</a
          >
        </div>
      </div>
      <p class="profile_logout">
        <a @click="logingOut">Logout</a>
      </p>
    </div>
  </div>
</template>

<script>
// import ERPSidebarService from "../../service/ERPSidebarService";
// const service = new ERPSidebarService();
import { mapState } from "vuex";
import env from '../../environment'

export default {
  data() {
    return {
      user: {
        name: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).user_detils.name : "Fayazur Rahman Summit",
        designation: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).user_detils.role_name : "Sr. Software Engineer",
        role: [
          {
            role: "Admin",
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
    // service.getAllUser().then((res) => {
    //   this.user = res.data[0];
    //   this.progress = false;
    // });
    console.log(JSON.parse(localStorage.getItem('user')).user_detils.name)
  },
  methods: {
    logingOut() {
      // this.$router.push('/login')
      window.location.href = env.baseURL + '/login'
      // console.log(env.baseURL)
    }
  },
};
</script>

<style scoped>
</style>